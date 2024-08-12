const orders = [
  {
    orderId: 1,
    customerName: "John Doe",
    items: [
      { name: "Laptop", price: 1200 },
      { name: "Mouse", price: 25 },
    ],
    status: "delivered",
    date: "2024-08-01",
    priority: "high",
  },
  {
    orderId: 2,
    customerName: "Jane Smith",
    items: [
      { name: "Phone", price: 800 },
      { name: "Case", price: 20 },
    ],
    status: "shipped",
    date: "2024-08-03",
    priority: "medium",
  },
  {
    orderId: 3,
    customerName: "Emily Johnson",
    items: [
      { name: "Tablet", price: 300 },
      { name: "Cover", price: 15 },
    ],
    status: "processing",
    date: "2024-08-05",
    priority: "low",
  },
  {
    orderId: 4,
    customerName: "Michael Brown",
    items: [
      { name: "Headphones", price: 150 },
      { name: "Charger", price: 30 },
    ],
    status: "delivered",
    date: "2024-08-06",
    priority: "high",
  },
  {
    orderId: 5,
    customerName: "Sarah Davis",
    items: [
      { name: "Monitor", price: 250 },
      { name: "Cable", price: 10 },
    ],
    status: "canceled",
    date: "2024-08-07",
    priority: "low",
  },
  {
    orderId: 6,
    customerName: "David Wilson",
    items: [
      { name: "Keyboard", price: 70 },
      { name: "Mousepad", price: 10 },
    ],
    status: "shipped",
    date: "2024-08-08",
    priority: "medium",
  },
  {
    orderId: 7,
    customerName: "Laura Martinez",
    items: [
      { name: "Camera", price: 500 },
      { name: "SD Card", price: 30 },
    ],
    status: "processing",
    date: "2024-08-09",
    priority: "high",
  },
  {
    orderId: 8,
    customerName: "Daniel Moore",
    items: [
      { name: "Speaker", price: 200 },
      { name: "Aux Cable", price: 5 },
    ],
    status: "delivered",
    date: "2024-08-10",
    priority: "medium",
  },
  {
    orderId: 9,
    customerName: "Olivia Taylor",
    items: [
      { name: "Smartwatch", price: 180 },
      { name: "Screen Protector", price: 10 },
    ],
    status: "shipped",
    date: "2024-08-11",
    priority: "low",
  },
  {
    orderId: 10,
    customerName: "James Anderson",
    items: [
      { name: "Gaming Console", price: 400 },
      { name: "Controller", price: 60 },
    ],
    status: "delivered",
    date: "2024-08-12",
    priority: "high",
  },
];

// Filter and Map:
// Create an array of order IDs for all delivered orders.

let order_id = orders
  .filter((o) => o.status === "delivered")
  .map((arry) => arry.orderId);
// console.log(orders.filter((o) => o.status === "delivered"));
console.log(order_id);

// Reduce:
// Calculate the total revenue from all delivered orders.
let revenue = orders
  .filter((o) => o.status === "delivered")
  .reduce((total, order) => {
    const orderTotal = order.items.reduce((sum, item) => sum + item.price, 0);
    return total + orderTotal;
  }, 0);
console.log(revenue);

// Create an array of customer names who have placed orders with a high priority.
console.log(
  orders
    .filter((order) => order.priority === "high")
    .map((order) => order.customerName)
);

// Find all orders that contain an item with a price greater than $100.
// console.log(
//   orders
//     .map((order) => order.items)
//     .map((items) => items.filter((inner_item) => inner_item.price > 100))
// );

console.log(
  orders.filter((order) => order.items.some((item) => item.price > 100))
);
