
import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import { RestaurantContext } from '../context/RestaurantContext'
import { ReviewType } from '../interfaces/Types'




export const RestaurantDetail = () => {

  const {id} = useParams()
  const {restaurants}=useContext(RestaurantContext)
  const {handleReview, calculateAverageRating}= useContext(RestaurantContext)
   
  const [newReview, setNewReview]=useState<ReviewType>({
    id:Date.now(),
    author:'',
    comment:'',
    stars:0

  })
  const foundCard=restaurants.find(rest => rest.id===id)

  const handleReviewSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
   
    handleReview(id!,newReview)

    setNewReview({
      id:0,
      author:'',
      comment:'',
      stars:1
    })

  }


  if(!foundCard) {
    <div>error page...</div>
  }

  return (
    <>
    <div className='container'>
       <div className='row'>
           <div className='col'>
               <h1 className='mb-4'>{foundCard?.businessname}</h1>
           </div>
       </div>
       <div>
         <img className='img w-100 rounded-top' src={foundCard?.image} alt={foundCard?.businessname} />
       </div>
       
       <div className='res-content'>
          <div className='row'>
              <div className='col-12'>
                 <p>
                    rating - {foundCard?.reviewsList ? `${calculateAverageRating(foundCard.reviewsList)}` : 'No reviews yet'},
                  
                 </p>
             </div>
          </div>
          <div className='row'>
             <div className='col-12'>
               <p>
                 {foundCard?.reviewsList ? <small>based on {foundCard?.reviewsList.length} reviews</small> : ''}
               </p>
             </div>
          </div>
            <p>{foundCard?.phone}</p>
            <p>{foundCard?.email}</p>
            <p>{foundCard?.address}</p>
            <p>
              {foundCard?.parkinglot ? 'We have a parking lot waiting for you' : 'No parking'}
            </p>
        </div>

       <div>
              <h1>Reviews</h1>
              {foundCard?.reviewsList?.map((review) => (
               <div key={review.id} className='res-content mb-3'>
                 <p><b>Author:</b> {review.author}</p>
                 <p><b>Message:</b> {review.comment}</p>
                 <p><b>Stars:</b> {review.stars}</p>
               </div>
             ))}
        </div>

    </div>

        

     <div className='container'>
         <h1>review form</h1>
        <form onSubmit={handleReviewSubmit}>

           <label htmlFor="name">Name</label>
           <input type="text" 
           className='form-control'
           value={newReview.author}
           onChange={(event) => {
            setNewReview((prevState) => ({
              ...prevState,
              author:event.target.value
           }))
           }}
           />
           
           <label htmlFor="comment">Comment</label>
           <input type="text" 
           className='form-control'
           value={newReview.comment}
           onChange={(event) => {
            setNewReview((prevState) => ({
              ...prevState,
              comment:event.target.value

             }))
           }}
           />

           <label htmlFor="stars">Stars</label>
           <input type="range" 
           className='w-100 mb-4'
           value={newReview.stars}
           min='1'
           max='5'
           onChange={(event) => {
            setNewReview((prevState) => ({
              ...prevState,
              stars:parseInt(event.target.value)
              
             }))
           }}
           />
           <button type='submit' className='btn btn-success form-control'>Leave a review</button>

        </form>

     </div>
    </>
  )
}
