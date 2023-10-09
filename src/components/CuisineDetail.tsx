import React, { useContext } from 'react'
import { RestaurantContext } from '../context/RestaurantContext'
import { useParams } from 'react-router-dom'
import { RestaurantCard } from './RestaurantCard'


export const CuisineDetail = () => {
  
  const {restaurants,filtered}=useContext(RestaurantContext)
  const{type}=useParams()
   
  const foundCard=restaurants.filter(rest => rest.restauranttype===type)

  return (

    <div className='container'>
        <div className='row'>
           <div className='col'>
              <h1>{type} restaurants</h1>
           </div>
          
        </div>
        <div className='row'>
          {foundCard.map((restaurant) => {
            return (
              <div key={restaurant.id} className='col-3'>
                <RestaurantCard {...restaurant} />
              </div>
            )
          })}
        </div>
    </div>
  )
}
