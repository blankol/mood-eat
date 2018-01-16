var mongoose = require('./connection')

var restaurantSchema = new mongoose.Schema ({
    name: String,
    address: {
    street: String, 
    },
    url: String,
    mood: String
})


const Restaurant = mongoose.model('Restaurant', restaurantSchema)

module.exports = Restaurant
