import express from 'express';
import {graphqlExpress, graphiqlExpress} from 'apollo-server-express';
const server = express();



server.listen(4000, () => {
    console.log('Listening on port 4000');
});