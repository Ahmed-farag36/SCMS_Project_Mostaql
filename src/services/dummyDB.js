export default {
  products: [
    {
      id: "1",
      title: "Processor i7 8750 4.7GHZ",
      category: "processors",
      brand: "Intel",
      description:
        "A high-end processor with optimum performance form the 8th generation",
      images: [
        "https://image.shutterstock.com/image-photo/gamer-workspace-concept-top-view-260nw-772735207.jpg",
        "https://image.shutterstock.com/image-photo/gamer-workspace-concept-top-view-260nw-772735207.jpg",
        "https://image.shutterstock.com/image-photo/gamer-workspace-concept-top-view-260nw-772735207.jpg"
      ],
      quantity: 11,
      sold: 25,
      shippedFrom: "USA",
      supplierId: "100",
      comments: [],
      rating: 4,
      addedAt: "2020/02/14",
      updatedAt: "2020/02/14",
      specs: new Map([["Cores", 6], ["Speed", "4.7 GHZ"]])
    },
    {
      id: "2",
      title: "Processor i5 6750 2.7GHZ",
      category: "processors",
      brand: "Intel",
      description:
        "A mid-end processor with good performance form the 6th generation",
      images: [
        "https://image.shutterstock.com/image-photo/gamer-workspace-concept-top-view-260nw-772735207.jpg",
        "https://image.shutterstock.com/image-photo/gamer-workspace-concept-top-view-260nw-772735207.jpg",
        "https://image.shutterstock.com/image-photo/gamer-workspace-concept-top-view-260nw-772735207.jpg"
      ],
      quantity: 7,
      sold: 30,
      shippedFrom: "China",
      supplierId: "101",
      comments: [],
      rating: 3,
      addedAt: "2020/01/2",
      updatedAt: "2020/02/1",
      specs: new Map([["Cores", 4], ["Speed", "2.7 GHZ"]])
    }
  ],
  suppliers: [
    {
      id: "100",
      name: "Hardware limited, co"
    },
    {
      id: "101",
      name: "Chinese stock"
    }
  ],
  customers: [
    {
      id: "200",
      name: "Johnny English",
      inventory: ["1", "2"]
    }
  ],
  orders: [
    {
      id: "300",
      products: [
        {
          productId: "1",
          productTitle: "Processor i7 8750 4.7GHZ",
          quantity: 2,
          price: 5
        }
      ],
      supplierId: "100",
      customerId: "200",
      issuedAt: "2020/3/21",
      dueDate: "2020/3/27",
      status: "Shipped", //Processing, Preparing, Prepared, Shipped, Delivered, Cancelled
      type: "Confirmed" //Inquiry, Offer, Confirmed
    },
    {
      id: "301",
      products: [
        {
          productId: "1",
          productTitle: "Processor i7 8750 4.7GHZ",
          quantity: 4,
          price: null
        },
        {
          productId: "1",
          productTitle: "Processor i7 8750 4.7GHZ",
          quantity: 4,
          price: null
        }
      ],
      supplierId: "101",
      customerId: "200",
      issuedAt: "2020/1/11",
      dueDate: null,
      status: "Processing", //Processing, Prepared, Shipped, Delivered, Cancelled
      type: "Inquiry" //Inquiry, Offer, Confirmed
    },
    {
      id: "302",
      products: [
        {
          productId: "1",
          productTitle: "Processor i7 8750 4.7GHZ",
          quantity: 4,
          price: 10
        }
      ],
      supplierId: "100",
      customerId: "200",
      issuedAt: "2020/1/11",
      dueDate: null,
      status: "Processing", //Processing, Prepared, Shipped, Delivered, Cancelled
      type: "Offer" //Inquiry, Offer, Confirmed
    },
    {
      id: "303",
      products: [
        {
          productId: "1",
          productTitle: "Processor i7 8750 4.7GHZ",
          quantity: 4,
          price: 10
        }
      ],
      supplierId: "100",
      customerId: "200",
      issuedAt: "2020/1/11",
      dueDate: "2020/3/20",
      status: "Preparing", //Processing, Preparing, Prepared, Shipped, Delivered, Cancelled
      type: "Confirmed" //Inquiry, Offer, Confirmed
    }
  ],
  comments: []
};
