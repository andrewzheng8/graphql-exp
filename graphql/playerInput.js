var { GraphQLInputObjectType, GraphQLString, GraphQLNonNull } = require('graphql')

const PlayerInputType = new GraphQLInputObjectType({
  name: 'PlayerInput',
  fields: {
    first_name: {
      type: new GraphQLNonNull(GraphQLString)
    },
    last_name: {
      type: new GraphQLNonNull(GraphQLString)
    }
  }
})

module.exports = PlayerInputType
