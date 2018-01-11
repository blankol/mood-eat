const mongoose = require('../controllers/restaurants')
const Restaurant = require('./schema');

const seedData = require('./seeds.json')

// remove clears out restaurant collection
Restaurant.remove({})
    .then(() => {
// create collection using JSON contained in seed file. note: skips schema validation
        return Restaurant.collection.insert(seedData)
    })
    .then(() => {
        process.exit()
    })

