
const mongoose = require('mongoose')
const express  = require('express')
const Restaurant = require('../db/schema')


const router = express.Router()

router.get('/', (req, res) => {
  Restaurant.find({})
  .then((restaurant) => {
    console.log(restaurant)
    res.render('restaurants-index', {
      restaurants: restaurant
    })
  })
})


 // get one by name:
 router.get('/:mood', (req, res) => {
     Restaurant.find({mood: req.params.mood})
     .then((restaurants) => {
         res.render('restaurants-show', {
             restaurants: restaurants
           })
       })
       .catch((err) => {
           console.log(err)
       })
   })
   
   // update restaurants:
   router.put('/:id', (req, res) => {
       Restaurant.findOneAndUpdate({_id: req.params.id}, req.body.restaurant, {new: true})
       .then(restaurant => {
           res.redirect(`/restaurants/${restaurant.mood}`)
       })
       .catch((err) => {
           console.log(err)
       })
   })

   // Post new restaurants:
   router.post('/', (req, res) => {
       console.log('create restaurant')
       Restaurant.create(req.body.restaurant)
       .then((restaurant) => {
           console.log(restaurant)
          res.redirect(`/restaurants/${restaurant.mood}`)
       })
       .catch((err) => {
           console.log(err)
       })
   })

     
 
   // delete res ** 
   router.delete('/:id', (req, res) => {
       Restaurant.remove({_id: req.params.id})
       .then(() => {
           res.redirect(`/`)
       })
   })
   
   
   module.exports = router
