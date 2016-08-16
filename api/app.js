import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import graphqlHTTP from 'express-graphql';
import mongoose from 'mongoose';

import Schema from './schema';

const PORT = '8080';
const graphQLServer = express();

mongoose.connect('mongodb://localhost/graphql');

graphQLServer.use(bodyParser.json());

graphQLServer.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

graphQLServer.options('*', cors());

graphQLServer.use('/', graphqlHTTP({
    pretty: true,
    schema: Schema
}));

graphQLServer.listen(PORT, () => {
    console.log(`Server listen on port ${PORT}`);
});
