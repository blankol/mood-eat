// const mongoose = require('../controllers/restaurants')   // this isn't used in this file
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
