import axios from 'axios';
import { supabase } from './supabase';

// Nettica API configuration
const API_BASE_URL = import.meta.env.VITE_NETTICA_API_URL || 'https://api.nettica.com/v1';
const API_KEY = import.meta.env.VITE_NETTICA_API_KEY || '';

// Initialize axios instance for Nettica API
const netticaApi = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${API_KEY}`
  }
});

// Types
export interface NetticaNetwork {
  id: string;
  name: string;
  description?: string;
  status: 'active' | 'inactive' | 'pending';
  type: 'mesh' | 'hub-spoke' | 'point-to-point';
  created_at: string;
  updated_at: string;
  nodes: number;
  connections: number;
  bandwidth_usage: number;
  region: string;
}

export interface NetticaNode {
  id: string;
  network_id: string;
  name: string;
  type: 'gateway' | 'endpoint' | 'relay';
  status: 'online' | 'offline' | 'degraded';
  ip_address: string;
  location: string;
  created_at: string;
  last_seen: string;
  metrics: {
    cpu_usage: number;
    memory_usage: number;
    disk_usage: number;
    bandwidth_in: number;
    bandwidth_out: number;
  };
}

export interface NetticaConnection {
  id: string;
  network_id: string;
  source_id: string;
  target_id: string;
  type: 'direct' | 'routed' | 'vpn';
  status: 'active' | 'inactive' | 'degraded';
  latency: number;
  bandwidth: number;
  created_at: string;
  updated_at: string;
  metrics: {
    packet_loss: number;
    jitter: number;
    throughput: number;
  };
}

export interface NetticaMetrics {
  network_id: string;
  period: string;
  nodes_online: number;
  nodes_total: number;
  connections_active: number;
  connections_total: number;
  bandwidth_usage: number;
  latency_avg: number;
  packet_loss_avg: number;
  availability: number;
}

// API Functions

// Networks
export const getNetworks = async (): Promise<NetticaNetwork[]> => {
  try {
    const { data } = await netticaApi.get('/networks');
    return data.networks;
  } catch (error) {
    console.error('Error fetching Nettica networks:', error);
    return [];
  }
};

export const getNetwork = async (id: string): Promise<NetticaNetwork | null> => {
  try {
    const { data } = await netticaApi.get(`/networks/${id}`);
    return data.network;
  } catch (error) {
    console.error(`Error fetching Nettica network ${id}:`, error);
    return null;
  }
};

export const createNetwork = async (network: Partial<NetticaNetwork>): Promise<NetticaNetwork | null> => {
  try {
    const { data } = await netticaApi.post('/networks', network);
    return data.network;
  } catch (error) {
    console.error('Error creating Nettica network:', error);
    return null;
  }
};

// Nodes
export const getNodes = async (networkId: string): Promise<NetticaNode[]> => {
  try {
    const { data } = await netticaApi.get(`/networks/${networkId}/nodes`);
    return data.nodes;
  } catch (error) {
    console.error(`Error fetching nodes for network ${networkId}:`, error);
    return [];
  }
};

export const getNode = async (networkId: string, nodeId: string): Promise<NetticaNode | null> => {
  try {
    const { data } = await netticaApi.get(`/networks/${networkId}/nodes/${nodeId}`);
    return data.node;
  } catch (error) {
    console.error(`Error fetching node ${nodeId}:`, error);
    return null;
  }
};

// Connections
export const getConnections = async (networkId: string): Promise<NetticaConnection[]> => {
  try {
    const { data } = await netticaApi.get(`/networks/${networkId}/connections`);
    return data.connections;
  } catch (error) {
    console.error(`Error fetching connections for network ${networkId}:`, error);
    return [];
  }
};

// Metrics
export const getNetworkMetrics = async (
  networkId: string,
  period: 'hour' | 'day' | 'week' | 'month' = 'day'
): Promise<NetticaMetrics | null> => {
  try {
    const { data } = await netticaApi.get(`/networks/${networkId}/metrics`, {
      params: { period }
    });
    return data.metrics;
  } catch (error) {
    console.error(`Error fetching metrics for network ${networkId}:`, error);
    return null;
  }
};

// Mock data for development
export const getMockNetworks = (): NetticaNetwork[] => {
  return [
    {
      id: 'net1',
      name: 'Production Network',
      description: 'Main production infrastructure network',
      status: 'active',
      type: 'mesh',
      created_at: '2025-01-15T10:00:00Z',
      updated_at: '2025-03-28T15:30:00Z',
      nodes: 12,
      connections: 15,
      bandwidth_usage: 850.5,
      region: 'us-east-1'
    },
    {
      id: 'net2',
      name: 'Development Network',
      description: 'Development and testing environment',
      status: 'active',
      type: 'hub-spoke',
      created_at: '2025-02-01T09:00:00Z',
      updated_at: '2025-03-28T14:45:00Z',
      nodes: 8,
      connections: 7,
      bandwidth_usage: 320.8,
      region: 'us-west-2'
    },
    {
      id: 'net3',
      name: 'Backup Network',
      description: 'Disaster recovery infrastructure',
      status: 'inactive',
      type: 'point-to-point',
      created_at: '2025-01-20T11:30:00Z',
      updated_at: '2025-03-27T16:20:00Z',
      nodes: 4,
      connections: 3,
      bandwidth_usage: 50.2,
      region: 'eu-west-1'
    }
  ];
};

export const getMockNodes = (networkId: string): NetticaNode[] => {
  return [
    {
      id: 'node1',
      network_id: networkId,
      name: 'Gateway-01',
      type: 'gateway',
      status: 'online',
      ip_address: '10.0.1.1',
      location: 'us-east-1a',
      created_at: '2025-01-15T10:30:00Z',
      last_seen: '2025-03-28T15:45:00Z',
      metrics: {
        cpu_usage: 45.2,
        memory_usage: 62.8,
        disk_usage: 78.5,
        bandwidth_in: 256.3,
        bandwidth_out: 198.7
      }
    },
    {
      id: 'node2',
      network_id: networkId,
      name: 'Endpoint-01',
      type: 'endpoint',
      status: 'online',
      ip_address: '10.0.1.2',
      location: 'us-east-1b',
      created_at: '2025-01-15T10:35:00Z',
      last_seen: '2025-03-28T15:44:00Z',
      metrics: {
        cpu_usage: 32.1,
        memory_usage: 45.6,
        disk_usage: 55.2,
        bandwidth_in: 128.4,
        bandwidth_out: 95.6
      }
    }
  ];
};

export const getMockConnections = (networkId: string): NetticaConnection[] => {
  return [
    {
      id: 'conn1',
      network_id: networkId,
      source_id: 'node1',
      target_id: 'node2',
      type: 'direct',
      status: 'active',
      latency: 15.2,
      bandwidth: 1000,
      created_at: '2025-01-15T10:40:00Z',
      updated_at: '2025-03-28T15:45:00Z',
      metrics: {
        packet_loss: 0.1,
        jitter: 2.3,
        throughput: 856.7
      }
    }
  ];
};

export const getMockMetrics = (networkId: string): NetticaMetrics => {
  return {
    network_id: networkId,
    period: 'day',
    nodes_online: 10,
    nodes_total: 12,
    connections_active: 14,
    connections_total: 15,
    bandwidth_usage: 850.5,
    latency_avg: 18.3,
    packet_loss_avg: 0.15,
    availability: 99.98
  };
};