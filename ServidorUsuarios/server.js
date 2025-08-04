const express = require('express');

const serverUsuarios = express();

const PORT = 8082;

serverUsuarios.listen(PORT, ()=>{
    console.log(`Esse é o servidor de usuários`)
})