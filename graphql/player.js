const mongoose = require('mongoose')
var { GraphQLObjectType, GraphQLString } = require('graphql')

const PlayerType = new GraphQLObjectType({
  name: 'Player',
  description: 'A player',
  fields: () => ({
    id: {
      type: GraphQLString,
      resolve: player => player._id
    },
    first_name: {
      type: GraphQLString,
      resolve: player => player.first_name// Fetch the index of people from the REST API,
    },
    last_name: {
      type: GraphQLString,
      resolve: player => player.last_name// Fetch the index of people from the REST API,
    }
  })
})

module.exports = PlayerType
