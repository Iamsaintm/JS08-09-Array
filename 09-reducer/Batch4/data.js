// 1. จำนวน transaction ทั้งหมด
// 2. จำนวนลูกค้าที่แตกต่างกัน มีใครบ้าง แต่ละคนซื้อไปยอดรวมกันเท่าไหร่ กี่เครื่อง
// 3. ยอดขายทั้งหมด (หลังหัก discount)
// 4. สินค้าที่ถูกขายมี่กี่ยี่ห้อ แต่ละยี่ห้อขายไปกี่เครื่อง และ ยอดรวมเท่าไหร่
// 5. สินค้าที่ถูกขายมีกี่รุ่นในแต่ละยี่ห้อ แต่ละรุ่นขายไปกี่เครื่อง และ ยอดรวมเท่าไหร่
// 6. หายอดรวมของการจ่ายแต่ละประเภท (Cash, Credit, ...)
// 7. หายอดรวมในแต่ละวัน
// 8. เรียงยอดขายของแต่ละรุ่นจากมากไปน้อย
// 9. เรียงลูกค้าที่ซื้อมากที่สุดจากมากไปน้อย

const sales = [
  {
    id: 1,
    product: {
      id: 1,
      name: "iPhone",
      model: "12 Pro",
      unitPrice: 48900,
    },
    saleDate: "01-01-2021",
    customer: "Sun",
    discount: 0.2,
    type: "Cash",
  },
  {
    id: 2,
    product: {
      id: 2,
      name: "iPhone",
      model: "12",
      unitPrice: 32900,
    },
    saleDate: "01-01-2021",
    customer: "Tle",
    type: "Credit",
  },
  {
    id: 3,
    product: {
      id: 1,
      name: "iPhone",
      model: "12 Pro",
      unitPrice: 36900,
    },
    saleDate: "01-01-2021",
    customer: "Beer",
    type: "Cash",
  },
  {
    id: 4,
    product: {
      id: 3,
      name: "Samsung",
      model: "S21",
      unitPrice: 27900,
    },
    saleDate: "01-01-2021",
    customer: "Jit",
    discount: 0.2,
    type: "Credit",
  },
  {
    id: 5,
    product: {
      id: 1,
      name: "iPhone",
      model: "12 Pro",
      unitPrice: 36900,
    },
    saleDate: "01-01-2021",
    customer: "Palm",
    type: "Cash",
  },
  {
    id: 6,
    product: {
      id: 1,
      name: "iPhone",
      model: "12 Pro",
      unitPrice: 48900,
    },
    saleDate: "01-01-2021",
    customer: "Top",
    type: "Credit",
  },
  {
    id: 7,
    product: {
      id: 4,
      name: "Oppo",
      model: "A15",
      unitPrice: 4299,
    },
    saleDate: "02-01-2021",
    customer: "Sun",
    type: "Credit",
  },
  {
    id: 8,
    product: {
      id: 3,
      name: "Samsung",
      model: "S21",
      unitPrice: 27900,
    },
    saleDate: "02-01-2021",
    customer: "Snap",
    discount: 0.1,
    type: "Credit",
  },
  {
    id: 9,
    product: {
      id: 5,
      name: "iPhone",
      model: "11 Pro",
      unitPrice: 36900,
    },
    saleDate: "02-01-2021",
    customer: "Ham",
    discount: 0.25,
    type: "Credit",
  },
  {
    id: 10,
    product: {
      id: 6,
      name: "Samsung",
      model: "A31",
      unitPrice: 7999,
    },
    saleDate: "02-01-2021",
    customer: "Ham",
    discount: 0.25,
    type: "Credit",
  },
  {
    id: 11,
    product: {
      id: 1,
      name: "iPhone",
      model: "12 Pro",
      unitPrice: 48900,
    },
    saleDate: "02-01-2021",
    customer: "Tle",
    discount: 0.3,
    type: "Airpay",
  },
  {
    id: 12,
    product: {
      id: 1,
      name: "iPhone",
      model: "12 Pro",
      unitPrice: 48900,
    },
    saleDate: "02-01-2021",
    customer: "Micky",
    type: "Credit",
  },
  {
    id: 13,
    product: {
      id: 2,
      name: "iPhone",
      model: "12",
      unitPrice: 32900,
    },
    saleDate: "02-01-2021",
    customer: "Boss",
    type: "Cash",
  },
  {
    id: 14,
    product: {
      id: 7,
      name: "Oppo",
      model: "Reno5",
      unitPrice: 19990,
    },
    saleDate: "02-01-2021",
    customer: "Sila",
    type: "Airpay",
  },
  {
    id: 15,
    product: {
      id: 8,
      name: "Xiaomi",
      model: "Redmi 9C",
      unitPrice: 3399,
    },
    saleDate: "02-01-2021",
    customer: "Top",
    type: "Cash",
  },
  {
    id: 16,
    product: {
      id: 9,
      name: "Samsung",
      model: "A42",
      unitPrice: 11990,
    },
    saleDate: "03-01-2021",
    customer: "Cin",
    type: "Cash",
  },
  {
    id: 17,
    product: {
      id: 6,
      name: "Samsung",
      model: "A31",
      unitPrice: 7999,
    },
    saleDate: "03-01-2021",
    customer: "Cin",
    type: "Cash",
  },
  {
    id: 18,
    product: {
      id: 1,
      name: "iPhone",
      model: "12 Pro",
      unitPrice: 36900,
    },
    saleDate: "03-01-2021",
    customer: "Sine",
    discount: 0.3,
    type: "Airpay",
  },
  {
    id: 19,
    product: {
      id: 2,
      name: "iPhone",
      model: "12",
      unitPrice: 32900,
    },
    saleDate: "03-01-2021",
    customer: "Note",
    type: "Credit",
  },
  {
    id: 20,
    product: {
      id: 3,
      name: "Samsung",
      model: "S21",
      unitPrice: 27900,
    },
    saleDate: "03-01-2021",
    customer: "Micky",
    type: "Credit",
  },
  {
    id: 21,
    product: {
      id: 10,
      name: "Vivo",
      model: "V20 Pro",
      unitPrice: 14999,
    },
    saleDate: "04-01-2021",
    customer: "Bank",
    type: "Cash",
  },
  {
    id: 22,
    product: {
      id: 10,
      name: "Vivo",
      model: "V20 Pro",
      unitPrice: 14999,
    },
    saleDate: "04-01-2021",
    customer: "Bank",
    type: "Cash",
  },
  {
    id: 23,
    product: {
      id: 7,
      name: "Oppo",
      model: "Reno5",
      unitPrice: 19990,
    },
    saleDate: "04-01-2021",
    customer: "Leo",
    type: "Cash",
  },
  {
    id: 24,
    product: {
      id: 9,
      name: "Samsung",
      model: "A42",
      unitPrice: 11990,
    },
    saleDate: "04-01-2021",
    customer: "Game",
    type: "Cash",
  },
  {
    id: 25,
    product: {
      id: 6,
      name: "Samsung",
      model: "A31",
      unitPrice: 7999,
    },
    saleDate: "04-01-2021",
    customer: "U",
    discount: 0.3,
    type: "Airpay",
  },
  {
    id: 26,
    product: {
      id: 1,
      name: "iPhone",
      model: "12 Pro",
      unitPrice: 48900,
    },
    saleDate: "05-01-2021",
    customer: "Boy",
    type: "Credit",
  },
  {
    id: 27,
    product: {
      id: 11,
      name: "Vivo",
      model: "X50 Pro",
      unitPrice: 19999,
    },
    saleDate: "05-01-2021",
    customer: "Boom",
    type: "True Wallet",
  },
  {
    id: 28,
    product: {
      id: 12,
      name: "Vivo",
      model: "V20",
      unitPrice: 10999,
    },
    saleDate: "05-01-2021",
    customer: "Boom",
    type: "True Wallet",
  },
  {
    id: 29,
    product: {
      id: 9,
      name: "Samsung",
      model: "A42",
      unitPrice: 11990,
    },
    saleDate: "05-01-2021",
    customer: "Am",
    type: "Cash",
  },
  {
    id: 30,
    product: {
      id: 2,
      name: "iPhone",
      model: "12",
      unitPrice: 32900,
    },
    saleDate: "06-01-2021",
    customer: "Um",
    type: "True Wallet",
  },
  {
    id: 31,
    product: {
      id: 3,
      name: "Samsung",
      model: "S21",
      unitPrice: 27900,
    },
    saleDate: "06-01-2021",
    customer: "Win",
    discount: 0.25,
    type: "Airpay",
  },
  {
    id: 32,
    product: {
      id: 7,
      name: "Oppo",
      model: "Reno5",
      unitPrice: 19990,
    },
    saleDate: "06-01-2021",
    customer: "Cin",
    type: "Cash",
  },
  {
    id: 33,
    product: {
      id: 2,
      name: "iPhone",
      model: "12",
      unitPrice: 32900,
    },
    saleDate: "07-01-2021",
    customer: "Palm",
    discount: 0.1,
    type: "Credit",
  },
  {
    id: 34,
    product: {
      id: 5,
      name: "iPhone",
      model: "11 Pro",
      unitPrice: 36900,
    },
    saleDate: "07-01-2021",
    customer: "Dom",
    discount: 0.15,
    type: "Credit",
  },
  {
    id: 35,
    product: {
      id: 3,
      name: "Samsung",
      model: "S21",
      unitPrice: 27900,
    },
    saleDate: "07-01-2021",
    customer: "Sern",
    type: "True Wallet",
  },
  {
    id: 36,
    product: {
      id: 13,
      name: "iPhone",
      model: "SE2000",
      unitPrice: 14900,
    },
    saleDate: "07-01-2021",
    customer: "Beer",
    type: "Cash",
  },
  {
    id: 37,
    product: {
      id: 14,
      name: "iPhone",
      model: "12 Mini",
      unitPrice: 25900,
    },
    saleDate: "07-01-2021",
    customer: "Game",
    discount: 0.2,
    type: "Credit",
  },
  {
    id: 38,
    product: {
      id: 2,
      name: "iPhone",
      model: "12",
      unitPrice: 32900,
    },
    saleDate: "07-01-2021",
    customer: "Sun",
    discount: 0.25,
    type: "Airpay",
  },
  {
    id: 39,
    product: {
      id: 2,
      name: "iPhone",
      model: "12",
      unitPrice: 32900,
    },
    saleDate: "07-01-2021",
    customer: "Tom",
    type: "Cash",
  },
  {
    id: 40,
    product: {
      id: 14,
      name: "iPhone",
      model: "12 Mini",
      unitPrice: 25900,
    },
    saleDate: "08-01-2021",
    customer: "Ham",
    type: "Cash",
  },
  {
    id: 41,
    product: {
      id: 2,
      name: "iPhone",
      model: "12",
      unitPrice: 32900,
    },
    saleDate: "08-01-2021",
    customer: "Dom",
    type: "Credit",
  },
  {
    id: 42,
    product: {
      id: 3,
      name: "Samsung",
      model: "S21",
      unitPrice: 27900,
    },
    saleDate: "08-01-2021",
    customer: "Cin",
    type: "True Wallet",
  },
  {
    id: 43,
    product: {
      id: 3,
      name: "Samsung",
      model: "S21",
      unitPrice: 27900,
    },
    saleDate: "08-01-2021",
    customer: "Tle",
    type: "Cash",
  },
  {
    id: 44,
    product: {
      id: 7,
      name: "Oppo",
      model: "Reno5",
      unitPrice: 19990,
    },
    saleDate: "09-01-2021",
    customer: "U",
    type: "Cash",
  },
  {
    id: 45,
    product: {
      id: 11,
      name: "Vivo",
      model: "X50 Pro",
      unitPrice: 19999,
    },
    saleDate: "09-01-2021",
    customer: "Am",
    discount: 0.35,
    type: "Airpay",
  },
  {
    id: 46,
    product: {
      id: 10,
      name: "Vivo",
      model: "V20 Pro",
      unitPrice: 14999,
    },
    saleDate: "10-01-2021",
    customer: "Sern",
    type: "Cash",
  },
  {
    id: 47,
    product: {
      id: 1,
      name: "iPhone",
      model: "12 Pro",
      unitPrice: 48900,
    },
    saleDate: "10-01-2021",
    customer: "Game",
    discount: 0.3,
    type: "Credit",
  },
  {
    id: 48,
    product: {
      id: 9,
      name: "Samsung",
      model: "A42",
      unitPrice: 11990,
    },
    saleDate: "10-01-2021",
    customer: "Jit",
    type: "Cash",
  },
  {
    id: 49,
    product: {
      id: 14,
      name: "iPhone",
      model: "12 Mini",
      unitPrice: 25900,
    },
    saleDate: "10-01-2021",
    customer: "Snap",
    type: "True Wallet",
  },
  {
    id: 50,
    product: {
      id: 2,
      name: "iPhone",
      model: "12",
      unitPrice: 32900,
    },
    saleDate: "10-01-2021",
    customer: "Micky",
    type: "Cash",
  },
  {
    id: 51,
    product: {
      id: 3,
      name: "Samsung",
      model: "S21",
      unitPrice: 27900,
    },
    saleDate: "11-01-2021",
    customer: "Boss",
    discount: 0.2,
    type: "Credit",
  },
  {
    id: 52,
    product: {
      id: 8,
      name: "Xiaomi",
      model: "Redmi 9C",
      unitPrice: 3399,
    },
    saleDate: "11-01-2021",
    customer: "Leo",
    discount: 0.05,
    type: "Credit",
  },
  {
    id: 53,
    product: {
      id: 10,
      name: "Vivo",
      model: "V20 Pro",
      unitPrice: 14999,
    },
    saleDate: "11-01-2021",
    customer: "Sine",
    discount: 0.15,
    type: "True Wallet",
  },
  {
    id: 54,
    product: {
      id: 14,
      name: "iPhone",
      model: "12 Mini",
      unitPrice: 25900,
    },
    saleDate: "07-01-2021",
    customer: "Um",
    discount: 0.1,
    type: "Cash",
  },
];

// 1. จำนวน transaction ทั้งหมด
const totalTransactions = sales.length;
console.log(`Total Transactions: ${totalTransactions}`);

// 2. จำนวนลูกค้าที่แตกต่างกัน มีใครบ้าง แต่ละคนซื้อไปยอดรวมกันเท่าไหร่ กี่เครื่อง
const customers = {};
sales.forEach((sale) => {
  const customer = sale.customer;
  if (!customers[customer]) {
    customers[customer] = {
      totalSpent: 0,
      totalItems: 0,
    };
  }
  customers[customer].totalSpent +=
    sale.product.unitPrice * (1 - (sale.discount || 0));
  customers[customer].totalItems++;
});

console.log("Customers:");
for (const customer in customers) {
  console.log(
    `${customer}: Total Spent: ${customers[customer].totalSpent}, Total Items: ${customers[customer].totalItems}`
  );
}

// 3. ยอดขายทั้งหมด (หลังหัก discount)
const totalSalesAmount = sales.reduce((total, sale) => {
  return total + sale.product.unitPrice * (1 - (sale.discount || 0));
}, 0);
console.log(`Total Sales Amount: ${totalSalesAmount}`);

// 4. สินค้าที่ถูกขายมี่กี่ยี่ห้อ แต่ละยี่ห้อขายไปกี่เครื่อง และ ยอดรวมเท่าไหร่
const productsByBrand = {};
sales.forEach((sale) => {
  const brand = sale.product.name;
  if (!productsByBrand[brand]) {
    productsByBrand[brand] = {
      totalItems: 0,
      totalAmount: 0,
    };
  }
  productsByBrand[brand].totalItems++;
  productsByBrand[brand].totalAmount +=
    sale.product.unitPrice * (1 - (sale.discount || 0));
});

console.log("Products by Brand:");
for (const brand in productsByBrand) {
  console.log(
    `${brand}: Total Items Sold: ${productsByBrand[brand].totalItems}, Total Sales Amount: ${productsByBrand[brand].totalAmount}`
  );
}

// 5. สินค้าที่ถูกขายมีกี่รุ่นในแต่ละยี่ห้อ แต่ละรุ่นขายไปกี่เครื่อง และ ยอดรวมเท่าไหร่
const productsByModel = {};
sales.forEach((sale) => {
  const model = sale.product.model;
  const brand = sale.product.name;
  if (!productsByModel[model]) {
    productsByModel[model] = {
      brand: brand,
      totalItems: 0,
      totalAmount: 0,
    };
  }
  productsByModel[model].totalItems++;
  productsByModel[model].totalAmount +=
    sale.product.unitPrice * (1 - (sale.discount || 0));
});

console.log("Products by Model:");
for (const model in productsByModel) {
  console.log(
    `${productsByModel[model].brand} - ${model}: Total Items Sold: ${productsByModel[model].totalItems}, Total Sales Amount: ${productsByModel[model].totalAmount}`
  );
}

// 6. หายอดรวมของการจ่ายแต่ละประเภท (Cash, Credit, ...)
const paymentTypes = {};
sales.forEach((sale) => {
  const paymentType = sale.type;
  if (!paymentTypes[paymentType]) {
    paymentTypes[paymentType] = 0;
  }
  paymentTypes[paymentType]++;
});

console.log("Payment Types:");
for (const type in paymentTypes) {
  console.log(`${type}: Total Amount: ${paymentTypes[type]}`);
}

// 7. หายอดรวมในแต่ละวัน
const salesByDate = {};
sales.forEach((sale) => {
  const date = sale.saleDate;
  if (!salesByDate[date]) {
    salesByDate[date] = 0;
  }
  salesByDate[date] += sale.product.unitPrice * (1 - (sale.discount || 0));
});

console.log("Sales by Date:");
for (const date in salesByDate) {
  console.log(`${date}: Total Sales Amount: ${salesByDate[date]}`);
}

// 8. เรียงยอดขายของแต่ละรุ่นจากมากไปน้อย
const sortedByModel = Object.keys(productsByModel).sort(
  (a, b) => productsByModel[b].totalAmount - productsByModel[a].totalAmount
);
console.log("Top Selling Models:");
sortedByModel.forEach((model) => {
  console.log(
    `${productsByModel[model].brand} - ${model}: Total Sales Amount: ${productsByModel[model].totalAmount}`
  );
});

// 9. เรียงลูกค้าที่ซื้อมากที่สุดจากมากไปน้อย
const sortedByCustomer = Object.keys(customers).sort(
  (a, b) => customers[b].totalItems - customers[a].totalItems
);
console.log("Top Customers by Number of Items Purchased:");
sortedByCustomer.forEach((customer) => {
  console.log(
    `${customer}: Total Items Purchased: ${customers[customer].totalItems}, Total Spent: ${customers[customer].totalSpent}`
  );
});
