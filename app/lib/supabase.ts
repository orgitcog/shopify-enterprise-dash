export async function getStores() {
  try {
    // Mock implementation until the real implementation is needed
    return [
      {
        id: "1",
        name: "Store 1",
        url: "store1.myshopify.com",
        revenue: 12500,
        orders: 125,
        status: "active",
        last_sync: new Date().toISOString(),
        created_at: new Date().toISOString()
      },
      {
        id: "2",
        name: "Store 2",
        url: "store2.myshopify.com",
        revenue: 9800,
        orders: 98,
        status: "active",
        last_sync: new Date().toISOString(),
        created_at: new Date().toISOString()
      }
    ];
  } catch (error) {
    console.error("Error fetching stores:", error);
    return [];
  }
}