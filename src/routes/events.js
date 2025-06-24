const express = require('express');
const router = express.Router();

const Event = require('../models/Evento.js');
const EventManager = require('../services/EventManager.js')

const manager = new EventManager();

module.exports = router;