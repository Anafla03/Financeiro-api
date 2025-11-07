const express = require('express');
const app = express();

app.use(express.json());

// Importar rotas
const usuarioRoutes = require('./routes/usuarioRoutes');
const categoriaRoutes = require('./routes/categoriaRoutes');
const transacaoRoutes = require('./routes/transacaoRoutes');

// Usar rotas
app.use('/usuarios', usuarioRoutes);
app.use('/categorias', categoriaRoutes);
app.use('/transacoes', transacaoRoutes);

// Servidor
const PORT = 3000;
app.listen(PORT, () => console.log(`🚀 Servidor rodando na porta ${PORT}`));
