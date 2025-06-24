const express = require('express');
const router = express.Router();

const Event = requiere('../models/');
const EventManager = requiere('../services/')

const manager = new EventManager();

module.exports = router;