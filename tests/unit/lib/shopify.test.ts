import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import axios from 'axios';

// Mock axios
vi.mock('axios', () => ({
  default: {
    create: vi.fn(() => ({
      get: vi.fn(),
      post: vi.fn(),
    })),
  },
}));

// Mock import.meta.env
vi.stubEnv('VITE_SHOPIFY_ADMIN_API_URL', 'https://test-store.myshopify.com/admin/api/2024-01');
vi.stubEnv('VITE_SHOPIFY_ACCESS_TOKEN', 'test-access-token');
vi.stubEnv('VITE_SHOPIFY_STORE_URL', 'test-store.myshopify.com');

// Import after mocking
import {
  getShopInfo,
  getProducts,
  getOrders,
  getAnalytics,
  mockShopInfo,
  mockProducts,
  mockOrders,
  mockAnalytics,
  ShopInfo,
  ShopifyProduct,
  ShopifyOrder,
  ShopifyAnalytics,
} from '@/lib/shopify';

describe('Shopify Library', () => {
  let mockAxiosInstance: { get: ReturnType<typeof vi.fn>; post: ReturnType<typeof vi.fn> };

  beforeEach(() => {
    vi.clearAllMocks();
    mockAxiosInstance = {
      get: vi.fn(),
      post: vi.fn(),
    };
    vi.mocked(axios.create).mockReturnValue(mockAxiosInstance as any);
  });

  afterEach(() => {
    vi.unstubAllEnvs();
  });

  describe('Mock Data Validation', () => {
    it('should have valid mock shop info structure', () => {
      expect(mockShopInfo).toHaveProperty('id');
      expect(mockShopInfo).toHaveProperty('name');
      expect(mockShopInfo).toHaveProperty('email');
      expect(mockShopInfo).toHaveProperty('myshopifyDomain');
      expect(mockShopInfo).toHaveProperty('primaryDomain');
      expect(mockShopInfo).toHaveProperty('plan');
      expect(mockShopInfo.plan).toHaveProperty('displayName');
      expect(mockShopInfo.plan).toHaveProperty('partnerDevelopment');
      expect(mockShopInfo.plan).toHaveProperty('shopifyPlus');
    });

    it('should have valid mock products structure', () => {
      expect(mockProducts).toBeInstanceOf(Array);
      expect(mockProducts.length).toBeGreaterThan(0);
      
      const product = mockProducts[0];
      expect(product).toHaveProperty('id');
      expect(product).toHaveProperty('title');
      expect(product).toHaveProperty('handle');
      expect(product).toHaveProperty('description');
      expect(product).toHaveProperty('productType');
      expect(product).toHaveProperty('status');
      expect(product).toHaveProperty('vendor');
      expect(product).toHaveProperty('totalInventory');
      expect(product).toHaveProperty('priceRangeV2');
      expect(product.priceRangeV2).toHaveProperty('minVariantPrice');
      expect(product.priceRangeV2).toHaveProperty('maxVariantPrice');
    });

    it('should have valid mock orders structure', () => {
      expect(mockOrders).toBeInstanceOf(Array);
      expect(mockOrders.length).toBeGreaterThan(0);
      
      const order = mockOrders[0];
      expect(order).toHaveProperty('id');
      expect(order).toHaveProperty('name');
      expect(order).toHaveProperty('email');
      expect(order).toHaveProperty('createdAt');
      expect(order).toHaveProperty('totalPriceSet');
      expect(order.totalPriceSet).toHaveProperty('shopMoney');
      expect(order).toHaveProperty('displayFulfillmentStatus');
      expect(order).toHaveProperty('displayFinancialStatus');
    });

    it('should have valid mock analytics structure', () => {
      expect(mockAnalytics).toBeInstanceOf(Array);
      expect(mockAnalytics.length).toBeGreaterThan(0);
      
      const analytics = mockAnalytics[0];
      expect(analytics).toHaveProperty('interval');
      expect(analytics).toHaveProperty('totalGrossSales');
      expect(analytics).toHaveProperty('totalNetSales');
      expect(analytics).toHaveProperty('totalRefunds');
      expect(analytics).toHaveProperty('totalReturns');
      expect(analytics).toHaveProperty('totalOrders');
    });
  });

  describe('Type Definitions', () => {
    it('should correctly type ShopInfo', () => {
      const shopInfo: ShopInfo = {
        id: 'test-id',
        name: 'Test Shop',
        email: 'test@shop.com',
        myshopifyDomain: 'test.myshopify.com',
        primaryDomain: {
          url: 'https://test.com',
        },
        plan: {
          displayName: 'Basic',
          partnerDevelopment: false,
          shopifyPlus: false,
        },
      };
      expect(shopInfo.id).toBe('test-id');
    });

    it('should correctly type ShopifyProduct', () => {
      const product: ShopifyProduct = {
        id: 'prod-1',
        title: 'Test Product',
        handle: 'test-product',
        description: 'A test product',
        productType: 'Test',
        status: 'ACTIVE',
        vendor: 'Test Vendor',
        totalInventory: 10,
        priceRangeV2: {
          minVariantPrice: { amount: '10.00', currencyCode: 'USD' },
          maxVariantPrice: { amount: '20.00', currencyCode: 'USD' },
        },
        images: {
          edges: [],
        },
      };
      expect(product.title).toBe('Test Product');
    });

    it('should correctly type ShopifyOrder', () => {
      const order: ShopifyOrder = {
        id: 'order-1',
        name: '#1001',
        email: 'customer@test.com',
        createdAt: new Date().toISOString(),
        totalPriceSet: {
          shopMoney: { amount: '100.00', currencyCode: 'USD' },
        },
        displayFulfillmentStatus: 'FULFILLED',
        displayFinancialStatus: 'PAID',
      };
      expect(order.name).toBe('#1001');
    });

    it('should correctly type ShopifyAnalytics', () => {
      const analytics: ShopifyAnalytics = {
        interval: '2025-01',
        totalGrossSales: { amount: '10000.00' },
        totalNetSales: { amount: '9500.00' },
        totalRefunds: { amount: '500.00' },
        totalReturns: { amount: '200.00' },
        totalOrders: 100,
      };
      expect(analytics.totalOrders).toBe(100);
    });
  });

  describe('getShopInfo', () => {
    it('should return mock data in development mode', async () => {
      const originalEnv = process.env.NODE_ENV;
      process.env.NODE_ENV = 'development';

      const result = await getShopInfo();

      expect(result).toEqual(mockShopInfo);
      
      process.env.NODE_ENV = originalEnv;
    });
  });

  describe('getProducts', () => {
    it('should return mock data in development mode', async () => {
      const originalEnv = process.env.NODE_ENV;
      process.env.NODE_ENV = 'development';

      const result = await getProducts();

      expect(result).toEqual(mockProducts);
      
      process.env.NODE_ENV = originalEnv;
    });

    it('should accept custom limit parameter', async () => {
      const originalEnv = process.env.NODE_ENV;
      process.env.NODE_ENV = 'development';

      const result = await getProducts(25);

      expect(result).toEqual(mockProducts);
      
      process.env.NODE_ENV = originalEnv;
    });
  });

  describe('getOrders', () => {
    it('should return mock data in development mode', async () => {
      const originalEnv = process.env.NODE_ENV;
      process.env.NODE_ENV = 'development';

      const result = await getOrders();

      expect(result).toEqual(mockOrders);
      
      process.env.NODE_ENV = originalEnv;
    });

    it('should accept custom limit parameter', async () => {
      const originalEnv = process.env.NODE_ENV;
      process.env.NODE_ENV = 'development';

      const result = await getOrders(50);

      expect(result).toEqual(mockOrders);
      
      process.env.NODE_ENV = originalEnv;
    });
  });

  describe('getAnalytics', () => {
    it('should return mock data in development mode', async () => {
      const originalEnv = process.env.NODE_ENV;
      process.env.NODE_ENV = 'development';

      const result = await getAnalytics();

      expect(result).toEqual(mockAnalytics);
      
      process.env.NODE_ENV = originalEnv;
    });

    it('should accept custom interval parameter', async () => {
      const originalEnv = process.env.NODE_ENV;
      process.env.NODE_ENV = 'development';

      const result = await getAnalytics('YEAR');

      expect(result).toEqual(mockAnalytics);
      
      process.env.NODE_ENV = originalEnv;
    });
  });

  describe('Data Integrity', () => {
    it('should have consistent currency codes in mock data', () => {
      mockProducts.forEach((product) => {
        expect(product.priceRangeV2.minVariantPrice.currencyCode).toBe('USD');
        expect(product.priceRangeV2.maxVariantPrice.currencyCode).toBe('USD');
      });

      mockOrders.forEach((order) => {
        expect(order.totalPriceSet.shopMoney.currencyCode).toBe('USD');
      });
    });

    it('should have valid price formats in mock data', () => {
      mockProducts.forEach((product) => {
        const minPrice = parseFloat(product.priceRangeV2.minVariantPrice.amount);
        const maxPrice = parseFloat(product.priceRangeV2.maxVariantPrice.amount);
        expect(minPrice).toBeGreaterThanOrEqual(0);
        expect(maxPrice).toBeGreaterThanOrEqual(minPrice);
      });
    });

    it('should have valid order statuses in mock data', () => {
      const validFulfillmentStatuses = ['FULFILLED', 'UNFULFILLED', 'PARTIALLY_FULFILLED'];
      const validFinancialStatuses = ['PAID', 'PENDING', 'REFUNDED', 'PARTIALLY_REFUNDED'];

      mockOrders.forEach((order) => {
        expect(validFulfillmentStatuses).toContain(order.displayFulfillmentStatus);
        expect(validFinancialStatuses).toContain(order.displayFinancialStatus);
      });
    });
  });
});
