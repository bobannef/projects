import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import FooterList from './FooterList';


export const Footer = () => {

   const styles:Record<string, React.CSSProperties> = {
     
    footerContainer: {
      padding:'40px 0',
      backgroundColor:'whitesmoke'
    },
   socialsContainer: {
     display:'flex',
     justifyContent: 'flex-start',
     listStyle:'none',
     marginTop:'20px',
     paddingLeft:'0'
  
   },
   socialLists : {
    marginLeft:'10px'
   },
   socialLinks : {
     border:'1px solid gold',
     backgroundColor:'gold',
     padding:'8px 14px',
     color:'white',
     fontSize:'25px'
   },
   heading: {
    marginBottom: '5px',
    fontWeight:'bold'
    },

    listsContainer : {
      listStyle:'none',
      marginTop:'20px',
      textAlign:'left',
      paddingLeft:'0'
    },


   }

   const EventInfo= [
      'Enter Now',
      'Event Info',
      'Course Maps',
      'Race Pack',
      'Results',
      'FAQs',
      'AM I Registered?'
    ]
   
   const Registration = [
     'Volunteers',
     'Gallery',
     'Press',
     'Results',
     'Privacy Policy',
     'Servise Plus',
     'Contacts'
   
   ]
    
   const Schedule = [
   'Gallery',
   'About',
   'Videos',
   'Results',
   'FAQs',
   'Results',
   'Volunteers'
   
   ]
   
  return (

    <div className='footer container-fluid'>
         <div className='row lists' style={styles.footerContainer}>
             <div className='container-fluid'>
                    <div className='row'>
                      <div className='col-3'>
                           <h3 style={styles.heading}>Social Share</h3>
                             <ul className='socials' style={styles.socialsContainer}>
                                <li style={styles.socialLists}>
                                   <a href="https://www.facebook.com" target="_blank" style={styles.socialLinks}>
                                     <FontAwesomeIcon icon={faFacebook}/>
                                   </a>
                                </li>
                                <li style={styles.socialLists}>
                                   <a href="https://www.linkedin.com" target="_blank" style={styles.socialLinks}>
                                     <FontAwesomeIcon icon={faLinkedin}/>
                                   </a>
                                </li>
                                <li  style={styles.socialLists}>
                                   <a href="https://www.twitter.com" target="_blank" style={styles.socialLinks}>
                                     <FontAwesomeIcon icon={faTwitter}/>
                                   </a>
                                </li>
                                <li  style={styles.socialLists}>
                                   <a href="https://www.instagram.com" target="_blank" style={styles.socialLinks}>
                                     <FontAwesomeIcon icon={faInstagram}/>
                                   </a>
                                </li>
                             </ul>
                        </div>

                        <div className='col-3'>
                           <h3 style={styles.heading}>Event Info</h3>
                             <ul style={styles.listsContainer}>
                               {EventInfo.map((item, idx) => {
                                 return (
                                 <FooterList key={idx} text={item}/>
                                 )
                               })}
                           
                             </ul>
                        </div>

                        <div className='col-3'>
                           <h3 style={styles.heading}>Registration</h3>
                             <ul style={styles.listsContainer}>
                                {Registration.map((item, idx) => {
                                 return (
                                  <FooterList key={idx} text={item}/>
                                  )
                                })}
                             </ul>
                        </div>

                        <div className='col-3'>
                           <h3 style={styles.heading}>Schedule</h3>
                             <ul className='socials' style={styles.listsContainer}>
                                {Schedule.map((item, idx) => {
                                   return (
                                     <FooterList key={idx} text={item}/>
                                   )
                                })} 
                             </ul>
                        </div>
                   </div>
             </div>
         </div>
    </div>
    
  )
}
