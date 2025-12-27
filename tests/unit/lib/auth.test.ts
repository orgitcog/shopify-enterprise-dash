import { describe, it, expect, vi, beforeEach } from 'vitest';
import { signIn, signUp, signOut, resetPassword, getCurrentUser, updateProfile } from '@/lib/auth';

// Mock Supabase client
vi.mock('@/lib/supabase', () => ({
  supabase: {
    auth: {
      signInWithPassword: vi.fn(),
      signUp: vi.fn(),
      signOut: vi.fn(),
      resetPasswordForEmail: vi.fn(),
      getSession: vi.fn(),
    },
    from: vi.fn(() => ({
      select: vi.fn(() => ({
        eq: vi.fn(() => ({
          single: vi.fn(),
        })),
      })),
      insert: vi.fn(() => ({
        select: vi.fn(),
      })),
      update: vi.fn(() => ({
        eq: vi.fn(),
      })),
    })),
  },
}));

import { supabase } from '@/lib/supabase';

describe('Auth Library', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('signIn', () => {
    it('should successfully sign in a user', async () => {
      const mockUser = { id: 'user-123', email: 'test@example.com' };
      const mockProfile = { id: 'user-123', display_name: 'Test User' };

      vi.mocked(supabase.auth.signInWithPassword).mockResolvedValue({
        data: { user: mockUser, session: {} },
        error: null,
      } as any);

      vi.mocked(supabase.from).mockReturnValue({
        select: vi.fn().mockReturnValue({
          eq: vi.fn().mockReturnValue({
            single: vi.fn().mockResolvedValue({ data: mockProfile, error: null }),
          }),
        }),
      } as any);

      const result = await signIn('test@example.com', 'password123');

      expect(result.error).toBeNull();
      expect(result.data).toEqual({ user: mockUser, profile: mockProfile });
      expect(supabase.auth.signInWithPassword).toHaveBeenCalledWith({
        email: 'test@example.com',
        password: 'password123',
      });
    });

    it('should return error when sign in fails', async () => {
      const mockError = new Error('Invalid credentials');

      vi.mocked(supabase.auth.signInWithPassword).mockResolvedValue({
        data: { user: null, session: null },
        error: mockError,
      } as any);

      const result = await signIn('wrong@example.com', 'wrongpassword');

      expect(result.error).toBe(mockError);
      expect(result.data).toBeNull();
    });
  });

  describe('signUp', () => {
    it('should successfully sign up a new user', async () => {
      const mockUser = { id: 'new-user-123', email: 'new@example.com' };

      vi.mocked(supabase.auth.signUp).mockResolvedValue({
        data: { user: mockUser, session: {} },
        error: null,
      } as any);

      vi.mocked(supabase.from).mockReturnValue({
        insert: vi.fn().mockResolvedValue({ error: null }),
      } as any);

      const result = await signUp('new@example.com', 'password123');

      expect(result.error).toBeNull();
      expect(result.data?.user).toEqual(mockUser);
      expect(supabase.auth.signUp).toHaveBeenCalledWith({
        email: 'new@example.com',
        password: 'password123',
      });
    });

    it('should return error when sign up fails', async () => {
      const mockError = new Error('Email already exists');

      vi.mocked(supabase.auth.signUp).mockResolvedValue({
        data: { user: null, session: null },
        error: mockError,
      } as any);

      const result = await signUp('existing@example.com', 'password123');

      expect(result.error).toBe(mockError);
      expect(result.data).toBeNull();
    });
  });

  describe('signOut', () => {
    it('should successfully sign out', async () => {
      vi.mocked(supabase.auth.signOut).mockResolvedValue({ error: null } as any);

      await expect(signOut()).resolves.not.toThrow();
      expect(supabase.auth.signOut).toHaveBeenCalled();
    });

    it('should log error when sign out fails', async () => {
      const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
      const mockError = new Error('Sign out failed');

      vi.mocked(supabase.auth.signOut).mockResolvedValue({ error: mockError } as any);

      await signOut();

      expect(consoleSpy).toHaveBeenCalledWith('Error signing out:', mockError);
      consoleSpy.mockRestore();
    });
  });

  describe('resetPassword', () => {
    it('should send reset password email', async () => {
      vi.mocked(supabase.auth.resetPasswordForEmail).mockResolvedValue({
        data: {},
        error: null,
      } as any);

      const result = await resetPassword('test@example.com');

      expect(result.error).toBeNull();
      expect(supabase.auth.resetPasswordForEmail).toHaveBeenCalledWith(
        'test@example.com',
        expect.objectContaining({
          redirectTo: expect.stringContaining('/reset-password'),
        })
      );
    });

    it('should return error for invalid email', async () => {
      const mockError = new Error('User not found');

      vi.mocked(supabase.auth.resetPasswordForEmail).mockResolvedValue({
        data: null,
        error: mockError,
      } as any);

      const result = await resetPassword('nonexistent@example.com');

      expect(result.error).toBe(mockError);
    });
  });

  describe('getCurrentUser', () => {
    it('should return current user with profile', async () => {
      const mockSession = {
        user: { id: 'user-123', email: 'test@example.com' },
      };
      const mockProfile = { display_name: 'Test User', role: 'admin' };

      vi.mocked(supabase.auth.getSession).mockResolvedValue({
        data: { session: mockSession },
        error: null,
      } as any);

      vi.mocked(supabase.from).mockReturnValue({
        select: vi.fn().mockReturnValue({
          eq: vi.fn().mockReturnValue({
            single: vi.fn().mockResolvedValue({ data: mockProfile, error: null }),
          }),
        }),
      } as any);

      const result = await getCurrentUser();

      expect(result).toEqual({
        id: 'user-123',
        email: 'test@example.com',
        ...mockProfile,
      });
    });

    it('should return null when no session exists', async () => {
      vi.mocked(supabase.auth.getSession).mockResolvedValue({
        data: { session: null },
        error: null,
      } as any);

      const result = await getCurrentUser();

      expect(result).toBeNull();
    });
  });

  describe('updateProfile', () => {
    it('should update user profile', async () => {
      const mockUser = { id: 'user-123', email: 'test@example.com' };
      const updates = { display_name: 'Updated Name' };

      vi.mocked(supabase.from).mockReturnValue({
        update: vi.fn().mockReturnValue({
          eq: vi.fn().mockResolvedValue({ error: null }),
        }),
      } as any);

      const result = await updateProfile(mockUser, updates);

      expect(result.error).toBeNull();
      expect(result.data).toEqual(updates);
    });
  });
});
