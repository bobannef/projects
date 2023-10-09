import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../img/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons';


export const Navbar = () => {

  const styles:Record<string, React.CSSProperties> = {
    logo : {
      width:'80px',
      height:'50px',
      marginLeft:'20px'
    },
    menu: {
    borderBottom:'1px solid #ddd',
    padding:'15px 0'
    },
    navLink: {
      color:'grey',
      textTransform:'uppercase',
      padding:'0', 
      margin:'10px',
      fontWeight:'bold',
      transition: 'all .3s ease-in-out'
    },
    icons: {
      margin:'10px',
      color:'grey',
      fontSize:'20px'
    }
  }

  return (
  <nav className="navbar navbar-expand-lg navbar-light bg-light" style={styles.menu}>
    <div className='container-fluid'>
         <Link to='/' className="navbar-brand">
          <img className='logo' src={logo} style={styles.logo} alt="logo" />
         </Link>
         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav"   aria-expanded="false" aria-label="Toggle navigation">
           <span className="navbar-toggler-icon"></span>
        </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav m-auto">
           <li className="nav-item ">
             <NavLink to='/' className="nav-link" style={styles.navLink}>home</NavLink>
           </li>
           <li className="nav-item">
             <NavLink to='/' className="nav-link" style={styles.navLink}>bikes</NavLink>
           </li>
           <li className="nav-item">
              <NavLink to='/' className="nav-link" style={styles.navLink}>gear</NavLink>
           </li>
           <li className="nav-item">
             <NavLink to='/' className="nav-link" style={styles.navLink}>parts</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/' className="nav-link" style={styles.navLink}>tires</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/' className="nav-link" style={styles.navLink}>service-info</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/' className="nav-link" style={styles.navLink}>catalogues</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/' className="nav-link" style={styles.navLink}>contact</NavLink>
            </li>
        </ul>
        <ul className='navbar-nav m-auto'>
          <li>
            <FontAwesomeIcon icon={faMagnifyingGlass} style={styles.icons}/>
          </li>
          <li>
            <FontAwesomeIcon icon={faLock} style={styles.icons} />
          </li>
        </ul>
     </div>
    </div>
  </nav>
  )
}


