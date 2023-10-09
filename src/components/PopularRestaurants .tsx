import React, { useContext } from 'react'
import { RestaurantContext } from '../context/RestaurantContext'
import { RestaurantType } from '../interfaces/Types'
import { RestaurantCard } from './RestaurantCard'


export const PopularRestaurants  = () => {
  
const {restaurants}= useContext(RestaurantContext)
  
const sortedRestaurants=restaurants.slice().sort((a:RestaurantType, b: RestaurantType) : number => {

   if(a.reviewsList.length > b.reviewsList.length) return -1
   if(a.reviewsList.length < b.reviewsList.length) return 1

   return 0
})

   
const popularRestaurants=sortedRestaurants.slice(0,10)

  return (

   
    <div className='container'>
    <div className='row'>
      <div className='col'>
        <h1>Our most popular restaurants</h1>
      </div>
    </div>
    <div className='row'>
      {popularRestaurants.map((restaurant) => (
        <div className='col-2' key={restaurant.id}>
          <RestaurantCard {...restaurant} />
        </div>
      ))}
    </div>
  </div>
      )
  
}
