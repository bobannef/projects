import React, { useContext } from 'react'
import { RestaurantContext } from '../context/RestaurantContext'
import { RestaurantCard } from './RestaurantCard'


export const AllRestaurants = () => {

    const {restaurants}= useContext(RestaurantContext)

  return (

    <div className='container'>
        <div className='row'>
            <div className='col'>
                <h1 className='mb-4'>all restaurants</h1>
            </div>

        </div>

        <div className='row'>
          {restaurants.map((restaurant) => {
             return (
                <RestaurantCard key={restaurant.id} {...restaurant}/>
             )
          })}
        </div>


    </div>
  )
}