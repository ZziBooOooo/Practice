const API_KEY = "367636d16a48743eb5074f58249138c2";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((json) => {
      displayWeather(json);
    });
}

function loadItems() {
  return fetch("data.json")
    .then((response) => response.json())
    .then((json) => json.items);
}

navigator.geolocation.getCurrentPosition(onGeoOk);

function displayWeather(data) {
  test.textContent = data.weather[0].main + ` & ` + data.weather[0].description;
}

function displayItems(items) {
  content.innerHTML = items.map((item) => createHTMLString(item)).join("");
}

function createHTMLString(item) {
  return `<li class="item">
    <img src="${item.image}" alt="${item.type}" class="item__thumbnail" />
    <span class="item__description">${item.gender}</span>
</li>`;
}
function setEventListeners(items) {
  const buttons = document.querySelector(".testForm");
  buttons.addEventListener("click", (e) => onButtonClick(e, items));
}

function onButtonClick(e, items) {
  const dataset = e.target.dataset;
  const dataKey = dataset.key;
  const dataValue = dataset.value;

  const aaa = items.filter((item) => item[dataKey] === dataValue);

  displayItems(aaa);
}

loadItems().then((items) => {
  displayItems(items);
  setEventListeners(items);
});

/* 
    여자/남자? + 현재날씨 + 옷 스타일에 따라 데이터 구분하는 방법 > ?
    코디 나올 때 랜덤으로 나오게 > ?

*/
