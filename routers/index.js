//llamado de express para el servidor
const express = require('express');
//importacion de la ruta para bd informaciones de anexos
const clientesRouter = require();

function routerAPI(app){
    const router = express.Router();
    app.use('/api/v1',router);
    router.use('/clientes',clientesRouter);
}

module.exports = routerAPI;