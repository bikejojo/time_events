const app = require('./app');
const { events } = require('./data/storage');

const PORT = process.env.PORT || 3001
const URL = process.env.URL || 'localhost'

app.listen(PORT, () => {
    console.log(`Servidor corre en el puerto: ${URL}:${PORT}` )
    //console.log(events)
});