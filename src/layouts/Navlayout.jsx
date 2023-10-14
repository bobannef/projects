
import React from 'react'

import {Link, Outlet, useNavigation} from 'react-router-dom'

export const Navlayout = () => {

   const {state} = useNavigation()

   const isLoading=state==='loading'

  return (
    <>
    <nav className="top-nav">
    <div className="nav-text-large">My App</div>
    <ul className="nav-list">
      <li>
         <Link to='/posts'>Posts</Link>

      </li>
      <li>
         <Link to='/users'>Users</Link>

      </li>
      <li>
         <Link to='/todos'>Todos</Link>

      </li>
    </ul>
</nav>
   {isLoading && <div className="loading-spinner"></div>}
    <div className={`container ${isLoading ? 'loading' : ''}`}>
      <Outlet/>
     </div>
  </>
  )
}
