const connection = require('../../db_conection');

exports.createUser = (req, res) => {
  const { nome_completo, email, telefone, endereco_residencial } = req.body;
  const query = 'INSERT INTO tb_identificacao (nome_completo, email, telefone, endereco_residencial) VALUES (?,?,?,?)';
  connection.query(query, [nome_completo, email, telefone, endereco_residencial], (error, results) => {
    if (error) throw error;
    res.redirect('/api/read');
  });
};

exports.getAllUsers = (req, res) => {
  const query = 'SELECT * FROM tb_identificacao';
  connection.query(query, (error, results) => {
    if (error) throw error;
    res.render('pageConsulta', { usuarios: results });
  });
};

exports.updateUser = (req, res) => {
  const { nomeCompleto, email, telefone, endereco } = req.body;
  const userId = req.params.idtb_identificacao;
  
  // Construir dinamicamente a consulta SQL
  let query = 'UPDATE tb_identificacao SET ';
  const fields = [];
  const values = [];

  if (nomeCompleto) {
    fields.push('nome_completo = ?');
    values.push(nomeCompleto);
  }
  if (email) {
    fields.push('email = ?');
    values.push(email);
  }
  if (telefone) {
    fields.push('telefone = ?');
    values.push(telefone);
  }
  if (endereco) {
    fields.push('endereco_residencial = ?');
    values.push(endereco);
  }

  // Adicionar WHERE clause
  query += fields.join(', ') + ' WHERE idtb_identificacao = ?';
  values.push(userId);

  // Executar a consulta
  connection.query(query, values, (error, results) => {
    if (error) throw error;
    res.redirect('/api/read'); 
  });
};

exports.deleteUser = (req, res) => {
  const query = 'DELETE FROM tb_identificacao WHERE idtb_identificacao =?';
  connection.query(query, [req.params.idtb_identificacao], (error, results) => {
      if (error) throw error;
      res.status(204).send('Usuário excluído com sucesso!');
      res.render('pageConsulta', { usuarios: results });
  });
};