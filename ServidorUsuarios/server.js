const express = require('express');

const server = express();

const PORT = 8082;

server.listen(PORT, ()=>{
    console.log(`Esse é o servidor de usuários, rodando na porta ${PORT}`)
})