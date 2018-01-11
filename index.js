const express = require('express')
const mongoose = require('mongoose')

const hbs = require('express-handlebars')
const parser = require('body-parser')
// const Restaurants = require('./controllers/restaurants')
const Restaurants = require('./db/schema')
//this library allows us to do push and put requests
const methodOverride = require('method-override')
const path = require('path')
const controllers = require('./controllers/restaurants')

const app = express()

app.set('port', process.env.PORT || 5000)

app.use('/assets', express.static('public'))

app.set('view engine', 'hbs')
app.engine('.hbs', hbs({
  extname: '.hbs',
  partialsDir: './views/',
  layoutsDir: './views/',
  defaultLayout: 'layout'
}))

//app.use(express.static(path.join(__dirname, '/public')))


app.use(methodOverride('_method'))
app.use(parser.json()) //handles json post requests
app.use(parser.urlencoded({ extended: true })) // handles form submissions



app.get('/', (request, response) => {
    response.render('restaurants-index')
})

app.use('/restaurants', controllers)

app.listen(app.get('port'), () => {
  console.log('Listening on 5000')
})

