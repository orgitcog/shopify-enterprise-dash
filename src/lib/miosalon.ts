import { supabase } from './supabase';
import { format } from 'date-fns';

// Types
export interface Salon {
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

export interface Staff {
  id: string;
  salon_id: string;
  name: string;
  email: string;
  phone?: string;
  role: 'stylist' | 'assistant' | 'receptionist' | 'manager' | 'owner';
  services: string[];
  status: 'active' | 'inactive';
  bio?: string;
  avatar_url?: string;
  created_at: string;
  calendar_color: string;
}

export interface Service {
  id: string;
  salon_id: string;
  name: string;
  description?: string;
  duration: number; // in minutes
  price: number;
  category: string;
  status: 'active' | 'inactive';
  created_at: string;
  color: string;
  shopify_product_id?: string;
}

export interface Appointment {
  id: string;
  salon_id: string;
  client_id: string;
  staff_id: string;
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
}

export interface Client {
  id: string;
  salon_id: string;
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
  preferences?: Record<string, any>;
}

export interface SalonAnalytics {
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
  topStaff: {
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
}

// API Functions

// Salons
export const getSalons = async () => {
  try {
    const { data, error } = await supabase
      .from('miosalon_salons')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error('Error fetching salons:', error);
    return [];
  }
};

export const getSalonById = async (id: string) => {
  try {
    const { data, error } = await supabase
      .from('miosalon_salons')
      .select('*')
      .eq('id', id)
      .single();
    
    if (error) throw error;
    return data;
  } catch (error) {
    console.error(`Error fetching salon ${id}:`, error);
    return null;
  }
};

export const createSalon = async (salon: Omit<Salon, 'id' | 'created_at'>) => {
  try {
    const { data, error } = await supabase
      .from('miosalon_salons')
      .insert([{
        ...salon,
        created_at: new Date().toISOString()
      }])
      .select()
      .single();
    
    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error creating salon:', error);
    return null;
  }
};

export const updateSalon = async (id: string, updates: Partial<Salon>) => {
  try {
    const { data, error } = await supabase
      .from('miosalon_salons')
      .update(updates)
      .eq('id', id)
      .select()
      .single();
    
    if (error) throw error;
    return data;
  } catch (error) {
    console.error(`Error updating salon ${id}:`, error);
    return null;
  }
};

export const deleteSalon = async (id: string) => {
  try {
    const { error } = await supabase
      .from('miosalon_salons')
      .delete()
      .eq('id', id);
    
    if (error) throw error;
    return true;
  } catch (error) {
    console.error(`Error deleting salon ${id}:`, error);
    return false;
  }
};

// Staff
export const getStaffBySalon = async (salonId: string) => {
  try {
    const { data, error } = await supabase
      .from('miosalon_staff')
      .select('*')
      .eq('salon_id', salonId)
      .order('name');
    
    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error(`Error fetching staff for salon ${salonId}:`, error);
    return [];
  }
};

export const createStaff = async (staff: Omit<Staff, 'id' | 'created_at'>) => {
  try {
    const { data, error } = await supabase
      .from('miosalon_staff')
      .insert([{
        ...staff,
        created_at: new Date().toISOString()
      }])
      .select()
      .single();
    
    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error creating staff member:', error);
    return null;
  }
};

// Services
export const getServicesBySalon = async (salonId: string) => {
  try {
    const { data, error } = await supabase
      .from('miosalon_services')
      .select('*')
      .eq('salon_id', salonId)
      .order('name');
    
    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error(`Error fetching services for salon ${salonId}:`, error);
    return [];
  }
};

export const createService = async (service: Omit<Service, 'id' | 'created_at'>) => {
  try {
    const { data, error } = await supabase
      .from('miosalon_services')
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
export const getAppointmentsBySalon = async (
  salonId: string, 
  startDate?: string, 
  endDate?: string, 
  status?: Appointment['status']
) => {
  try {
    let query = supabase
      .from('miosalon_appointments')
      .select('*')
      .eq('salon_id', salonId);
    
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
    console.error(`Error fetching appointments for salon ${salonId}:`, error);
    return [];
  }
};

export const createAppointment = async (appointment: Omit<Appointment, 'id' | 'created_at' | 'updated_at'>) => {
  try {
    const now = new Date().toISOString();
    const { data, error } = await supabase
      .from('miosalon_appointments')
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
      .from('miosalon_appointments')
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
export const getClientsBySalon = async (salonId: string) => {
  try {
    const { data, error } = await supabase
      .from('miosalon_clients')
      .select('*')
      .eq('salon_id', salonId)
      .order('name');
    
    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error(`Error fetching clients for salon ${salonId}:`, error);
    return [];
  }
};

export const createClient = async (client: Omit<Client, 'id' | 'created_at' | 'total_visits' | 'total_spent'>) => {
  try {
    const { data, error } = await supabase
      .from('miosalon_clients')
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
export const getSalonAnalytics = async (
  salonId: string,
  startDate?: string,
  endDate?: string
) => {
  try {
    // In a real implementation, this would query analytics data from the database
    // For now, we'll return mock data
    return getMockSalonAnalytics();
  } catch (error) {
    console.error(`Error fetching analytics for salon ${salonId}:`, error);
    return null;
  }
};

// Sync with Shopify
export const syncWithShopify = async (salonId: string, shopifyStoreId: string) => {
  try {
    // This function would implement logic to:
    // 1. Connect the MioSalon salon with a Shopify store
    // 2. Sync services as products
    // 3. Sync clients as customers
    // 4. Set up online booking functionality
    
    // For demo purposes, we'll just update the salon record with the Shopify store ID
    const { data, error } = await supabase
      .from('miosalon_salons')
      .update({ shopify_store_id: shopifyStoreId })
      .eq('id', salonId)
      .select()
      .single();
    
    if (error) throw error;
    
    return { 
      success: true, 
      message: 'Salon successfully connected to Shopify store',
      data
    };
  } catch (error) {
    console.error(`Error syncing salon ${salonId} with Shopify:`, error);
    return { 
      success: false, 
      message: error instanceof Error ? error.message : 'Unknown error occurred',
      data: null
    };
  }
};

// Mock data
export const getMockSalons = (): Salon[] => {
  return [
    {
      id: 'salon1',
      name: 'Elegance Hair Studio',
      address: '123 Main Street',
      city: 'New York',
      state: 'NY',
      zip: '10001',
      phone: '(212) 555-1234',
      email: 'info@elegancehair.com',
      website: 'www.elegancehair.com',
      status: 'active',
      created_at: '2024-12-15T10:00:00Z',
      timezone: 'America/New_York',
      business_hours: {
        monday: [{ start: '09:00', end: '19:00' }],
        tuesday: [{ start: '09:00', end: '19:00' }],
        wednesday: [{ start: '09:00', end: '19:00' }],
        thursday: [{ start: '09:00', end: '20:00' }],
        friday: [{ start: '09:00', end: '20:00' }],
        saturday: [{ start: '10:00', end: '18:00' }],
        sunday: []
      },
      shopify_store_id: 'store_1'
    },
    {
      id: 'salon2',
      name: 'Modern Cuts',
      address: '456 Fashion Ave',
      city: 'Los Angeles',
      state: 'CA',
      zip: '90001',
      phone: '(323) 555-6789',
      email: 'appointments@moderncuts.com',
      website: 'www.moderncuts.com',
      status: 'active',
      created_at: '2025-01-10T11:30:00Z',
      timezone: 'America/Los_Angeles',
      business_hours: {
        monday: [{ start: '10:00', end: '18:00' }],
        tuesday: [{ start: '10:00', end: '18:00' }],
        wednesday: [{ start: '10:00', end: '18:00' }],
        thursday: [{ start: '10:00', end: '18:00' }],
        friday: [{ start: '10:00', end: '20:00' }],
        saturday: [{ start: '10:00', end: '20:00' }],
        sunday: [{ start: '12:00', end: '17:00' }]
      }
    },
    {
      id: 'salon3',
      name: 'Chic Salon & Spa',
      address: '789 Relaxation Blvd',
      city: 'Chicago',
      state: 'IL',
      zip: '60601',
      phone: '(312) 555-9012',
      email: 'hello@chicsalon.com',
      website: 'www.chicsalon.com',
      status: 'active',
      created_at: '2025-02-05T09:15:00Z',
      timezone: 'America/Chicago',
      business_hours: {
        monday: [],
        tuesday: [{ start: '09:00', end: '19:00' }],
        wednesday: [{ start: '09:00', end: '19:00' }],
        thursday: [{ start: '09:00', end: '19:00' }],
        friday: [{ start: '09:00', end: '19:00' }],
        saturday: [{ start: '09:00', end: '19:00' }],
        sunday: [{ start: '10:00', end: '16:00' }]
      }
    },
    {
      id: 'salon4',
      name: 'Urban Style',
      address: '321 Downtown Street',
      city: 'Miami',
      state: 'FL',
      zip: '33101',
      phone: '(305) 555-3456',
      email: 'contact@urbanstyle.com',
      status: 'pending',
      created_at: '2025-03-01T14:45:00Z',
      timezone: 'America/New_York',
      business_hours: {
        monday: [{ start: '09:00', end: '18:00' }],
        tuesday: [{ start: '09:00', end: '18:00' }],
        wednesday: [{ start: '09:00', end: '18:00' }],
        thursday: [{ start: '09:00', end: '18:00' }],
        friday: [{ start: '09:00', end: '18:00' }],
        saturday: [{ start: '10:00', end: '16:00' }],
        sunday: []
      }
    },
    {
      id: 'salon5',
      name: 'Classic Barbers',
      address: '555 Vintage Road',
      city: 'Boston',
      state: 'MA',
      zip: '02101',
      phone: '(617) 555-7890',
      email: 'info@classicbarbers.com',
      website: 'www.classicbarbers.com',
      status: 'inactive',
      created_at: '2024-10-20T08:30:00Z',
      timezone: 'America/New_York',
      business_hours: {
        monday: [{ start: '08:00', end: '18:00' }],
        tuesday: [{ start: '08:00', end: '18:00' }],
        wednesday: [{ start: '08:00', end: '18:00' }],
        thursday: [{ start: '08:00', end: '18:00' }],
        friday: [{ start: '08:00', end: '18:00' }],
        saturday: [{ start: '08:00', end: '16:00' }],
        sunday: []
      }
    }
  ];
};

export const getMockStaff = (salonId: string): Staff[] => {
  return [
    {
      id: 'staff1',
      salon_id: salonId,
      name: 'Jennifer Lopez',
      email: 'jennifer@elegancehair.com',
      phone: '(212) 555-1001',
      role: 'stylist',
      services: ['haircut', 'color', 'styling'],
      status: 'active',
      bio: 'Master stylist with 10+ years of experience specializing in color and precision cuts.',
      avatar_url: 'https://i.pravatar.cc/150?img=1',
      created_at: '2025-01-05T10:15:00Z',
      calendar_color: '#4f46e5'
    },
    {
      id: 'staff2',
      salon_id: salonId,
      name: 'Michael Chen',
      email: 'michael@elegancehair.com',
      phone: '(212) 555-1002',
      role: 'stylist',
      services: ['haircut', 'styling', 'treatment'],
      status: 'active',
      bio: 'Expert in men\'s grooming and contemporary styles.',
      avatar_url: 'https://i.pravatar.cc/150?img=3',
      created_at: '2025-01-15T11:30:00Z',
      calendar_color: '#16a34a'
    },
    {
      id: 'staff3',
      salon_id: salonId,
      name: 'Sarah Williams',
      email: 'sarah@elegancehair.com',
      phone: '(212) 555-1003',
      role: 'assistant',
      services: ['washing', 'treatment'],
      status: 'active',
      avatar_url: 'https://i.pravatar.cc/150?img=5',
      created_at: '2025-02-10T09:45:00Z',
      calendar_color: '#dc2626'
    },
    {
      id: 'staff4',
      salon_id: salonId,
      name: 'David Martinez',
      email: 'david@elegancehair.com',
      phone: '(212) 555-1004',
      role: 'manager',
      services: [],
      status: 'active',
      bio: 'Salon manager with a background in business and cosmetology.',
      avatar_url: 'https://i.pravatar.cc/150?img=7',
      created_at: '2024-12-01T08:30:00Z',
      calendar_color: '#ea580c'
    },
    {
      id: 'staff5',
      salon_id: salonId,
      name: 'Emily Johnson',
      email: 'emily@elegancehair.com',
      phone: '(212) 555-1005',
      role: 'receptionist',
      services: [],
      status: 'active',
      created_at: '2025-01-20T12:00:00Z',
      calendar_color: '#9333ea'
    }
  ];
};

export const getMockServices = (salonId: string): Service[] => {
  return [
    {
      id: 'service1',
      salon_id: salonId,
      name: 'Women\'s Haircut',
      description: 'Includes consultation, shampoo, cut, and style.',
      duration: 60,
      price: 65,
      category: 'Haircuts',
      status: 'active',
      created_at: '2024-12-15T10:30:00Z',
      color: '#4f46e5',
      shopify_product_id: 'prod_1'
    },
    {
      id: 'service2',
      salon_id: salonId,
      name: 'Men\'s Haircut',
      description: 'Includes consultation, shampoo, cut, and style.',
      duration: 45,
      price: 45,
      category: 'Haircuts',
      status: 'active',
      created_at: '2024-12-15T10:35:00Z',
      color: '#4f46e5',
      shopify_product_id: 'prod_2'
    },
    {
      id: 'service3',
      salon_id: salonId,
      name: 'Full Color',
      description: 'All-over color application, includes shampoo and style.',
      duration: 120,
      price: 120,
      category: 'Color',
      status: 'active',
      created_at: '2024-12-15T10:40:00Z',
      color: '#16a34a',
      shopify_product_id: 'prod_3'
    },
    {
      id: 'service4',
      salon_id: salonId,
      name: 'Highlights',
      description: 'Partial or full highlights, includes shampoo and style.',
      duration: 150,
      price: 150,
      category: 'Color',
      status: 'active',
      created_at: '2024-12-15T10:45:00Z',
      color: '#16a34a',
      shopify_product_id: 'prod_4'
    },
    {
      id: 'service5',
      salon_id: salonId,
      name: 'Blowout',
      description: 'Shampoo and professional blowout styling.',
      duration: 45,
      price: 50,
      category: 'Styling',
      status: 'active',
      created_at: '2024-12-15T10:50:00Z',
      color: '#dc2626',
      shopify_product_id: 'prod_5'
    },
    {
      id: 'service6',
      salon_id: salonId,
      name: 'Deep Conditioning Treatment',
      description: 'Intensive moisturizing treatment for damaged hair.',
      duration: 30,
      price: 35,
      category: 'Treatments',
      status: 'active',
      created_at: '2024-12-15T10:55:00Z',
      color: '#ea580c',
      shopify_product_id: 'prod_6'
    },
    {
      id: 'service7',
      salon_id: salonId,
      name: 'Updo / Special Occasion Style',
      description: 'Formal styling for weddings, proms, and special events.',
      duration: 90,
      price: 95,
      category: 'Styling',
      status: 'active',
      created_at: '2024-12-15T11:00:00Z',
      color: '#dc2626',
      shopify_product_id: 'prod_7'
    },
    {
      id: 'service8',
      salon_id: salonId,
      name: 'Keratin Treatment',
      description: 'Smoothing treatment to reduce frizz and add shine.',
      duration: 180,
      price: 250,
      category: 'Treatments',
      status: 'active',
      created_at: '2024-12-15T11:05:00Z',
      color: '#ea580c',
      shopify_product_id: 'prod_8'
    }
  ];
};

export const getMockClients = (salonId: string): Client[] => {
  return [
    {
      id: 'client1',
      salon_id: salonId,
      name: 'Amanda Rodriguez',
      email: 'amanda.rodriguez@example.com',
      phone: '(212) 555-8901',
      address: '123 Park Ave',
      city: 'New York',
      state: 'NY',
      zip: '10001',
      birthday: '1985-04-15',
      gender: 'female',
      notes: 'Prefers Jennifer for color services. Allergic to certain dyes.',
      created_at: '2025-01-10T14:30:00Z',
      last_visit: '2025-03-15T15:00:00Z',
      shopify_customer_id: 'cust_1',
      total_visits: 8,
      total_spent: 1240,
      preferences: {
        preferred_stylist: 'staff1',
        communication: 'email',
        products: ['Kerastase shampoo']
      }
    },
    {
      id: 'client2',
      salon_id: salonId,
      name: 'Robert Johnson',
      email: 'robert.johnson@example.com',
      phone: '(212) 555-2345',
      city: 'New York',
      state: 'NY',
      created_at: '2025-02-05T11:15:00Z',
      last_visit: '2025-03-10T10:30:00Z',
      total_visits: 3,
      total_spent: 225,
      preferences: {
        preferred_stylist: 'staff2',
        communication: 'text'
      }
    },
    {
      id: 'client3',
      salon_id: salonId,
      name: 'Sophia Kim',
      email: 'sophia.kim@example.com',
      phone: '(212) 555-6789',
      address: '789 Broadway',
      city: 'New York',
      state: 'NY',
      zip: '10003',
      gender: 'female',
      notes: 'Always books highlights and blowout together.',
      created_at: '2024-12-20T09:45:00Z',
      last_visit: '2025-03-20T13:00:00Z',
      shopify_customer_id: 'cust_3',
      total_visits: 12,
      total_spent: 2350,
      preferences: {
        preferred_stylist: 'staff1',
        communication: 'email',
        products: ['Color protect conditioner']
      }
    },
    {
      id: 'client4',
      salon_id: salonId,
      name: 'James Wilson',
      email: 'james.wilson@example.com',
      phone: '(212) 555-3456',
      gender: 'male',
      created_at: '2025-01-25T16:30:00Z',
      total_visits: 1,
      total_spent: 45
    },
    {
      id: 'client5',
      salon_id: salonId,
      name: 'Maria Garcia',
      email: 'maria.garcia@example.com',
      phone: '(212) 555-7890',
      address: '456 5th Ave',
      city: 'New York',
      state: 'NY',
      zip: '10016',
      birthday: '1990-07-22',
      gender: 'female',
      notes: 'Sensitive scalp, use gentle products.',
      created_at: '2025-02-15T10:00:00Z',
      last_visit: '2025-03-18T11:30:00Z',
      shopify_customer_id: 'cust_5',
      total_visits: 5,
      total_spent: 675,
      preferences: {
        preferred_stylist: 'staff2',
        communication: 'text',
        products: ['Sulfate-free shampoo']
      }
    }
  ];
};

export const getMockAppointments = (salonId: string): Appointment[] => {
  return [
    {
      id: 'appt1',
      salon_id: salonId,
      client_id: 'client1',
      staff_id: 'staff1',
      service_ids: ['service3', 'service5'],
      start_time: '2025-03-15T15:00:00Z',
      end_time: '2025-03-15T18:00:00Z',
      status: 'completed',
      notes: 'Regular client, wants to maintain current color.',
      created_at: '2025-03-01T10:15:00Z',
      updated_at: '2025-03-15T18:05:00Z',
      total_price: 170,
      payment_status: 'paid',
      source: 'phone'
    },
    {
      id: 'appt2',
      salon_id: salonId,
      client_id: 'client2',
      staff_id: 'staff2',
      service_ids: ['service2'],
      start_time: '2025-03-10T10:30:00Z',
      end_time: '2025-03-10T11:15:00Z',
      status: 'completed',
      created_at: '2025-03-09T14:30:00Z',
      updated_at: '2025-03-10T11:20:00Z',
      total_price: 45,
      payment_status: 'paid',
      source: 'walk-in'
    },
    {
      id: 'appt3',
      salon_id: salonId,
      client_id: 'client3',
      staff_id: 'staff1',
      service_ids: ['service4', 'service5'],
      start_time: '2025-03-20T13:00:00Z',
      end_time: '2025-03-20T16:15:00Z',
      status: 'completed',
      created_at: '2025-03-15T09:45:00Z',
      updated_at: '2025-03-20T16:20:00Z',
      total_price: 200,
      payment_status: 'paid',
      source: 'online'
    },
    {
      id: 'appt4',
      salon_id: salonId,
      client_id: 'client4',
      staff_id: 'staff2',
      service_ids: ['service2'],
      start_time: '2025-03-25T17:30:00Z',
      end_time: '2025-03-25T18:15:00Z',
      status: 'confirmed',
      created_at: '2025-03-20T11:30:00Z',
      updated_at: '2025-03-20T11:30:00Z',
      total_price: 45,
      payment_status: 'pending',
      source: 'phone'
    },
    {
      id: 'appt5',
      salon_id: salonId,
      client_id: 'client5',
      staff_id: 'staff1',
      service_ids: ['service1', 'service6'],
      start_time: '2025-03-18T11:30:00Z',
      end_time: '2025-03-18T13:00:00Z',
      status: 'completed',
      created_at: '2025-03-16T15:45:00Z',
      updated_at: '2025-03-18T13:05:00Z',
      total_price: 100,
      payment_status: 'paid',
      source: 'online'
    },
    {
      id: 'appt6',
      salon_id: salonId,
      client_id: 'client1',
      staff_id: 'staff1',
      service_ids: ['service1', 'service5'],
      start_time: '2025-03-30T14:00:00Z',
      end_time: '2025-03-30T15:45:00Z',
      status: 'scheduled',
      created_at: '2025-03-22T10:30:00Z',
      updated_at: '2025-03-22T10:30:00Z',
      total_price: 115,
      payment_status: 'pending',
      source: 'online'
    },
    {
      id: 'appt7',
      salon_id: salonId,
      client_id: 'client3',
      staff_id: 'staff1',
      service_ids: ['service5'],
      start_time: '2025-03-12T15:30:00Z',
      end_time: '2025-03-12T16:15:00Z',
      status: 'cancelled',
      notes: 'Client had an emergency.',
      created_at: '2025-03-10T09:15:00Z',
      updated_at: '2025-03-11T14:20:00Z',
      total_price: 50,
      payment_status: 'refunded',
      source: 'phone'
    }
  ];
};

export const getMockSalonAnalytics = (): SalonAnalytics => {
  return {
    totalAppointments: 45,
    completedAppointments: 38,
    cancelledAppointments: 5,
    noShowAppointments: 2,
    totalRevenue: 6250,
    averageAppointmentValue: 138.89,
    newClients: 12,
    returningClients: 25,
    topServices: [
      {
        id: 'service3',
        name: 'Full Color',
        count: 15,
        revenue: 1800
      },
      {
        id: 'service1',
        name: 'Women\'s Haircut',
        count: 22,
        revenue: 1430
      },
      {
        id: 'service5',
        name: 'Blowout',
        count: 18,
        revenue: 900
      },
      {
        id: 'service4',
        name: 'Highlights',
        count: 5,
        revenue: 750
      },
      {
        id: 'service2',
        name: 'Men\'s Haircut',
        count: 8,
        revenue: 360
      }
    ],
    topStaff: [
      {
        id: 'staff1',
        name: 'Jennifer Lopez',
        appointmentCount: 25,
        revenue: 3750
      },
      {
        id: 'staff2',
        name: 'Michael Chen',
        appointmentCount: 20,
        revenue: 2500
      }
    ],
    appointmentsByDay: [
      { day: 'Monday', count: 5 },
      { day: 'Tuesday', count: 7 },
      { day: 'Wednesday', count: 6 },
      { day: 'Thursday', count: 8 },
      { day: 'Friday', count: 10 },
      { day: 'Saturday', count: 9 },
      { day: 'Sunday', count: 0 }
    ],
    appointmentsByHour: [
      { hour: 9, count: 3 },
      { hour: 10, count: 5 },
      { hour: 11, count: 6 },
      { hour: 12, count: 4 },
      { hour: 13, count: 3 },
      { hour: 14, count: 7 },
      { hour: 15, count: 8 },
      { hour: 16, count: 5 },
      { hour: 17, count: 4 }
    ]
  };
};