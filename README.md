# Supply chain management system:

## Customer
  1. Products
      can:
        1. view all products
        2. search
        3. filter (category, supplier)
        4. add to wishlist
      views:
        1. products
        2. product details
  2. Orders:
      can:
        1. view orders
        2. inquire
        3. confirm
        4. cancel
      get:
        1. notification for invoice
      views: 
        1. orders
        2. order details

## Supplier
  1. Warehouse
      of products
        can:
          1. view his products
          2. add
          3. update
          4. delete
        get:
          1. notification for short in storage
          2. clients comments
        views:
          1. warehouse
          2. product details
  2. Orders
        can:
          1. view orders
          2. cancel
          3. change state (prepared, shipped, delivered)
        get: 
          1. notifications for new orders or canceled by customer
        views:
          1. orders
          2. order details
## Admin