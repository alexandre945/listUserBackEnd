const express = require('express');
const cors = require('cors');
const app = express();
const productsRouter = require('./src/routes/products');

// Configurar CORS para permitir solicitações do front que esta rodando na vercel
app.use(cors({
  origin: 'https://listadecompras-rho.vercel.app/'
}));

app.use(express.json());
app.use('/api', productsRouter);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
