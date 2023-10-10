/** @format */

console.log("acessou pessoaService");
const db = require("../db");

module.exports = {
  buscarTodos: () => {
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM cliente", (error, results) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(results);
      });
    });
  },

  buscarPessoa: (nome) => {
    return new Promise((resolve, reject) => {
      db.query(
        "SELECT * FROM cliente WHERE s_nome_cliente = ?",
        [nome],
        (error, results) => {
          if (error) {
            reject(error);
            return;
          }
          resolve(results);
        }
      );
    });
  },

  cadastrarPessoa: (id, nome, tipocliente) => {
    console.log("passou cadastrarPessoa");
    return new Promise((resolve, reject) => {
      db.query(
        "insert into cliente (s_nome_cliente, i_tipo_cliente) values (?,?)",
        [id, nome, tipocliente],
        (error, results) => {
          if (error) {
            console.log("erro no service");
            reject(error);
            return;
          }
          resolve(results);
        }
      );
    });
  },

  atualizarPessoa: (id, nome, tipocliente) => {
    return new Promise((resolve, reject) => {
      db.query(
        "update cliente set s_nome_cliente=?, i_tipo_cliente=? where i_cliente_cliente = ?",
        [nome, tipocliente, id],
        (error, results) => {
          console.log(error);

          if (error) {
            reject(error);
            return;
          }

          console.log("é dbquery2");
          resolve(results);
        }
      );
    });
  },

  deletarPessoa: (nome) => {
    return new Promise((resolve, reject) => {
      db.query(
        "delete from cliente where s_nome_cliente=?",
        [nome],
        (error, results) => {
          if (error) {
            reject(error);
            return;
          }

          resolve(results);
        }
      );
    });
  },
};
