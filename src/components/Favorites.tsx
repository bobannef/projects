import React, { useContext } from 'react'
import { RestaurantContext } from '../context/RestaurantContext'
import { RestaurantCard } from './RestaurantCard'

export const Favorites = () => {

const {favRestaurants}=useContext(RestaurantContext)
    
  return (

   <div className='container'>
       <div className='row'>
          <div className='col-12'>
             <h1>your favorite restaurants</h1>
             {favRestaurants.map((favRest) => {
              return (
             <RestaurantCard key={favRest.id} {...favRest}/>
             )
          })}
          </div>
    
      </div>
    </div>
    
  )
}
