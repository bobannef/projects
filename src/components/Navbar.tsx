import React from 'react'
import {Link} from 'react-router-dom'
export const Navbar = () => {


   return (

    <div className='container d-flex justify-content-between p-4'>

        <Link className='logo' to='/'>restaurants</Link>
        <Link to='/favorites'>
            <i className='fas fa-heart fa-2x text-danger'></i>
        </Link>
       
    </div>
  )
}
