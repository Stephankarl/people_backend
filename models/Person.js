const mongoose = require('mongoose')
const { Schema, model }= mongoose

const PersonSchema = new Schema({
    name: String,
    age: Number
})

module.exports = new model('Person', PersonSchema)