const products = [
    { id: 1, name: 'Product 1', description: 'This is product 1', price: 10.99 },
    { id: 2, name: 'Product 2', description: 'This is product 2', price: 15.99 },
    { id: 3, name: 'Product 3', description: 'This is product 3', price: 20.99 },
  ];
  
  exports.getProducts = (req, res) => {
    res.json(products);
  };
  
  exports.createProduct = (req, res) => {
    const { name, description, price } = req.body;
    const newProduct = { id: products.length + 1, name, description, price };
    products.push(newProduct);
    res.status(201).json(newProduct);
  };
  
  exports.updateProduct = (req, res) => {
    const { id } = req.params;
    const { name, description, price } = req.body;
    const productIndex = products.findIndex((p) => p.id === parseInt(id));
    if (productIndex === -1) {
      return res.status(404).json({ error: 'Product not found' });
    }
    products[productIndex] = { id: parseInt(id), name, description, price };
    res.json(products[productIndex]);
  };
  
  exports.deleteProduct = (req, res) => {
    const { id } = req.params;
    const productIndex = products.findIndex((p) => p.id === parseInt(id));
    if (productIndex === -1) {
      return res.status(404).json({ error: 'Product not found' });
    }
    const deletedProduct = products.splice(productIndex, 1)[0];
    res.json(deletedProduct);
  };