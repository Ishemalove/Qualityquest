const express = require('express');
const cors = require('cors');
const productRoutes = require('./routes/productRoute');
const userRoutes = require('./routes/profileRoute');

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});