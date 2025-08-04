const express = require('express');

const server = express();

const PORT = 8081;

server.listen(PORT, ()=>{
    console.log(`Esse é o servidor de pedidos, está rodando na porta ${PORT}`);
})