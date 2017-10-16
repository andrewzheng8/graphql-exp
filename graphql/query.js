const mongoose = require('mongoose')
var PlayerType = require('./player')
var PlayerMongo = require('../models/player')
var { GraphQLObjectType, GraphQLString, GraphQLList } = require('graphql')

const QueryType = new GraphQLObjectType({
  name: 'Query',
  description: 'The root of all... queries',
  fields: () => ({
    helloRoot: {
      type: GraphQLString,
      resolve: root => 'Root'// Fetch the index of people from the REST API,
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
