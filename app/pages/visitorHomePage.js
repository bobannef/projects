
import { auctionBtn, header, logoContainer, logoImg, menuBtn} from "../main.js";

 export function initVisitorHomePage() {
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
    

 }



