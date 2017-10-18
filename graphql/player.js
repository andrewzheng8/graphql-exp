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
      resolve: player => player.first_name
    },
    last_name: {
      type: GraphQLString,
      resolve: player => player.last_name
    }
  })
})

module.exports = PlayerType
