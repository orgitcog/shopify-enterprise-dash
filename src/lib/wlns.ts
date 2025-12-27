import { supabase } from './supabase';
import { format } from 'date-fns';

// Types
export interface WellnessCenter {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  email: string;
  website?: string;
  status: 'active' | 'inactive' | 'pending';
  created_at: string;
  timezone: string;
  business_hours: BusinessHours;
  type: 'spa' | 'yoga' | 'fitness' | 'retreat' | 'meditation' | 'wellness';
  amenities: string[];
  description?: string;
  shopify_store_id?: string;
}

export interface BusinessHours {
  monday: TimeRange[];
  tuesday: TimeRange[];
  wednesday: TimeRange[];
  thursday: TimeRange[];
  friday: TimeRange[];
  saturday: TimeRange[];
  sunday: TimeRange[];
}

export interface TimeRange {
  start: string; // Format: "09:00"
  end: string;   // Format: "17:00"
}

export interface Practitioner {
  id: string;
  center_id: string;
  name: string;
  email: string;
  phone?: string;
  role: 'therapist' | 'instructor' | 'coach' | 'healer' | 'doctor' | 'admin';
  specialties: string[];
  status: 'active' | 'inactive';
  bio?: string;
  avatar_url?: string;
  created_at: string;
  calendar_color: string;
  certifications?: string[];
}

export interface Service {
  id: string;
  center_id: string;
  name: string;
  description?: string;
  duration: number; // in minutes
  price: number;
  category: string;
  status: 'active' | 'inactive';
  created_at: string;
  color: string;
  max_capacity?: number; // For classes/group sessions
  prerequisites?: string[];
  shopify_product_id?: string;
}

export interface Appointment {
  id: string;
  center_id: string;
  client_id: string;
  practitioner_id: string;
  service_ids: string[];
  start_time: string;
  end_time: string;
  status: 'scheduled' | 'confirmed' | 'completed' | 'cancelled' | 'no-show';
  notes?: string;
  created_at: string;
  updated_at: string;
  total_price: number;
  payment_status: 'pending' | 'paid' | 'partially_paid' | 'refunded';
  source: 'online' | 'phone' | 'walk-in' | 'staff';
  room?: string;
}

export interface Client {
  id: string;
  center_id: string;
  name: string;
  email: string;
  phone?: string;
  address?: string;
  city?: string;
  state?: string;
  zip?: string;
  birthday?: string;
  gender?: 'male' | 'female' | 'non-binary' | 'prefer-not-to-say';
  notes?: string;
  created_at: string;
  last_visit?: string;
  shopify_customer_id?: string;
  total_visits: number;
  total_spent: number;
  health_info?: {
    allergies?: string[];
    medical_conditions?: string[];
    medications?: string[];
    preferences?: string[];
  };
}

export interface WellnessAnalytics {
  totalAppointments: number;
  completedAppointments: number;
  cancelledAppointments: number;
  noShowAppointments: number;
  totalRevenue: number;
  averageAppointmentValue: number;
  newClients: number;
  returningClients: number;
  topServices: {
    id: string;
    name: string;
    count: number;
    revenue: number;
  }[];
  topPractitioners: {
    id: string;
    name: string;
    appointmentCount: number;
    revenue: number;
  }[];
  appointmentsByDay: {
    day: string;
    count: number;
  }[];
  appointmentsByHour: {
    hour: number;
    count: number;
  }[];
  clientRetentionRate: number;
  membershipStats: {
    active: number;
    expired: number;
    revenue: number;
  };
}

// API Functions

// Wellness Centers
export const getWellnessCenters = async () => {
  try {
    const { data, error } = await supabase
      .from('wlns_centers')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error('Error fetching wellness centers:', error);
    return [];
  }
};

export const getWellnessCenterById = async (id: string) => {
  try {
    const { data, error } = await supabase
      .from('wlns_centers')
      .select('*')
      .eq('id', id)
      .single();
    
    if (error) throw error;
    return data;
  } catch (error) {
    console.error(`Error fetching wellness center ${id}:`, error);
    return null;
  }
};

export const createWellnessCenter = async (center: Omit<WellnessCenter, 'id' | 'created_at'>) => {
  try {
    const { data, error } = await supabase
      .from('wlns_centers')
      .insert([{
        ...center,
        created_at: new Date().toISOString()
      }])
      .select()
      .single();
    
    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error creating wellness center:', error);
    return null;
  }
};

export const updateWellnessCenter = async (id: string, updates: Partial<WellnessCenter>) => {
  try {
    const { data, error } = await supabase
      .from('wlns_centers')
      .update(updates)
      .eq('id', id)
      .select()
      .single();
    
    if (error) throw error;
    return data;
  } catch (error) {
    console.error(`Error updating wellness center ${id}:`, error);
    return null;
  }
};

export const deleteWellnessCenter = async (id: string) => {
  try {
    const { error } = await supabase
      .from('wlns_centers')
      .delete()
      .eq('id', id);
    
    if (error) throw error;
    return true;
  } catch (error) {
    console.error(`Error deleting wellness center ${id}:`, error);
    return false;
  }
};

// Practitioners
export const getPractitionersByCenter = async (centerId: string) => {
  try {
    const { data, error } = await supabase
      .from('wlns_practitioners')
      .select('*')
      .eq('center_id', centerId)
      .order('name');
    
    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error(`Error fetching practitioners for center ${centerId}:`, error);
    return [];
  }
};

export const createPractitioner = async (practitioner: Omit<Practitioner, 'id' | 'created_at'>) => {
  try {
    const { data, error } = await supabase
      .from('wlns_practitioners')
      .insert([{
        ...practitioner,
        created_at: new Date().toISOString()
      }])
      .select()
      .single();
    
    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error creating practitioner:', error);
    return null;
  }
};

// Services
export const getServicesByCenter = async (centerId: string) => {
  try {
    const { data, error } = await supabase
      .from('wlns_services')
      .select('*')
      .eq('center_id', centerId)
      .order('name');
    
    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error(`Error fetching services for center ${centerId}:`, error);
    return [];
  }
};

export const createService = async (service: Omit<Service, 'id' | 'created_at'>) => {
  try {
    const { data, error } = await supabase
      .from('wlns_services')
      .insert([{
        ...service,
        created_at: new Date().toISOString()
      }])
      .select()
      .single();
    
    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error creating service:', error);
    return null;
  }
};

// Appointments
export const getAppointmentsByCenter = async (
  centerId: string, 
  startDate?: string, 
  endDate?: string, 
  status?: Appointment['status']
) => {
  try {
    let query = supabase
      .from('wlns_appointments')
      .select('*')
      .eq('center_id', centerId);
    
    if (startDate) {
      query = query.gte('start_time', startDate);
    }
    
    if (endDate) {
      query = query.lte('start_time', endDate);
    }
    
    if (status) {
      query = query.eq('status', status);
    }
    
    const { data, error } = await query.order('start_time');
    
    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error(`Error fetching appointments for center ${centerId}:`, error);
    return [];
  }
};

export const createAppointment = async (appointment: Omit<Appointment, 'id' | 'created_at' | 'updated_at'>) => {
  try {
    const now = new Date().toISOString();
    const { data, error } = await supabase
      .from('wlns_appointments')
      .insert([{
        ...appointment,
        created_at: now,
        updated_at: now
      }])
      .select()
      .single();
    
    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error creating appointment:', error);
    return null;
  }
};

export const updateAppointment = async (id: string, updates: Partial<Appointment>) => {
  try {
    const { data, error } = await supabase
      .from('wlns_appointments')
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
    console.error(`Error updating appointment ${id}:`, error);
    return null;
  }
};

// Clients
export const getClientsByCenter = async (centerId: string) => {
  try {
    const { data, error } = await supabase
      .from('wlns_clients')
      .select('*')
      .eq('center_id', centerId)
      .order('name');
    
    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error(`Error fetching clients for center ${centerId}:`, error);
    return [];
  }
};

export const createClient = async (client: Omit<Client, 'id' | 'created_at' | 'total_visits' | 'total_spent'>) => {
  try {
    const { data, error } = await supabase
      .from('wlns_clients')
      .insert([{
        ...client,
        created_at: new Date().toISOString(),
        total_visits: 0,
        total_spent: 0
      }])
      .select()
      .single();
    
    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error creating client:', error);
    return null;
  }
};

// Analytics
export const getWellnessAnalytics = async (
  centerId: string,
  startDate?: string,
  endDate?: string
) => {
  try {
    // In a real implementation, this would query analytics data from the database
    // For now, we'll return mock data
    return getMockWellnessAnalytics();
  } catch (error) {
    console.error(`Error fetching analytics for center ${centerId}:`, error);
    return null;
  }
};

// Sync with Shopify
export const syncWithShopify = async (centerId: string, shopifyStoreId: string) => {
  try {
    // For demo purposes, we'll just update the center record with the Shopify store ID
    const { data, error } = await supabase
      .from('wlns_centers')
      .update({ shopify_store_id: shopifyStoreId })
      .eq('id', centerId)
      .select()
      .single();
    
    if (error) throw error;
    
    return { 
      success: true, 
      message: 'Wellness center successfully connected to Shopify store',
      data
    };
  } catch (error) {
    console.error(`Error syncing center ${centerId} with Shopify:`, error);
    return { 
      success: false, 
      message: error instanceof Error ? error.message : 'Unknown error occurred',
      data: null
    };
  }
};

// Mock data
export const getMockWellnessCenters = (): WellnessCenter[] => {
  return [
    {
      id: 'center1',
      name: 'Tranquility Wellness Spa',
      address: '123 Serenity Lane',
      city: 'San Francisco',
      state: 'CA',
      zip: '94105',
      phone: '(415) 555-1234',
      email: 'info@tranquilityspa.com',
      website: 'www.tranquilityspa.com',
      status: 'active',
      created_at: '2024-12-10T10:00:00Z',
      timezone: 'America/Los_Angeles',
      type: 'spa',
      amenities: ['sauna', 'steam room', 'relaxation lounge', 'tea bar'],
      description: 'A luxury day spa offering a variety of treatments to rejuvenate both body and mind.',
      business_hours: {
        monday: [{ start: '09:00', end: '20:00' }],
        tuesday: [{ start: '09:00', end: '20:00' }],
        wednesday: [{ start: '09:00', end: '20:00' }],
        thursday: [{ start: '09:00', end: '20:00' }],
        friday: [{ start: '09:00', end: '21:00' }],
        saturday: [{ start: '10:00', end: '21:00' }],
        sunday: [{ start: '10:00', end: '18:00' }]
      },
      shopify_store_id: 'store_1'
    },
    {
      id: 'center2',
      name: 'Zen Meditation Studio',
      address: '456 Mindful Street',
      city: 'Portland',
      state: 'OR',
      zip: '97201',
      phone: '(503) 555-6789',
      email: 'hello@zenmeditation.com',
      website: 'www.zenmeditation.com',
      status: 'active',
      created_at: '2025-01-15T11:30:00Z',
      timezone: 'America/Los_Angeles',
      type: 'meditation',
      amenities: ['meditation cushions', 'sound therapy', 'zen garden'],
      description: 'A peaceful studio dedicated to mindfulness and meditation practices.',
      business_hours: {
        monday: [{ start: '07:00', end: '19:00' }],
        tuesday: [{ start: '07:00', end: '19:00' }],
        wednesday: [{ start: '07:00', end: '19:00' }],
        thursday: [{ start: '07:00', end: '19:00' }],
        friday: [{ start: '07:00', end: '19:00' }],
        saturday: [{ start: '08:00', end: '17:00' }],
        sunday: [{ start: '08:00', end: '17:00' }]
      }
    },
    {
      id: 'center3',
      name: 'Vitality Yoga & Fitness',
      address: '789 Wellness Blvd',
      city: 'Denver',
      state: 'CO',
      zip: '80202',
      phone: '(303) 555-9012',
      email: 'info@vitalityyoga.com',
      website: 'www.vitalityyoga.com',
      status: 'active',
      created_at: '2025-02-01T09:15:00Z',
      timezone: 'America/Denver',
      type: 'yoga',
      amenities: ['yoga studio', 'fitness equipment', 'locker rooms', 'juice bar'],
      description: 'Combining yoga and fitness for a holistic approach to wellness.',
      business_hours: {
        monday: [{ start: '06:00', end: '21:00' }],
        tuesday: [{ start: '06:00', end: '21:00' }],
        wednesday: [{ start: '06:00', end: '21:00' }],
        thursday: [{ start: '06:00', end: '21:00' }],
        friday: [{ start: '06:00', end: '21:00' }],
        saturday: [{ start: '08:00', end: '18:00' }],
        sunday: [{ start: '08:00', end: '16:00' }]
      }
    },
    {
      id: 'center4',
      name: 'Mountain Retreat Center',
      address: '101 Harmony Ridge',
      city: 'Aspen',
      state: 'CO',
      zip: '81611',
      phone: '(970) 555-3456',
      email: 'bookings@mountainretreat.com',
      status: 'pending',
      created_at: '2025-03-05T14:45:00Z',
      timezone: 'America/Denver',
      type: 'retreat',
      amenities: ['private cabins', 'hiking trails', 'communal dining', 'meditation hall'],
      description: 'A secluded retreat center offering immersive wellness experiences in nature.',
      business_hours: {
        monday: [{ start: '08:00', end: '20:00' }],
        tuesday: [{ start: '08:00', end: '20:00' }],
        wednesday: [{ start: '08:00', end: '20:00' }],
        thursday: [{ start: '08:00', end: '20:00' }],
        friday: [{ start: '08:00', end: '20:00' }],
        saturday: [{ start: '08:00', end: '20:00' }],
        sunday: [{ start: '08:00', end: '20:00' }]
      }
    },
    {
      id: 'center5',
      name: 'Holistic Healing Center',
      address: '555 Natural Way',
      city: 'Austin',
      state: 'TX',
      zip: '78701',
      phone: '(512) 555-7890',
      email: 'care@holistichealing.com',
      website: 'www.holistichealing.com',
      status: 'inactive',
      created_at: '2024-11-10T08:30:00Z',
      timezone: 'America/Chicago',
      type: 'wellness',
      amenities: ['treatment rooms', 'consultation offices', 'herbal dispensary'],
      description: 'An integrative center combining modern medicine with traditional healing practices.',
      business_hours: {
        monday: [{ start: '09:00', end: '18:00' }],
        tuesday: [{ start: '09:00', end: '18:00' }],
        wednesday: [{ start: '09:00', end: '18:00' }],
        thursday: [{ start: '09:00', end: '18:00' }],
        friday: [{ start: '09:00', end: '18:00' }],
        saturday: [{ start: '10:00', end: '15:00' }],
        sunday: []
      }
    }
  ];
};

export const getMockPractitioners = (centerId: string): Practitioner[] => {
  return [
    {
      id: 'pract1',
      center_id: centerId,
      name: 'Sarah Johnson',
      email: 'sarah@tranquilityspa.com',
      phone: '(415) 555-1001',
      role: 'therapist',
      specialties: ['massage', 'aromatherapy', 'reflexology'],
      status: 'active',
      bio: 'Licensed massage therapist with 8 years of experience specializing in deep tissue and aromatherapy.',
      avatar_url: 'https://i.pravatar.cc/150?img=1',
      created_at: '2025-01-10T10:15:00Z',
      calendar_color: '#4f46e5',
      certifications: ['LMT', 'Aromatherapy Certified']
    },
    {
      id: 'pract2',
      center_id: centerId,
      name: 'David Chen',
      email: 'david@tranquilityspa.com',
      phone: '(415) 555-1002',
      role: 'therapist',
      specialties: ['acupuncture', 'cupping', 'herbal medicine'],
      status: 'active',
      bio: 'Licensed acupuncturist combining traditional Chinese medicine with modern techniques.',
      avatar_url: 'https://i.pravatar.cc/150?img=3',
      created_at: '2025-01-15T11:30:00Z',
      calendar_color: '#16a34a',
      certifications: ['L.Ac', 'NCCAOM Certified']
    },
    {
      id: 'pract3',
      center_id: centerId,
      name: 'Maria Rodriguez',
      email: 'maria@tranquilityspa.com',
      phone: '(415) 555-1003',
      role: 'instructor',
      specialties: ['yoga', 'meditation', 'breathwork'],
      status: 'active',
      bio: 'Certified yoga instructor with a focus on mindfulness and stress reduction techniques.',
      avatar_url: 'https://i.pravatar.cc/150?img=5',
      created_at: '2025-02-01T09:45:00Z',
      calendar_color: '#dc2626',
      certifications: ['RYT-500', 'Mindfulness Certified']
    },
    {
      id: 'pract4',
      center_id: centerId,
      name: 'James Wilson',
      email: 'james@tranquilityspa.com',
      phone: '(415) 555-1004',
      role: 'admin',
      specialties: [],
      status: 'active',
      bio: 'Center manager with background in hospitality and wellness center operations.',
      avatar_url: 'https://i.pravatar.cc/150?img=7',
      created_at: '2024-12-15T08:30:00Z',
      calendar_color: '#ea580c'
    },
    {
      id: 'pract5',
      center_id: centerId,
      name: 'Emma Thompson',
      email: 'emma@tranquilityspa.com',
      phone: '(415) 555-1005',
      role: 'therapist',
      specialties: ['facials', 'skincare', 'body treatments'],
      status: 'active',
      bio: 'Licensed esthetician specializing in custom facial treatments and natural skincare.',
      avatar_url: 'https://i.pravatar.cc/150?img=9',
      created_at: '2025-01-20T12:00:00Z',
      calendar_color: '#9333ea',
      certifications: ['Licensed Esthetician', 'Medical Esthetics Certified']
    }
  ];
};

export const getMockServices = (centerId: string): Service[] => {
  return [
    {
      id: 'service1',
      center_id: centerId,
      name: 'Swedish Massage',
      description: 'A gentle full body massage using long strokes to improve circulation and relaxation.',
      duration: 60,
      price: 95,
      category: 'Massage',
      status: 'active',
      created_at: '2024-12-15T10:30:00Z',
      color: '#4f46e5',
      shopify_product_id: 'prod_1'
    },
    {
      id: 'service2',
      center_id: centerId,
      name: 'Deep Tissue Massage',
      description: 'Focused massage using firm pressure to release chronic muscle tension.',
      duration: 60,
      price: 115,
      category: 'Massage',
      status: 'active',
      created_at: '2024-12-15T10:35:00Z',
      color: '#4f46e5',
      shopify_product_id: 'prod_2'
    },
    {
      id: 'service3',
      center_id: centerId,
      name: 'Acupuncture',
      description: 'Traditional Chinese medicine treatment to balance energy flow in the body.',
      duration: 90,
      price: 130,
      category: 'Alternative Therapy',
      status: 'active',
      created_at: '2024-12-15T10:40:00Z',
      color: '#16a34a',
      shopify_product_id: 'prod_3'
    },
    {
      id: 'service4',
      center_id: centerId,
      name: 'Signature Facial',
      description: 'Customized facial treatment to address your specific skin concerns.',
      duration: 75,
      price: 120,
      category: 'Skincare',
      status: 'active',
      created_at: '2024-12-15T10:45:00Z',
      color: '#dc2626',
      shopify_product_id: 'prod_4'
    },
    {
      id: 'service5',
      center_id: centerId,
      name: 'Vinyasa Yoga',
      description: 'Dynamic yoga class linking breath with movement.',
      duration: 60,
      price: 25,
      category: 'Fitness',
      status: 'active',
      created_at: '2024-12-15T10:50:00Z',
      color: '#ea580c',
      max_capacity: 15,
      shopify_product_id: 'prod_5'
    },
    {
      id: 'service6',
      center_id: centerId,
      name: 'Meditation Session',
      description: 'Guided meditation for stress relief and mindfulness.',
      duration: 45,
      price: 20,
      category: 'Mind-Body',
      status: 'active',
      created_at: '2024-12-15T10:55:00Z',
      color: '#9333ea',
      max_capacity: 12,
      shopify_product_id: 'prod_6'
    },
    {
      id: 'service7',
      center_id: centerId,
      name: 'Wellness Package',
      description: 'Comprehensive wellness experience including massage, facial, and yoga class.',
      duration: 180,
      price: 225,
      category: 'Packages',
      status: 'active',
      created_at: '2024-12-15T11:00:00Z',
      color: '#0891b2',
      shopify_product_id: 'prod_7'
    },
    {
      id: 'service8',
      center_id: centerId,
      name: 'Hot Stone Therapy',
      description: 'Massage using heated stones to melt away tension.',
      duration: 90,
      price: 145,
      category: 'Massage',
      status: 'active',
      created_at: '2024-12-15T11:05:00Z',
      color: '#4f46e5',
      shopify_product_id: 'prod_8'
    }
  ];
};

export const getMockClients = (centerId: string): Client[] => {
  return [
    {
      id: 'client1',
      center_id: centerId,
      name: 'Amanda Wilson',
      email: 'amanda.wilson@example.com',
      phone: '(415) 555-8901',
      address: '123 Oak Street',
      city: 'San Francisco',
      state: 'CA',
      zip: '94110',
      birthday: '1985-04-15',
      gender: 'female',
      notes: 'Prefers Sarah for massages. Sensitive skin, use hypoallergenic products.',
      created_at: '2025-01-10T14:30:00Z',
      last_visit: '2025-03-15T15:00:00Z',
      shopify_customer_id: 'cust_1',
      total_visits: 8,
      total_spent: 940,
      health_info: {
        allergies: ['Lavender'],
        medical_conditions: ['Low blood pressure'],
        preferences: ['Soft music', 'Extra blanket']
      }
    },
    {
      id: 'client2',
      center_id: centerId,
      name: 'Robert Chang',
      email: 'robert.chang@example.com',
      phone: '(415) 555-2345',
      city: 'San Francisco',
      state: 'CA',
      created_at: '2025-02-05T11:15:00Z',
      last_visit: '2025-03-10T10:30:00Z',
      total_visits: 3,
      total_spent: 345,
      health_info: {
        medical_conditions: ['Back pain'],
        preferences: ['Deep pressure']
      }
    },
    {
      id: 'client3',
      center_id: centerId,
      name: 'Sophia Martinez',
      email: 'sophia.martinez@example.com',
      phone: '(415) 555-6789',
      address: '789 Pine Avenue',
      city: 'Oakland',
      state: 'CA',
      zip: '94610',
      gender: 'female',
      notes: 'Member of monthly wellness program.',
      created_at: '2024-12-20T09:45:00Z',
      last_visit: '2025-03-20T13:00:00Z',
      shopify_customer_id: 'cust_3',
      total_visits: 12,
      total_spent: 2150,
      health_info: {
        preferences: ['Aromatherapy', 'Female practitioners only']
      }
    },
    {
      id: 'client4',
      center_id: centerId,
      name: 'James Taylor',
      email: 'james.taylor@example.com',
      phone: '(415) 555-3456',
      gender: 'male',
      created_at: '2025-01-25T16:30:00Z',
      total_visits: 1,
      total_spent: 95,
      health_info: {
        medical_conditions: ['High blood pressure'],
        medications: ['Blood pressure medication']
      }
    },
    {
      id: 'client5',
      center_id: centerId,
      name: 'Emily Lee',
      email: 'emily.lee@example.com',
      phone: '(415) 555-7890',
      address: '456 Castro Street',
      city: 'San Francisco',
      state: 'CA',
      zip: '94114',
      birthday: '1990-07-22',
      gender: 'female',
      notes: 'Prefers morning appointments.',
      created_at: '2025-02-15T10:00:00Z',
      last_visit: '2025-03-18T11:30:00Z',
      shopify_customer_id: 'cust_5',
      total_visits: 5,
      total_spent: 575,
      health_info: {
        allergies: ['Nuts'],
        preferences: ['No scented products']
      }
    }
  ];
};

export const getMockAppointments = (centerId: string): Appointment[] => {
  return [
    {
      id: 'appt1',
      center_id: centerId,
      client_id: 'client1',
      practitioner_id: 'pract1',
      service_ids: ['service1'],
      start_time: '2025-03-15T15:00:00Z',
      end_time: '2025-03-15T16:00:00Z',
      status: 'completed',
      notes: 'Client requested extra focus on shoulders.',
      created_at: '2025-03-01T10:15:00Z',
      updated_at: '2025-03-15T16:05:00Z',
      total_price: 95,
      payment_status: 'paid',
      source: 'phone',
      room: 'Lavender Room'
    },
    {
      id: 'appt2',
      center_id: centerId,
      client_id: 'client2',
      practitioner_id: 'pract2',
      service_ids: ['service3'],
      start_time: '2025-03-10T10:30:00Z',
      end_time: '2025-03-10T12:00:00Z',
      status: 'completed',
      created_at: '2025-03-05T14:30:00Z',
      updated_at: '2025-03-10T12:05:00Z',
      total_price: 130,
      payment_status: 'paid',
      source: 'walk-in',
      room: 'Healing Suite 2'
    },
    {
      id: 'appt3',
      center_id: centerId,
      client_id: 'client3',
      practitioner_id: 'pract5',
      service_ids: ['service4'],
      start_time: '2025-03-20T13:00:00Z',
      end_time: '2025-03-20T14:15:00Z',
      status: 'completed',
      created_at: '2025-03-15T09:45:00Z',
      updated_at: '2025-03-20T14:20:00Z',
      total_price: 120,
      payment_status: 'paid',
      source: 'online',
      room: 'Radiance Room'
    },
    {
      id: 'appt4',
      center_id: centerId,
      client_id: 'client4',
      practitioner_id: 'pract1',
      service_ids: ['service2'],
      start_time: '2025-03-25T17:30:00Z',
      end_time: '2025-03-25T18:30:00Z',
      status: 'confirmed',
      created_at: '2025-03-20T11:30:00Z',
      updated_at: '2025-03-20T11:30:00Z',
      total_price: 115,
      payment_status: 'pending',
      source: 'phone',
      room: 'Serenity Suite'
    },
    {
      id: 'appt5',
      center_id: centerId,
      client_id: 'client5',
      practitioner_id: 'pract5',
      service_ids: ['service4'],
      start_time: '2025-03-18T11:30:00Z',
      end_time: '2025-03-18T12:45:00Z',
      status: 'completed',
      created_at: '2025-03-16T15:45:00Z',
      updated_at: '2025-03-18T12:50:00Z',
      total_price: 120,
      payment_status: 'paid',
      source: 'online',
      room: 'Radiance Room'
    },
    {
      id: 'appt6',
      center_id: centerId,
      client_id: 'client1',
      practitioner_id: 'pract1',
      service_ids: ['service8'],
      start_time: '2025-03-30T14:00:00Z',
      end_time: '2025-03-30T15:30:00Z',
      status: 'scheduled',
      created_at: '2025-03-22T10:30:00Z',
      updated_at: '2025-03-22T10:30:00Z',
      total_price: 145,
      payment_status: 'pending',
      source: 'online',
      room: 'Harmony Suite'
    },
    {
      id: 'appt7',
      center_id: centerId,
      client_id: 'client3',
      practitioner_id: 'pract3',
      service_ids: ['service5'],
      start_time: '2025-03-22T09:00:00Z',
      end_time: '2025-03-22T10:00:00Z',
      status: 'completed',
      created_at: '2025-03-20T09:15:00Z',
      updated_at: '2025-03-22T10:05:00Z',
      total_price: 25,
      payment_status: 'paid',
      source: 'online',
      room: 'Yoga Studio A'
    },
    {
      id: 'appt8',
      center_id: centerId,
      client_id: 'client2',
      practitioner_id: 'pract3',
      service_ids: ['service6'],
      start_time: '2025-03-24T18:00:00Z',
      end_time: '2025-03-24T18:45:00Z',
      status: 'cancelled',
      notes: 'Client had to cancel due to work conflict.',
      created_at: '2025-03-20T14:30:00Z',
      updated_at: '2025-03-23T09:15:00Z',
      total_price: 20,
      payment_status: 'refunded',
      source: 'phone',
      room: 'Meditation Room'
    }
  ];
};

export const getMockWellnessAnalytics = (): WellnessAnalytics => {
  return {
    totalAppointments: 62,
    completedAppointments: 53,
    cancelledAppointments: 7,
    noShowAppointments: 2,
    totalRevenue: 7850,
    averageAppointmentValue: 126.61,
    newClients: 15,
    returningClients: 28,
    clientRetentionRate: 72.5,
    topServices: [
      {
        id: 'service1',
        name: 'Swedish Massage',
        count: 18,
        revenue: 1710
      },
      {
        id: 'service2',
        name: 'Deep Tissue Massage',
        count: 14,
        revenue: 1610
      },
      {
        id: 'service4',
        name: 'Signature Facial',
        count: 12,
        revenue: 1440
      },
      {
        id: 'service3',
        name: 'Acupuncture',
        count: 10,
        revenue: 1300
      },
      {
        id: 'service8',
        name: 'Hot Stone Therapy',
        count: 6,
        revenue: 870
      }
    ],
    topPractitioners: [
      {
        id: 'pract1',
        name: 'Sarah Johnson',
        appointmentCount: 24,
        revenue: 2850
      },
      {
        id: 'pract5',
        name: 'Emma Thompson',
        appointmentCount: 18,
        revenue: 2160
      },
      {
        id: 'pract2',
        name: 'David Chen',
        appointmentCount: 15,
        revenue: 1950
      }
    ],
    appointmentsByDay: [
      { day: 'Monday', count: 8 },
      { day: 'Tuesday', count: 9 },
      { day: 'Wednesday', count: 8 },
      { day: 'Thursday', count: 10 },
      { day: 'Friday', count: 12 },
      { day: 'Saturday', count: 15 },
      { day: 'Sunday', count: 0 }
    ],
    appointmentsByHour: [
      { hour: 9, count: 5 },
      { hour: 10, count: 7 },
      { hour: 11, count: 6 },
      { hour: 12, count: 4 },
      { hour: 13, count: 5 },
      { hour: 14, count: 8 },
      { hour: 15, count: 10 },
      { hour: 16, count: 8 },
      { hour: 17, count: 6 },
      { hour: 18, count: 3 }
    ],
    membershipStats: {
      active: 18,
      expired: 3,
      revenue: 3600
    }
  };
};