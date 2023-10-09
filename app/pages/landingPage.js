import { artistDropdown } from "../main.js";
import { items } from "../../data/data.js";
import { logoImg } from "../main.js";
import { header } from "../main.js";
import { auctionBtn } from "../main.js";
import { menuBtn } from "../main.js";

export function initLandingPage() {
  let data;
  const valueFromLs = localStorage.getItem("itemsData");
  if (valueFromLs) {
    data = JSON.parse(valueFromLs);
  } else {
    localStorage.setItem("itemsData", JSON.stringify(items));
    data = JSON.parse(valueFromLs);
  }

  fetch(`https://jsonplaceholder.typicode.com/users`)
    .then((res) => res.json())
    .then((users) => {
      const nameOptions = users.map((user) => user.name);
      localStorage.setItem("users", JSON.stringify(nameOptions));
      artistDropdown.innerHTML = "";
      artistDropdown.innerHTML = `<option value="">Choose Artist</option>`;

      nameOptions.forEach((nameOption) => {
        let userName = document.createElement("option");
        userName.innerText = nameOption;
        userName.setAttribute("value", nameOption);
        artistDropdown.appendChild(userName);
      });
    });
  logoImg.classList.add("d-none");
  header.style.justifyContent = "center";
  auctionBtn.classList.add("d-none");
  menuBtn.classList.add("d-none");
}

export function joinAsArtist(currentArtist, dropdownList) {
  currentArtist = dropdownList.value;
  if (dropdownList.value !== "") {
    location.hash = "#artists";
    const logoText = document.querySelector(".logo-text");
    logoText.textContent = currentArtist;
  }
}
