import bodyParser from 'body-parser';
import express from 'express';
import graphqlHTTP from 'express-graphql';
import mongoose from 'mongoose';

import Schema from './schema';

const PORT = '8080';
const graphQLServer = express();

mongoose.connect('mongodb://localhost/graphql');

graphQLServer.use(bodyParser.json());

graphQLServer.use('/', graphqlHTTP({
    pretty: true,
    schema: Schema
}));

graphQLServer.listen(PORT, () => {
    console.log(`Server listen on port ${PORT}`);
});
