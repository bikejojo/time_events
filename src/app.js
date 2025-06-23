const express = require('express');
const app = express();
const eventRoutes = require('./routes/events')

app.use(express.json())
app.use('/api/events',eventRoutes)

module.exports=app;