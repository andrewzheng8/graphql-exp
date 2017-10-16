var express = require('express')
var graphqlHTTP = require('express-graphql')
var root = require('./resolvers')
var schema = require('./graphql/schema')
const mongoose = require('mongoose')

// DB Setup
mongoose.connect('mongodb://localhost/graphql-exp')

var app = express()
app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true
}))
app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'))
