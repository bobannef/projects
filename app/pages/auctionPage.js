import { items } from "../../data/data.js";
import {
  auctionBtn,
  header,
  logoContainer,
  logoImg,
  menuBtn,
} from "../main.js";

export function initAuctionPage() {
  let data;
  const valueFromLs = localStorage.getItem("itemsData");
  if (valueFromLs) {
    data = JSON.parse(valueFromLs);
  } else {
    localStorage.setItem("itemsData", JSON.stringify(items));
    data = JSON.parse(valueFromLs);
  }

  document.querySelector(".logo-text").innerText = "Street Artist";

  header.style.display = "flex";
  header.style.justifyContent = "space-between";
  header.style.alignItems = "center";
  header.classList.add("d-flex");
  logoImg.classList.remove("d-none");
  logoImg.style.display = "block";
  logoContainer.classList.add("d-flex");
  auctionBtn.classList.remove("d-none");
  auctionBtn.style.display = "block";
  menuBtn.classList.remove("d-block");
  menuBtn.classList.add("d-none");

  let idx;
  let allBiddingItems = [];

  const auctionHeader = document.querySelector(".auction-header");
  const auctionCardContainer = document.querySelector(".auctionCardContainer");
  auctionCardContainer.innerHTML = "";
  const biddingWrapper = document.querySelector("#bidding");
  const timer = document.querySelector(".timer");
  const biddingForm = document.querySelector("#bidding-form");
  const biddingInput = document.querySelector("#bidAmount");
  const biddingBtn = document.querySelector("#biddingBtn");
  const biddingHistory = document.querySelector("#biddingHistory");
  const auctionDone = document.querySelector(".auction-finished");
  const currentAuctioningItem = data.find((item) => item.isAuctioning);

  if (localStorage.getItem("userType") == "artist") {
    biddingForm.style.display = "none";
  } else {
    biddingForm.style.display = "block";
  }

  if (currentAuctioningItem) {
    document.querySelector(".live-auction-container").style.display = "block";
    auctionHeader.classList.add("d-none");
    biddingWrapper.classList.remove("d-none");
    auctionCardContainer.classList.remove("d-none");
    const initialBiddingPrice = Math.floor(currentAuctioningItem.price / 2);
    biddingInput.min = initialBiddingPrice;
    biddingInput.value = initialBiddingPrice;
    allBiddingItems.push(+biddingInput.value);
    localStorage.setItem("allBiddingItems", allBiddingItems);
    createCard(currentAuctioningItem);
    initAuction();
  } else {
    document.querySelector(".live-auction-container").style.display = "none";
    auctionHeader.classList.remove("d-none");
    biddingWrapper.classList.add("d-none");
    auctionCardContainer.classList.add("d-none");
  }

  function initAuction() {
    idx = data.findIndex((item) => item.id == currentAuctioningItem.id);

    if (localStorage.getItem("allBiddingItems")) {
      allBiddingItems = [JSON.parse(localStorage.getItem("allBiddingItems"))];

      allBiddingItems.forEach((bid, idx) => {
        const li = document.createElement("li");
        li.textContent = `I bid ${bid}`;
        if (idx > 0) {
          if (idx % 2 == 1) {
            li.classList.add("user");
          } else {
            li.classList.add("me");
          }

          biddingHistory.appendChild(li);
        }
      });
    } else {
      allBiddingItems = [];
    }
  }

  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds - minutes * 60;
    const secondsDisplay =
      remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds;
    const minutesDisplay = minutes < 10 ? `0${minutes}` : minutes;
    return `${minutesDisplay} : ${secondsDisplay}`;
  }

  function clearAuction() {
    data[idx].dateSold = new Date();
    data[idx].priceSold = allBiddingItems[allBiddingItems.length - 1];
    data[idx].isAuctioning = false;
    biddingForm.style.display = "none";
    auctionDone.style.display = "block";
    localStorage.removeItem("allBiddingItems");
    localStorage.removeItem("auctionTimer");
  }

  if (currentAuctioningItem) {
    initAuctionTimer();
  }

  function initAuctionTimer() {
    let time;
    const valueFromLs = +localStorage.getItem("auctionTimer");
    if (valueFromLs) {
      time = +valueFromLs;
    } else {
      time = 120;
      localStorage.setItem("auctionTimer", time);
      timer.textContent = `${formatTime(time)}`;
    }

    const timerInterval = setInterval(function () {
      time -= 1;
      timer.textContent = `${formatTime(time)}`;
      localStorage.setItem("auctionTimer", time);

      if (time == 0) {
        clearInterval(timerInterval);
        clearAuction();
      }
    }, 1000);

    biddingBtn.addEventListener("click", function () {
      time = 60;
    });
  }

  biddingBtn.addEventListener("click", function () {
    if (biddingInput.value == allBiddingItems[allBiddingItems.length - 1]) {
      alert("you have to bid higher price");
      return;
    }

    biddingHistory.innerHTML += `<li class='me'>${biddingInput.value}$</li>`;

    allBiddingItems.push(+biddingInput.value);
    localStorage.setItem("allBiddingItems", JSON.stringify(allBiddingItems));

    const formData = new FormData();
    formData.set("amount", biddingInput.value);

    fetch(`https://projects.brainster.tech/bidding/api`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())

      .then((data) => {
        if (data.isBidding) {
          biddingHistory.innerHTML += `<li class='user'>${data.bidAmount}$</li>`;
          biddingInput.min = data.bidAmount;
          biddingInput.value = data.bidAmount;
          allBiddingItems.push(+data.bidAmount);
        } else {
          biddingBtn.setAttribute("disabled", true);
          biddingHistory.innerHTML += `<li>I give up</li>`;
        }

        console.log(data);
      });
  });

  function createCard(item) {
    const card = document.createElement("div");
    card.classList.add("card");

    const cardImage = document.createElement("div");
    cardImage.classList.add("card-image");
    const img = document.createElement("img");
    img.src = item.image;
    cardImage.appendChild(img);

    const cardHeader = document.createElement("div");
    cardHeader.classList.add("card-header");
    const artistName = document.createElement("h3");
    artistName.classList.add("artist-name");
    artistName.textContent = item.artist;
    const artistPrice = document.createElement("span");
    artistPrice.classList.add("artist-price");
    artistPrice.textContent = `${Math.floor(item.price / 2)}$`;
    cardHeader.append(artistName, artistPrice);

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    const itemTitle = document.createElement("h5");
    itemTitle.textContent = item.title;
    const itemDescription = document.createElement("p");
    itemDescription.textContent = item.description;
    cardBody.append(itemTitle, itemDescription);

    card.append(cardImage, cardHeader, cardBody);
    auctionCardContainer.appendChild(card);
    return card;
  }
}

