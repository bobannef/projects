import React, { useContext, useState } from 'react'
import { RestaurantType } from '../interfaces/Types'
import {Link} from 'react-router-dom'
import { RestaurantContext } from '../context/RestaurantContext'



export const RestaurantCard  = (restaurant:RestaurantType) => {

  const {handleReview, calculateAverageRating,favRestaurants, handleFavRestaurant}= useContext(RestaurantContext)
  
  const isFavorite=favRestaurants.some(rest => rest.id===restaurant.id)
   
  return (
     
    <Link to={`/details/${restaurant.id}`} className='col-3 res'>

       <div className='position-relative picture'>
          <img className='img w-100 rounded' src={restaurant.image} alt={restaurant.businessname} />
           <i className={`icon fa-heart ${isFavorite? 'fas' : 'far'}`}
            onClick={(event) => {
              event.preventDefault();
              handleFavRestaurant(restaurant.id)
            }}
           >
           </i>
       </div>

       <div className='res-content'>
         <p className='text-dark font-weight-bold'>{restaurant.businessname}</p>
         <p className='text-danger font-weight-bold'>{restaurant.restauranttype}</p>
         <p className='text-dark'>Rating - {restaurant.reviewsList ? `${calculateAverageRating(restaurant.reviewsList)},
              based on ${restaurant.reviewsList.length} reviews` : 'No reviews yet'}</p>
       </div>
    </Link>
  )
}