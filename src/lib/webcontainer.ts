import { supabase } from './supabase';

// Types
export interface WebContainerConfig {
  id: string;
  name: string;
  type: 'development' | 'testing' | 'staging' | 'production';
  parent_id?: string;
  resources: {
    cpu: number;
    memory: number;
    storage: number;
  };
  network: {
    type: 'bridge' | 'host' | 'overlay';
    ports: number[];
    dns?: string[];
  };
  environment: Record<string, string>;
  mounts: Array<{
    source: string;
    target: string;
    type: 'bind' | 'volume';
    readonly?: boolean;
  }>;
  created_at: string;
  updated_at: string;
  status: 'running' | 'stopped' | 'error';
}

export interface WebContainerMetrics {
  container_id: string;
  cpu_usage: number;
  memory_usage: number;
  network_rx: number;
  network_tx: number;
  disk_read: number;
  disk_write: number;
  timestamp: string;
}

export interface WebContainerNesting {
  parent_id: string;
  child_id: string;
  relationship_type: 'development' | 'testing' | 'production';
  created_at: string;
}

// API Functions
export const createContainer = async (config: Omit<WebContainerConfig, 'id' | 'created_at' | 'updated_at'>): Promise<WebContainerConfig | null> => {
  try {
    const now = new Date().toISOString();
    const { data, error } = await supabase
      .from('webcontainers')
      .insert([{
        ...config,
        created_at: now,
        updated_at: now
      }])
      .select()
      .single();

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error creating webcontainer:', error);
    return null;
  }
};

export const getContainer = async (id: string): Promise<WebContainerConfig | null> => {
  try {
    const { data, error } = await supabase
      .from('webcontainers')
      .select('*')
      .eq('id', id)
      .single();

    if (error) throw error;
    return data;
  } catch (error) {
    console.error(`Error fetching webcontainer ${id}:`, error);
    return null;
  }
};

export const updateContainer = async (id: string, updates: Partial<WebContainerConfig>): Promise<WebContainerConfig | null> => {
  try {
    const { data, error } = await supabase
      .from('webcontainers')
      .update({
        ...updates,
        updated_at: new Date().toISOString()
      })
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;
    return data;
  } catch (error) {
    console.error(`Error updating webcontainer ${id}:`, error);
    return null;
  }
};

export const deleteContainer = async (id: string): Promise<boolean> => {
  try {
    const { error } = await supabase
      .from('webcontainers')
      .delete()
      .eq('id', id);

    if (error) throw error;
    return true;
  } catch (error) {
    console.error(`Error deleting webcontainer ${id}:`, error);
    return false;
  }
};

// Nesting and Communication
export const createNesting = async (parentId: string, childId: string, type: WebContainerNesting['relationship_type']): Promise<WebContainerNesting | null> => {
  try {
    const { data, error } = await supabase
      .from('webcontainer_nesting')
      .insert([{
        parent_id: parentId,
        child_id: childId,
        relationship_type: type,
        created_at: new Date().toISOString()
      }])
      .select()
      .single();

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error creating webcontainer nesting:', error);
    return null;
  }
};

export const getNestedContainers = async (parentId: string): Promise<WebContainerConfig[]> => {
  try {
    // First get the nested relationships
    const { data: nestingData, error: nestingError } = await supabase
      .from('webcontainer_nesting')
      .select('child_id, relationship_type, created_at')
      .eq('parent_id', parentId);

    if (nestingError) throw nestingError;
    if (!nestingData || nestingData.length === 0) return [];

    // Then get the container details for each child
    const childIds = nestingData.map(n => n.child_id);
    const { data, error } = await supabase
      .from('webcontainers')
      .select('*')
      .in('id', childIds);

    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error(`Error fetching nested containers for ${parentId}:`, error);
    return [];
  }
};

// Metrics and Monitoring
export const recordMetrics = async (metrics: Omit<WebContainerMetrics, 'timestamp'>): Promise<boolean> => {
  try {
    const { error } = await supabase
      .from('webcontainer_metrics')
      .insert([{
        ...metrics,
        timestamp: new Date().toISOString()
      }]);

    if (error) throw error;
    return true;
  } catch (error) {
    console.error('Error recording webcontainer metrics:', error);
    return false;
  }
};

export const getMetrics = async (containerId: string, timeRange: { start: string; end: string }): Promise<WebContainerMetrics[]> => {
  try {
    const { data, error } = await supabase
      .from('webcontainer_metrics')
      .select('*')
      .eq('container_id', containerId)
      .gte('timestamp', timeRange.start)
      .lte('timestamp', timeRange.end)
      .order('timestamp', { ascending: true });

    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error(`Error fetching metrics for container ${containerId}:`, error);
    return [];
  }
};

// Communication Utilities
export const sendMessage = async (fromId: string, toId: string, message: any): Promise<boolean> => {
  try {
    const { error } = await supabase
      .from('webcontainer_messages')
      .insert([{
        from_container: fromId,
        to_container: toId,
        message,
        sent_at: new Date().toISOString()
      }]);

    if (error) throw error;
    return true;
  } catch (error) {
    console.error('Error sending message between containers:', error);
    return false;
  }
};

export const subscribeToMessages = (containerId: string, callback: (message: any) => void) => {
  return supabase
    .channel(`container-${containerId}`)
    .on(
      'postgres_changes',
      {
        event: 'INSERT',
        schema: 'public',
        table: 'webcontainer_messages',
        filter: `to_container=eq.${containerId}`
      },
      (payload) => callback(payload.new)
    )
    .subscribe();
};