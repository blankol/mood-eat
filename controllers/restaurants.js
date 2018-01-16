
const mongoose = require('mongoose')
const express  = require('express')
const Restaurant = require('../db/schema')

// crud references from GA 'when presidents' lab
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
             restaurants: restaurants,
             // access mood from views
             mood: req.params.mood
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
   router.post('/:mood', (req, res) => {
       console.log('create restaurant')
       // updating body before its saved to db
       req.body.restaurant.mood = req.params.mood
       Restaurant.create(req.body.restaurant)
       .then((restaurant) => {
           console.log(restaurant)
          res.redirect(`/restaurants/${restaurant.mood}`)
       })
       .catch((err) => {
           console.log(err)
       })
   })

     
 
   // delete restaurants
   router.delete('/:id', (req, res) => {
       let mood
        Restaurant.find({_id: req.params.id})
        .then( restaurant => {
            console.log('the mood=>'+ restaurant.name )
            console.log('restaurant mood' + restaurant['_id'])
            console.log('restaurant mood' + restaurant)
            mood = restaurant.mood
            console.log('the mood=>'+ restaurant.mood )
            Restaurant.remove({_id: req.params.id})
       })
       .then( () => {
            res.redirect(`/restaurants/${mood}`)
    })
   })
   
   
   module.exports = router
