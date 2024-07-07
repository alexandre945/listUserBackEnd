const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 8080;

// Configuração de CORS
app.use(cors({
  origin: 'https://listadecompras-rho.vercel.app', // URL do frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Métodos permitidos
  allowedHeaders: ['Content-Type', 'Authorization'] // Cabeçalhos permitidos
}));

app.use(express.json());
app.use('/api', require('./src/routes/products'));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
