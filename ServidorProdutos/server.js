const express = require('express');

const server = express();

const PORT = 8080;

server.listen(PORT, ()=>{
    console.log(`Esse é o servidor de produtos, rodando na porta ${PORT}`);
})