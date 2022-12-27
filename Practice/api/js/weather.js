const API_KEY = "367636d16a48743eb5074f58249138c2";

const testGoBtn = document.querySelector(".testGoBtn");
const weatherIcon = document.querySelector(".weatherIcon");
const temp = document.querySelector(".temp");
const region = document.querySelector(".region");
const weatherContainer = document.querySelector(".weatherContainer");
const fisrtContent = document.querySelector(".fisrtContent");

let move = 0;

// 날씨 받아오는 함수
function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      displayWeather(json);
      setTemperature(json);
    });
}

// 메인에 날씨, 아이콘, 지역 넣어주는 함수
function displayWeather(data) {
  const weatherImg = document.createElement("img");
  weatherImg.src = `./img/weather_Icon/${data.weather[0].icon}.png`;
  weatherImg.setAttribute("class", "floating");
  // weatherImg.src = `./img/weather_Icon/04d.gif`;
  let mainTemp = Math.floor(data.main.temp);
  weatherContainer.prepend(weatherImg);
  temp.innerHTML += mainTemp + "℃" + "<br>";
  region.innerHTML += data.name + "<br>";
  //   test.innerHTML += data.weather[0].main + ` & ` + data.weather[0].description;  설명대신 아이콘 ?
  const firstPageArray = [weatherImg, temp, region, testGoBtn];
  console.log(firstPageArray);
  init(firstPageArray);
}

navigator.geolocation.getCurrentPosition(onGeoOk);

function init(firstPageArray) {
  //   console.log(firstPageArray);
  firstPageArray.forEach((arr, key) => {
    setTimeout(() => {
      arr.classList.add("contentOn");
    }, (key + 1) * 200);
  });

  testGoBtn.addEventListener("click", () => {
    hideFirstContent(firstPageArray);
    setTimeout(() => {
      hideFirstPage();
    }, 1000);
  });

  secondPage.addEventListener("mousewheel", () => {
    pagemove(firstPageArray);
  });
}

function hideFirstContent(firstPageArray) {
  firstPageArray.forEach((arr, key) => {
    setTimeout(() => {
      arr.classList.add("contentRemove");
    }, (key + 1) * 200);
  });

  setTimeout(() => {
    firstPage.classList.add("pageOff");
    fisrtContent.classList.add("pageOff");
  }, 1000);
}

function removecontentClass(firstPageArray) {
  firstPageArray.forEach((arr, key) => {
    setTimeout(() => {
      arr.classList.remove("contentRemove");
    }, (key + 1) * 300);
  });
}
function pagemove(firstPageArray) {
  if (event.wheelDelta > 0) {
    move = secondPage.offsetHeight;
    //   console.log(move);
    firstPage.classList.add("pageOn");
    fisrtContent.classList.add("pageOn2");
    removecontentClass(firstPageArray);
    hideFirstContent();
  }
}
function hideFirstPage() {
  firstPage.classList.remove("pageOn");
  fisrtContent.classList.remove("pageOn2");
}
