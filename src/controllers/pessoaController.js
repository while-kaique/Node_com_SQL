/** @format */

console.log("acessou pessoaController");
const pessoaService = require("../services/pessoaService");

module.exports = {
  buscarTodos: async (req, res) => {
    console.log("eae");
    let json = { error: "", result: [] };

    let pessoas = await pessoaService.buscarTodos();

    for (let pessoa in pessoas) {
      json.result.push({
        id: pessoas[pessoa].i_cliente_cliente,
        nome: pessoas[pessoa].s_nome_cliente,
        tipocliente: pessoas[pessoa].i_tipo_cliente,
      });
    }

    res.json(json);
  },

  buscarPessoa: async (req, res) => {
    let json = { erro: "", pessoa: "1" };
    let nome = req.params.nome;

    let pessoaNome = await pessoaService.buscarPessoa(nome);

    if (pessoaNome) {
      json.pessoa = pessoaNome;
    }

    res.json(json);
  },

  cadastrarPessoa: async (req, res) => {
    let json = { erro: "", resultado: {} };

    const nome = req.body.nome;
    const tipocliente = req.body.tipocliente;

    const cadastro = await pessoaService.cadastrarPessoa(nome, tipocliente);
    console.log("passou cadastro");

    if (!cadastro) {
      console.log("erro no service");
      json.erro = "deu erro aí, amigo";
    } else {
      console.log("pasosu else");
      json.resultado = [cadastro];
    }
    res.json(json);
  },

  alterarPessoa: async (req, res) => {
    console.log("alterar");
    let json = { erro: "", pessoa: {} };

    const id = req.params.id;
    const nome = req.body.nome;
    const tipocliente = req.body.tipocliente;
    console.log(nome);
    console.log(tipocliente);
    if (id) {
      if (nome && tipocliente) {
        console.log("é pessoa");
        var pessoa = await pessoaService.atualizarPessoa(id, nome, tipocliente);
      }
    }

    if (!pessoa) {
      console.log("deu erro aí mano");
      json.erro = "nenhum dado preenchido";
      return;
    }

    json.pessoa = { id, nome, tipocliente };

    res.json(json);
  },

  deletarPessoa: async (req, res) => {
    const json = { erro: "", pessoa: {} };

    const nome = req.params.nome;

    const deletada = await pessoaService.deletarPessoa(nome);

    if (!deletada) {
      console.log("deu erro aí mano");
      json.erro = "Algo deu errado";
      return;
    }

    json.pessoa = [`Pessoa deletada com o nome: ${nome}`];
  },
};
