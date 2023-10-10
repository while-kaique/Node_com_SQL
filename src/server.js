require("dotenv").config({ path: "teste.env" }); //chama a config do dotenv, e determina que a configuração deve ser sobre o arquivo teste.env
const cors = require("cors"); // conecta com uma API
const bodyParser = require("body-parser"); // analisa (parser) {ou converte} o tipo de conteúdo recebido pelo body e trata ele
const express = require("express");

const env = process.env


const app = express();
app.use(cors('*'));
app.use(bodyParser.urlencoded({ extended: false }));   
const routes = require('./routes')
app.use('/api', routes)

app.get('/', (req, res)=>{res.send("pagina inicial")})

app.listen(env.PORT, ()=>{
    console.log('servidor rodando')
})