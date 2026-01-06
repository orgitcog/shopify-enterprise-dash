import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import axios from 'axios';
import {
  PartnerApiClient,
  createPartnerApiClientWithCredentials,
} from '../../../src/lib/partnerApi';

// Mock axios
vi.mock('axios');

const mockAxiosCreate = vi.mocked(axios.create);
const mockAxiosIsAxiosError = vi.mocked(axios.isAxiosError);

describe('PartnerApiClient', () => {
  const mockConfig = {
    organizationId: '3604544',
    accessToken: 'test_token_123',
  };

  let mockPost: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    mockPost = vi.fn();
    mockAxiosCreate.mockReturnValue({
      post: mockPost,
    } as any);
    mockAxiosIsAxiosError.mockReturnValue(false);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  describe('constructor', () => {
    it('should create axios client with correct configuration', () => {
      new PartnerApiClient(mockConfig);

      expect(mockAxiosCreate).toHaveBeenCalledWith({
        baseURL: 'https://partners.shopify.com/3604544/api/2026-01/graphql.json',
        headers: {
          'Content-Type': 'application/json',
          'X-Shopify-Access-Token': 'test_token_123',
        },
      });
    });

    it('should store organization ID', () => {
      const client = new PartnerApiClient(mockConfig);
      expect(client.getOrganizationId()).toBe('3604544');
    });
  });

  describe('query', () => {
    it('should execute GraphQL query successfully', async () => {
      const mockResponse = {
        data: {
          data: {
            publicApiVersions: [
              { handle: '2026-01', displayName: '2026-01', supported: true },
            ],
          },
        },
      };
      mockPost.mockResolvedValueOnce(mockResponse);

      const client = new PartnerApiClient(mockConfig);
      const result = await client.query('{ publicApiVersions { handle } }');

      expect(mockPost).toHaveBeenCalledWith('', {
        query: '{ publicApiVersions { handle } }',
        variables: undefined,
      });
      expect(result).toEqual(mockResponse.data);
    });

    it('should pass variables to GraphQL query', async () => {
      const mockResponse = { data: { data: { app: { id: '123' } } } };
      mockPost.mockResolvedValueOnce(mockResponse);

      const client = new PartnerApiClient(mockConfig);
      await client.query('query GetApp($id: ID!) { app(id: $id) { id } }', { id: '123' });

      expect(mockPost).toHaveBeenCalledWith('', {
        query: 'query GetApp($id: ID!) { app(id: $id) { id } }',
        variables: { id: '123' },
      });
    });

    it('should handle axios errors', async () => {
      const axiosError = {
        response: {
          status: 401,
          data: { errors: [{ message: 'Unauthorized' }] },
        },
        message: 'Request failed',
      };
      mockPost.mockRejectedValueOnce(axiosError);
      mockAxiosIsAxiosError.mockReturnValue(true);

      const client = new PartnerApiClient(mockConfig);
      const result = await client.query('{ test }');

      expect(result.errors).toBeDefined();
      expect(result.errors?.[0].message).toBe('Unauthorized');
    });

    it('should handle network errors', async () => {
      const networkError = { message: 'Network Error' };
      mockPost.mockRejectedValueOnce(networkError);
      mockAxiosIsAxiosError.mockReturnValue(true);

      const client = new PartnerApiClient(mockConfig);
      const result = await client.query('{ test }');

      expect(result.errors).toBeDefined();
      expect(result.errors?.[0].message).toBe('Network Error');
    });
  });

  describe('getApiVersions', () => {
    it('should fetch API versions', async () => {
      const mockVersions = [
        { handle: '2025-10', displayName: '2025-10', supported: true },
        { handle: '2026-01', displayName: '2026-01', supported: true },
      ];
      mockPost.mockResolvedValueOnce({
        data: { data: { publicApiVersions: mockVersions } },
      });

      const client = new PartnerApiClient(mockConfig);
      const versions = await client.getApiVersions();

      expect(versions).toEqual(mockVersions);
    });

    it('should return empty array on error', async () => {
      mockPost.mockResolvedValueOnce({
        data: { errors: [{ message: 'Error' }] },
      });

      const client = new PartnerApiClient(mockConfig);
      const versions = await client.getApiVersions();

      expect(versions).toEqual([]);
    });
  });

  describe('getApp', () => {
    it('should fetch app by ID', async () => {
      const mockApp = { id: 'gid://partners/App/123', name: 'Test App', apiKey: 'abc123' };
      mockPost.mockResolvedValueOnce({
        data: { data: { app: mockApp } },
      });

      const client = new PartnerApiClient(mockConfig);
      const app = await client.getApp('gid://partners/App/123');

      expect(app).toEqual(mockApp);
    });

    it('should return null on error', async () => {
      mockPost.mockResolvedValueOnce({
        data: { errors: [{ message: 'App not found' }] },
      });

      const client = new PartnerApiClient(mockConfig);
      const app = await client.getApp('invalid-id');

      expect(app).toBeNull();
    });
  });

  describe('getAppEvents', () => {
    it('should fetch app events', async () => {
      const mockEvents = {
        edges: [
          {
            node: { type: 'AppInstallEvent', occurredAt: '2026-01-01T00:00:00Z' },
            cursor: 'cursor1',
          },
        ],
        pageInfo: { hasNextPage: false, hasPreviousPage: false },
      };
      mockPost.mockResolvedValueOnce({
        data: { data: { app: { events: mockEvents } } },
      });

      const client = new PartnerApiClient(mockConfig);
      const events = await client.getAppEvents('gid://partners/App/123', 50);

      expect(events).toEqual(mockEvents);
    });

    it('should return null on error', async () => {
      mockPost.mockResolvedValueOnce({
        data: { errors: [{ message: 'Error' }] },
      });

      const client = new PartnerApiClient(mockConfig);
      const events = await client.getAppEvents('invalid-id');

      expect(events).toBeNull();
    });
  });

  describe('getTransactions', () => {
    it('should fetch transactions with default options', async () => {
      const mockTransactions = {
        edges: [
          {
            node: { id: 'gid://partners/Transaction/1', createdAt: '2026-01-01T00:00:00Z' },
            cursor: 'cursor1',
          },
        ],
        pageInfo: { hasNextPage: false, hasPreviousPage: false },
      };
      mockPost.mockResolvedValueOnce({
        data: { data: { transactions: mockTransactions } },
      });

      const client = new PartnerApiClient(mockConfig);
      const transactions = await client.getTransactions();

      expect(transactions).toEqual(mockTransactions);
    });

    it('should pass filter options', async () => {
      mockPost.mockResolvedValueOnce({
        data: { data: { transactions: { edges: [], pageInfo: {} } } },
      });

      const client = new PartnerApiClient(mockConfig);
      await client.getTransactions({
        first: 10,
        appId: 'app123',
        createdAtMin: '2026-01-01T00:00:00Z',
        types: ['APP_SALE'],
      });

      expect(mockPost).toHaveBeenCalledWith('', expect.objectContaining({
        variables: expect.objectContaining({
          first: 10,
          appId: 'app123',
          createdAtMin: '2026-01-01T00:00:00Z',
          types: ['APP_SALE'],
        }),
      }));
    });

    it('should return null on error', async () => {
      mockPost.mockResolvedValueOnce({
        data: { errors: [{ message: 'Error' }] },
      });

      const client = new PartnerApiClient(mockConfig);
      const transactions = await client.getTransactions();

      expect(transactions).toBeNull();
    });
  });

  describe('getTransaction', () => {
    it('should fetch single transaction by ID', async () => {
      const mockTransaction = {
        id: 'gid://partners/Transaction/123',
        createdAt: '2026-01-01T00:00:00Z',
      };
      mockPost.mockResolvedValueOnce({
        data: { data: { transaction: mockTransaction } },
      });

      const client = new PartnerApiClient(mockConfig);
      const transaction = await client.getTransaction('gid://partners/Transaction/123');

      expect(transaction).toEqual(mockTransaction);
    });

    it('should return null on error', async () => {
      mockPost.mockResolvedValueOnce({
        data: { errors: [{ message: 'Not found' }] },
      });

      const client = new PartnerApiClient(mockConfig);
      const transaction = await client.getTransaction('invalid-id');

      expect(transaction).toBeNull();
    });
  });
});

describe('createPartnerApiClientWithCredentials', () => {
  beforeEach(() => {
    mockAxiosCreate.mockReturnValue({ post: vi.fn() } as any);
  });

  it('should create client with provided credentials', () => {
    const client = createPartnerApiClientWithCredentials('org123', 'token456');

    expect(client).toBeInstanceOf(PartnerApiClient);
    expect(client.getOrganizationId()).toBe('org123');
  });
});
