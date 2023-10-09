
import { items } from "../data/data.js"
import { initArtistItemsPage } from "./pages/artistItemPage.js"
import { initArtistHomePage } from "./pages/artistPage.js"
import { initAuctionPage } from "./pages/auctionPage.js"
import { initLandingPage, joinAsArtist} from "./pages/landingPage.js"
import { initVisitorHomePage } from "./pages/visitorHomePage.js"
import { initVisitorListingPage } from "./pages/visitorListingPage.js"



export const landingPage=document.querySelector('#landingPage')
export const visitorHomePage=document.querySelector('#visitorHomePage')
export const visitorListingPage=document.querySelector('#visitorListingPage')
export const artistHomePage=document.querySelector('#artistHomePage')
export const artistItemsPage=document.querySelector('#artistItemPage')
export const header=document.querySelector('header')
export const logoContainer=document.querySelector('.logo')
export const logoImg=document.querySelector('.logo-img')
export const menuBtn=document.querySelector('.menu-btn')
export const auctionBtn=document.querySelector('.auction-btn')
export let artistDropdown=document.querySelector('#artist-select')



    let artistName;

   function handleRoute(e) {
     e.preventDefault()

      let hash=location.hash===''? '#landingPage' : location.hash


      const allPages=document.querySelectorAll('.page')
      allPages.forEach(page => page.style.display='none')
      
      document.querySelector(hash).style.display='block'
  

       switch(hash) {
      
       case'#landingPage' :
   
       const joinAsArtistDiv=document.querySelector('.wrap-up')
       const joinAsVisitorDiv=document.querySelector('.wrap-down')
    
       joinAsArtistDiv.addEventListener('click', () => {
        
        localStorage.setItem('currentArtist', artistDropdown.value)
        artistName=localStorage.getItem('currentArtist')
        joinAsArtist(artistName, artistDropdown)
      
       })
      
       joinAsVisitorDiv.addEventListener('click', () => {
        location.hash='#visitorHomePage'

       })
       
       artistDropdown.addEventListener('click', (e) => {
           e.stopPropagation()
       })

        initLandingPage()
          break;


        case '#visitorHomePage' :
          initVisitorHomePage()
          localStorage.setItem('userType','visitor')
          break;

        case '#visitorListingPage' :
          initVisitorListingPage()
          localStorage.setItem('userType','visitor')
          break;
          
        case '#artists' :
          initArtistHomePage()
          localStorage.setItem('userType','artist')
          break;

        case "#artists-items" :
         initArtistItemsPage()
         localStorage.setItem('userType','artist')
         break;

         case '#auction' :
         initAuctionPage()
         break;

       }

       


   }


   window.addEventListener('hashchange', handleRoute)
   window.addEventListener('load', handleRoute)



   
   






















