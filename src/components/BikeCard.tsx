import React from 'react'
import { ProductType } from '../Types/Types'


export const BikeCard = (product:ProductType) => {
  
  return (
   <div className='col-4'>
     <div className='card p-0'>
        <img src={`/src/img/${product.image}.png`} alt="" />
       <div className='card-text'>
         <h2 className='brand'>{product.name}</h2>
         <p className='price'>{`${product.price} $`}</p>
      </div>
     </div>
  </div> 
  )
}
