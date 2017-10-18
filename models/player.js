const mongoose = require('mongoose')
const Schema = mongoose.Schema

const playerSchema = new Schema({
  first_name: { type: String},
  last_name: { type: String}
})

// Create the model class
const ModelClass = mongoose.model('player', playerSchema)

// Export the model
module.exports = ModelClass
