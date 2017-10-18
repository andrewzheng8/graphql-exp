var {GraphQLSchema } = require('graphql')
var QueryType = require('./query')
var MutationType = require('./mutation')

var schema = new GraphQLSchema({
  query: QueryType,
  mutation: MutationType
})

module.exports = schema
