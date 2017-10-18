var PlayerType = require('./player')
var PlayerMongo = require('../models/player')
var { GraphQLObjectType, GraphQLString, GraphQLList } = require('graphql')

const QueryType = new GraphQLObjectType({
  name: 'Query',
  description: 'The root of all... queries',
  fields: () => ({
    helloRoot: {
      type: GraphQLString,
      resolve: root => 'Root'
    },
    allPlayers: {
      type: new GraphQLList(PlayerType),
      resolve: root => {
        return PlayerMongo.find({})
      }
    }
  })
})

module.exports = QueryType
