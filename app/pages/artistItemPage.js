import { items } from "../../data/data.js";
import { itemTypes } from "../../data/data.js";
import { header, logoContainer, logoImg, menuBtn } from "../main.js";

export function initArtistItemsPage() {
  let data;
  const valueFromLs = localStorage.getItem("itemsData");
  if (valueFromLs) {
    data = JSON.parse(valueFromLs);
  } else {
    localStorage.setItem("itemsData", JSON.stringify(items));
    data = JSON.parse(valueFromLs);
  }

  header.style.display = "flex";
  header.style.justifyContent = "space-between";
  header.style.alignItems = "center";
  header.classList.add("d-flex");
  logoImg.classList.remove("d-none");
  logoImg.style.display = "block";
  logoContainer.classList.add("d-flex");
  menuBtn.classList.remove("d-none");
  menuBtn.classList.add("d-block");

  let isEditing = false;
  let idx;

  const addFormPage = document.querySelector(".add-new-ItemPage");
  const cardsContainer = document.querySelector(".cards-container-items");
  const addItemBtn = document.querySelector(".add-item-btn");
  const cancelBtn = document.querySelector("#cancelBtn");

  const switchingPages = () => {
    addFormPage.classList.toggle("d-none");
    cardsContainer.classList.toggle("d-none");
    addItemBtn.classList.toggle("d-none");
  };

  addItemBtn.addEventListener("click", function () {
    switchingPages();
    addNewItem();
  });

  cancelBtn.addEventListener("click", function () {
    if (!addFormPage.classList.contains("d-none")) {
      addFormPage.classList.add("d-none");
      cardsContainer.classList.remove("d-none");
      addItemBtn.classList.remove("d-none");
    }
  });

  const isPublishedItem = document.querySelector("#isPublished");
  const itemTitle = document.querySelector("#itemTitle");
  const itemDescription = document.querySelector("#itemDescription");
  const itemType = document.querySelector("#itemType");

  itemTypes.forEach((type, idx) => {
    const option = document.createElement("option");
    if (idx === 0) {
      option.selected = true;
    }
    option.textContent = type;
    option.setAttribute("value", type);
    itemType.appendChild(option);
  });

  const video = document.querySelector("#captureImagePage video");
  const canvas = document.querySelector("#canvas");
  const img = document.querySelector(".capturedImage");

  const itemPrice = document.querySelector("#itemPrice");
  const itemImage = document.querySelector("#imageUrl");
  const addNewItemBtn = document.querySelector("#addNewItemBtn");
  const addNewItemForm = document.querySelector("#adingItemForm");
  addNewItemForm.addEventListener("submit", (event) => {
    event.preventDefault();
    addCard();
  });

  let currentArtist = localStorage.getItem("currentArtist");
  let artistItems = data.filter((item) => item.artist == currentArtist);

  function createCard(item) {
    const card = document.createElement("div");
    card.classList.add("card");

    const cardImg = document.createElement("div");
    cardImg.classList.add("card-img");
    const img = document.createElement("img");
    img.src = item.image;
    cardImg.appendChild(img);

    const cardHeader = document.createElement("div");
    cardHeader.classList.add("card-header");
    const title = document.createElement("h3");
    title.classList.add("title");
    title.innerText = item.title;
    const price = document.createElement("span");
    price.classList.add("price");
    price.innerText = `$${item.price}`;
    cardHeader.append(title, price);

    const dateCreate = document.createElement("p");
    dateCreate.classList.add("date");
    const dateString = item.dateCreated;
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear().toString();
    const formattedDate = `${day}.${month}.${year}`;
    dateCreate.innerText = formattedDate;

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    const description = document.createElement("p");
    description.classList.add("card-text");
    description.textContent = item.description;
    cardBody.appendChild(description);

    const cardFooter = document.createElement("div");
    cardFooter.classList.add("card-footer");

    const sendAuctionBtn = document.createElement("button");
    sendAuctionBtn.classList.add("sendAuctionBtn");
    sendAuctionBtn.textContent = "Send to Auction";
    sendAuctionBtn.id = item.id;
    if (data.filter((item) => item.isAuctioning).length >= 1) {
      sendAuctionBtn.setAttribute("disabled", true);
    }

    sendAuctionBtn.addEventListener("click", (e) => {
      console.log("click");
      e.preventDefault();
      document.querySelector(".live-auction-container").style.display = "block";
      idx = data.findIndex((item) => item.id == sendAuctionBtn.id);
      data[idx].isAuctioning = true;
      localStorage.setItem("itemsData", JSON.stringify(data));
      renderCards(artistItems, cardsContainer);
      location.hash = "#auction";
    });

    const publishBtn = document.createElement("button");
    publishBtn.classList.add("unpublishBtn");
    publishBtn.textContent = "Publish";
    publishBtn.id = item.id;

    if (item.isPublished) {
      publishBtn.textContent = "Unpublish";
    } else {
      publishBtn.textContent = "Publish";
      publishBtn.style.background = "#E5E5E5";
      publishBtn.style.color = "#5A5A5A";
      publishBtn.style.fontWeight = 700;
    }
    publishBtn.addEventListener("click", (e) => {
      e.preventDefault();
      idx = data.findIndex((item) => item.id == publishBtn.id);
      data[idx].isPublished = !data[idx].isPublished;
      localStorage.setItem("itemsData", JSON.stringify(data));
      renderCards(artistItems, cardsContainer);
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("removeBtn");
    deleteBtn.id = item.id;
    deleteBtn.textContent = "Remove";
    deleteBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const isConfirmed = confirm(
        "Are you sure you want to delete this artist item?"
      );
      if (!isConfirmed) {
        return;
      }
      idx = data.findIndex((item) => item.id == deleteBtn.id);
      data.splice(idx, 1);
      card.remove();
      artistItems = data.filter((item) => item.artist == currentArtist);
      localStorage.setItem("itemsData", JSON.stringify(data));
      renderCards(artistItems, cardsContainer);
    });

    const editBtn = document.createElement("button");
    editBtn.classList.add("editBtn");
    editBtn.textContent = "Edit";
    editBtn.id = item.id;
    editBtn.addEventListener("click", (e) => {
      e.preventDefault();
      isEditing = true;
      idx = data.findIndex((item) => item.id == editBtn.id);
      addNewItem();
      switchingPages();
      itemTitle.value = data[idx].title;
      isPublishedItem.checked = data[idx].isPublished;
      itemType.value = data[idx].type;
      itemPrice.value = data[idx].price;
      itemDescription.value = data[idx].description;
      itemImage.value = data[idx].image;
      addNewItemBtn.textContent = "Update";
    });

    cardFooter.append(sendAuctionBtn, publishBtn, deleteBtn, editBtn);
    card.append(cardImg, cardHeader, dateCreate, cardBody, cardFooter);

    return card;
  }
  renderCards(artistItems, cardsContainer);

  function renderCards(array, container) {
    container.innerHTML = "";
    array.forEach((item) => {
      const card = createCard(item);
      container.appendChild(card);
    });
  }

  function addCard() {
    artistItems = data.filter((item) => item.artist == currentArtist);

    if (isEditing) {
      data[idx].title = itemTitle.value;
      data[idx].isPublished = isPublishedItem.checked;
      data[idx].description = itemDescription.value;
      data[idx].price = itemPrice.value;
      data[idx].image = itemImage.value;
      data[idx].type = itemType.value;
      data[idx].artist = currentArtist;

      localStorage.setItem("itemsData", JSON.stringify(data));

      isEditing = false;
      renderCards(artistItems, cardsContainer);
      addNewItem();
    } else {
      const artistItem = {
        id: new Date().valueOf(),
        title: itemTitle.value,
        description: itemDescription.value,
        type: itemType.value,
        image: itemImage.value,
        price: itemPrice.value,
        artist: currentArtist,
        dateCreated: new Date().toString(),
        isPublished: isPublishedItem.checked ? true : false,
        isAuctioning: false,
        priceSold: 0,
      };

      data.push(artistItem);
      artistItems.push(artistItem);
      localStorage.setItem("itemsData", JSON.stringify(data));

      renderCards(artistItems, cardsContainer);
      addNewItem();
    }
    stopStreamedVideo();
    switchingPages();
  }

  function addNewItem() {
    isPublishedItem.checked = true;
    itemTitle.value = "";
    itemDescription.value = "";
    itemType.value = "";
    itemPrice.value = "";
    itemImage.value = "";

    let snapshot = document.querySelector(".snapshot");
    //  snapshot.addEventListener("click", startCamera)
    const takeSnapshot = document.querySelector(".takeASnapshot");
    takeSnapshot.classList.remove("d-none");
    takeSnapshot.addEventListener("click", startCamera);
    const img = document.querySelector(".capturedImage");
    img.src = "";
    itemImage.value = "";
  }

  function startCamera() {
    const addNewItemPage = document.querySelector(".add-new-ItemPage");
    addNewItemPage.classList.add("d-none");

    let captureImagePage = document.querySelector("#captureImagePage");
    captureImagePage.classList.remove("d-none");
    initCaptureImagePage();
  }

  function initCaptureImagePage() {
    const screenShotBtn = document.querySelector(
      "#captureImagePage #screenShot"
    );
    const selectVideos = document.querySelector("#captureImagePage #videos");

    screenShotBtn.addEventListener("click", takePhoto);

    function takePhoto() {
      debugger;
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      canvas.getContext("2d").drawImage(video, 0, 0);
      const imageURL = canvas.toDataURL("image/webp");
      img.src = imageURL;
      itemImage.value = imageURL;
      let addNewItemPage = document.querySelector(".add-new-ItemPage");
      addNewItemPage.classList.remove("d-none");
      let captureImagePage = document.querySelector("#captureImagePage");
      captureImagePage.classList.add("d-none");
      let takesnapshot = document.querySelector(".takeASnapshot");
      takesnapshot.classList.add("d-none");
      let capturedImage = document.querySelector(".capturedImage");
      capturedImage.removeEventListener("click", takePhoto);
      capturedImage.addEventListener("click", takePhoto);
    }

    function getStream() {
      const source = selectVideos.value;

      const constrains = {
        video: {
          deviceId: source ? { exact: source } : undefined,
        },
      };

      return navigator.mediaDevices.getUserMedia(constrains).then(gotStream);
    }

    function gotStream(stream) {
      video.srcObject = stream;
    }

    function getDevices() {
      return navigator.mediaDevices.enumerateDevices();
    }

    function gotDevices(deviceInfo) {
      const videoDevices = deviceInfo.filter((x) => x.kind === "videoinput");

      for (let i = 0; i < videoDevices.length; i++) {
        const device = videoDevices[i];

        const opt = document.createElement("option");
        opt.value = device.deviceId;
        opt.text = `Camera ${i + 1} ${device.label || device.deviceId}`;
        selectVideos.appendChild(opt);
      }
    }

    function stopStreamedVideo() {
      const stream = video.srcObject;

      if (!stream) return;

      const allTracks = stream.getTracks();
      allTracks.forEach((track) => track.stop());
    }

    getStream().then(getDevices).then(gotDevices);
  }

  function stopStreamedVideo() {
    const stream = video.srcObject;
    if (!stream) return;
    const allTracks = stream.getTracks();
    allTracks.forEach((track) => track.stop());
  }
}
