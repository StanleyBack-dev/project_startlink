const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const cors = require('cors');
const routes = require('./src/routes/routes'); // Importando as rotas

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride('_method')); // Adiciona o middleware method-override
app.use(cors());

// Configurando o servidor para servir arquivos estáticos da pasta 'public'
app.use(express.static('public'));
// Habilita o uso de EJS
app.set('view engine', 'ejs');

app.use('/api', routes); // Usando as rotas sob o prefixo '/api'

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
