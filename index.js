const express = require('express');
const bodyParser = require('body-parser');
const graphqlHttp = require('express-graphql');
const { buildSchema } = require('graphql');

const app = express();
app.use(bodyParser.json())

app.listen(3001, () => {
    console.log(`Server started on port: 3001`);
});