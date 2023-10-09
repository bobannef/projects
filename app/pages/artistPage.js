import {
  artistDropdown,
  header,
  logoContainer,
  logoImg,
  menuBtn,
} from "../main.js";
import { items } from "../../data/data.js";
import { formatDate, generateLabels } from "../utils.js";

export function initArtistHomePage() {
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

  const isAuctioning = data.filter((item) => item.isAuctioning == true);
  if (isAuctioning.length >= 1) {
    document.querySelector(".live-auction-container").style.display = "block";
    document.querySelector(".auction-amount").textContent =
      localStorage.getItem("allBiddingItems");
  } else {
    document.querySelector(".live-auction-container").style.display = "none";
    document.querySelector(".auction-amount").textContent = 0;
  }

  let currentArtist = localStorage.getItem("currentArtist");

  const artistItems = data.filter((item) => item.artist == currentArtist);
  const soldItems = artistItems.filter((item) => item.dateSold);
  let totalIncome = 0;
  soldItems.forEach((item) => {
    totalIncome += item.priceSold;
  });
  document.querySelector(
    ".items-sold"
  ).innerText = `${soldItems.length} / ${artistItems.length}`;
  document.querySelector(".income-amount").innerText = `$${totalIncome}`;
  console.log("solditems:", soldItems);
  console.log("artistitems:", artistItems);

  const ctx = document.getElementById("myChart");

  const myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: [
        "06.05.2023",
        "05.05.2023",
        "04.05.2023",
        "Green",
        "Purple",
        "Orange",
      ],
      datasets: [
        {
          label: "Sales Amount",
          data: [],
          backgroundColor: "#a26a5e",
          hoverBackgroundColor: "#D44C2E",
          borderWidth: 1,
        },
      ],
    },
    options: {
      indexAxis: "y",
    },
  });

  const last7 = document.querySelector("#last7");
  last7.addEventListener("click", function () {
    const labels = generateLabels(7);
    myChart.data.labels = labels;

    const chartData = labels.map((label) =>
      soldItems.reduce((acc, item) => {
        if (label === formatDate(item.dateSold)) {
          return (acc += item.priceSold);
        }

        return acc;
      }, 0)
    );
    myChart.data.datasets[0].data = chartData;
    myChart.update();
    console.log(labels);
  });

  const last14 = document.querySelector("#last14");
  last14.addEventListener("click", function () {
    const labels = generateLabels(14);
    myChart.data.labels = labels;

    const chartData = labels.map((label) =>
      soldItems.reduce((acc, item) => {
        if (label === formatDate(item.dateSold)) {
          return (acc += item.priceSold);
        }

        return acc;
      }, 0)
    );
    myChart.data.datasets[0].data = chartData;
    myChart.update();
    console.log(labels);
  });

  const last30 = document.querySelector("#last30");
  last30.addEventListener("click", function () {
    const labels = generateLabels(30);
    myChart.data.labels = labels;

    const chartData = labels.map((label) =>
      soldItems.reduce((acc, item) => {
        if (label === formatDate(item.dateSold)) {
          return (acc += item.priceSold);
        }

        return acc;
      }, 0)
    );
    myChart.data.datasets[0].data = chartData;
    myChart.update();
    console.log(labels);
  });

  const lastYear = document.querySelector("#lastYear");
  lastYear.addEventListener("click", function () {
    const today = new Date();
    const startOfYear = new Date(today.getFullYear() - 1, today.getMonth(), 1);
    const endOfYear = new Date(today.getFullYear(), today.getMonth(), 0);

    const labels = generateMonthLabels(startOfYear, endOfYear);

    myChart.data.labels = labels;

    const chartData = labels.map((label) => {
      let sum = 0;
      soldItems.forEach((item) => {
        if (isInLastYear(item.dateSold) && isInMonth(item.dateSold, label)) {
          sum += item.priceSold;
        }
      });
      return sum;
    });

    myChart.data.datasets[0].data = chartData;
    myChart.update();
  });

  function generateMonthLabels(start, end) {
    const arr = [];
    let current = new Date(start);
    while (current <= end) {
      arr.push(
        current.toLocaleString("en-us", { month: "short", year: "numeric" })
      );
      current.setMonth(current.getMonth() + 1);
    }
    return arr;
  }

  function isInLastYear(date) {
    const today = new Date();
    const startOfYear = new Date(today.getFullYear() - 1, today.getMonth(), 1);
    const endOfYear = new Date(today.getFullYear(), today.getMonth(), 0);
    return date >= startOfYear && date <= endOfYear;
  }
}
