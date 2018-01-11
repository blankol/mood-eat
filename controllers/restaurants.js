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

// get main page
// router.get('/', (req, res) => {
//    Restaurant.find({})
//    .then((restaurant) => {
//        // show all
//        res.render('restaurants-index', {
//            restaurants: restaurant
//        })
//    })
//    .catch((err) => {
//        console.log(err)
//    })
// })
 

 // get one by name:
 router.get('/:mood', (req, res) => {
     Restaurant.findOne({mood: req.params.mood})
     .then((restaurant) => {
         res.render('restaurants-show', {
             restaurant: restaurant
           })
       })
       .catch((err) => {
           console.log(err)
       })
   })
   
   // update restaurants:
   router.put('/:mood', (req, res) => {
       Restaurant.findOneAndUpdate({mood: req.params.mood}, req.body.restaurant, {new: true})
       .then(restaurant => {
           res.redirect(`/restaurants/${req.params.mood}`)
       })
       .catch((err) => {
           console.log(err)
       })
   })

   // Post new restaurants:
   router.post('/', (req, res) => {
       console.log('pre-post')
       console.log(req.body.restaurant)
       Restaurant.create(req.body.restaurant)
       .then((restaurant) => {
          res.redirect(`/restaurants/${restaurant.mood}`)
       })
       .catch((err) => {
           console.log(err)
       })
   })

     
 
   // delete res ** 
   router.delete('/:mood', (req, res) => {
       Restaurant.findOneAndRemove({mood: req.params.mood})
       .then(() => {
           res.redirect(`/restaurants/${req.params.mood}`)
       })
   })
   
   
   module.exports = router
