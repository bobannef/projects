import { itemTypes, items } from "../../data/data.js";
import { auctionBtn, header,logoContainer, logoImg} from "../main.js";



export function initVisitorListingPage () {

  let data;

const valueFromLs=localStorage.getItem('itemsData')
if(valueFromLs) {
data=JSON.parse(valueFromLs)
} else {
localStorage.setItem('itemsData', JSON.stringify(items))
data=JSON.parse(valueFromLs)
}

 
  const filterByTitle=document.querySelector('#filterByTitle')
  const filterByArtist=document.querySelector('#filterByArtist')
  const filterByMinPrice=document.querySelector('#filterByminPrice')
  const filterByMaxPrice=document.querySelector('#filterBymaxPrice')
  const filterByType=document.querySelector('#filterByType')

    document.querySelector('.logo-text').innerText='Street Artist'
    header.style.display='flex'
    header.style.justifyContent = "space-between"
    header.style.alignItems='center'
    header.classList.add('d-flex')
    logoImg.classList.remove('d-none')
    logoImg.style.display='block'
    logoContainer.classList.add('d-flex')
    auctionBtn.classList.remove('d-none')
    auctionBtn.style.display='block'

    const publishedItems=data.filter(item => item.isPublished)

    const cardContainer=document.querySelector('.card-container')
    const filterBtn=document.querySelector('.filterBtn')
    const closeBtn=document.querySelector('.closeBtn')
    const applyBtn=document.querySelector('.applyBtn')


    filterBtn.addEventListener('click', filterCards)
    closeBtn.addEventListener('click', closingFiltersPanel)
    applyBtn.addEventListener('click', applyingFilteredData)

    
    function createVisitorCards(array) {
     cardContainer.innerHTML=''
    array.forEach(({image, artist, price, title, description}) => {
      cardContainer.innerHTML+=`
    <div class="card">
      <div class="card-img">
        <img src="${image}" alt="">
      </div>
      <div class="card-header">
         <div class="left">
            <h3>${artist}</h3>
         </div>
         <div class="right">
             <span>$${price}</span>
         </div>
      </div>
   <div class="card-body">
        <h5 class="card-title">${title}</h5>
        <p class="card-text">${description}</p>  
   </div>
  </div>` 

  })
  
}

  createVisitorCards(publishedItems) 

  function filterCards() {
    const filterPage=document.querySelector('.filterPage')
    filterPage.classList.remove('d-none')
    filterBtn.classList.add('d-none')
    cardContainer.classList.add('d-none')
    
    filterByArtist.innerHTML=''
    filterByArtist.innerHTML=`<option value="">Choose Artist</option>`
       
       JSON.parse(localStorage.getItem('users')).forEach(nameOption => {
        
        let userName=document.createElement('option')
        userName.innerText=nameOption
        userName.setAttribute('value', nameOption)
        filterByArtist.appendChild(userName)
 
       });

        
    filterByType.innerHTML=''
    filterByType.innerHTML=`<option value="">Choose</option>`
       
       itemTypes.forEach(type => {
         
        let typeOption=document.createElement('option')
        typeOption.innerText=type
        typeOption.setAttribute('value', type)
        filterByType.appendChild(typeOption)
 
       });
    }

   function closingFiltersPanel() {
    const filterPage=document.querySelector('.filterPage')
    filterPage.classList.add('d-none')
    cardContainer.classList.remove('d-none')
    filterBtn.classList.remove('d-none')

   }

   function filterItems() {
    console.log(filterByArtist.value)

   const filtered=publishedItems.filter(item => 
    
    (filterByTitle.value ? item.title.includes(filterByTitle.value) : true) &&
    (filterByArtist.value ? item.artist===filterByArtist.value : true) &&
    (filterByMinPrice.value ? item.price >=filterByMinPrice.value : true) &&
    (filterByMaxPrice.value ? item.price <=filterByMaxPrice.value : true ) &&
    (filterByType.value ? item.type===filterByType.value : true)

   ) 
   return filtered
   }

  function applyingFilteredData() {
   let filtered=filterItems()
   filtered.length > 0 ? createVisitorCards(filtered) : createVisitorCards(publishedItems)
   filtered.length==0 && alert('You have entered incorrect data for this filters')
   closingFiltersPanel()
  }

}
  

 


 


