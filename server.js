const express = require('express');
const cors = require('cors');
const app = express();
const productsRouter = require('./src/routes/products');

// Configurar CORS para permitir solicitações de http://localhost:3001
app.use(cors({
  origin: 'http://localhost:3000'
}));

app.use(express.json());
app.use('/api', productsRouter);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
