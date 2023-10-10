/** @format */

console.log("Acessou routes");
const express = require("express");
const pessoaController = require("./controllers/pessoaController");

const router = express.Router();

router.get("/pessoas", pessoaController.buscarTodos);
router.get("/pessoas/:nome", pessoaController.buscarPessoa);
router.post("/pessoas", pessoaController.cadastrarPessoa);
router.put("/pessoas/:id", pessoaController.alterarPessoa);
router.delete("/pessoas/:nome", pessoaController.deletarPessoa);

module.exports = router;
