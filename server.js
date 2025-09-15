const express = require('express');
const cors = require('cors');
const path = require('path');
const compression = require('compression');
const helmet = require('helmet');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(helmet());
app.use(compression());
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// Rotas da API
app.use('/api/products', require('./routes/products'));
app.use('/api/orders', require('./routes/orders'));
app.use('/api/whatsapp', require('./routes/whatsapp'));
app.use('/api/payments', require('./routes/payments'));
app.use('/api/admin', require('./routes/admin'));

// Servir arquivos estáticos do React
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));
  
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

// Rota de teste
app.get('/api/test', (req, res) => {
  res.json({ message: 'Loja Virtual WhatsApp Business API funcionando!' });
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
  console.log(`📱 Loja Virtual WhatsApp Business ativa!`);
  console.log(`💰 Pronto para gerar lucros na internet!`);
});




