const mysql = require('mysql');

// Substitua esses valores pelas suas credenciais reais
const DB_HOST = 'localhost';
const DB_USER = 'Seu usuário';
const DB_PASS = 'Sua senha';
const DB_NAME = 'crud_startlink';

const connection = mysql.createConnection({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASS,
  database: DB_NAME
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Conectado com sucesso!");
});