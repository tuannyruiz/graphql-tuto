import express from 'express';
const server = express();

server.get('/', (req, res) => {
    res.send('<html> <head> <body> <h1> teste </h1> </body> </head> </html>');
});

server.listen(4000, () => {
    console.log('Listening on port 4000');
});