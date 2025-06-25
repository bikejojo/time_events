const express = require('express');
const router = express.Router();

const eventController = require('../controllers/eventController')

router.post('/registrar', eventController.registroEvent)

router.post('/actualizar', eventController.actualizarEvent)

router.get('/listar',eventController.listarEvent)

router.post('/eliminar' , eventController.eliminarEvent)

router.get('/activos' , eventController.actives);

module.exports = router;