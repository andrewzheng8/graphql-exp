var { GraphQLObjectType } = require('graphql')
var PlayerMongo = require('../models/player')
var PlayerType = require('./player')
var PlayerInputType = require('./playerInput')

const MutationType = new GraphQLObjectType({
  name: 'Mutation',
  description: 'The root of all... mutations',
  fields: {
    createPlayer: {
      type: PlayerType,
      args: {
        player: {type: PlayerInputType}
      },
      resolve (source, args) {
        // return args.player
        newPlayer = new PlayerMongo({
          first_name: args.player.first_name,
          last_name: args.player.last_name
        })
        return newPlayer.save(function (err) {
          if (err) { return next(err) }
          return newPlayer
        })
      }
    }
  }
})

module.exports = MutationType
