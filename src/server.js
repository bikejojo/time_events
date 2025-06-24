const app = require('./app');

const PORT = process.env.PORT || 3001
const URL = process.env.URL || 'localhost'

app.listen(PORT, () => {
    console.log(`Servidor corre en el puerto: ${URL}:${PORT}` )
});