const server = require('./src/app');
const { PORT } = require('./src/config');
require('./db');

server.listen(PORT, _ => {
    console.log(`Server Conected at ${PORT}`)
});