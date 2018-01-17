 const mongoose = require('mongoose')
 // const seedData = require('./seeds.json')  // this isn't used in this file
 const db = require('../config/database')
 mongoose.Promise = Promise

 console.log(db.mongoURI)
 mongoose.connect(db.mongoURI, { useMongoClient: true })

 module.exports = mongoose
