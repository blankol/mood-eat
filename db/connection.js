 const mongoose = require('mongoose')
 const seedData = require('./seeds.json')
 const db = require('../config/database')
 mongoose.Promise = Promise

 mongoose.connect(db.mongoURI, { useMongoClient: true })

 module.exports = mongoose
