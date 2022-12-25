const API_KEY = "367636d16a48743eb5074f58249138c2";

// 날씨 받아오는 함수
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

function displayWeather(data) {
  test.textContent = data.weather[0].main + ` & ` + data.weather[0].description;
}

// 아이템 표시 함수
function displayItems(items) {
  content.innerHTML = items.map((item) => createHTMLString(item)).join("");
}

function createHTMLString(item) {
  return `<li class="item">
    <img src="${item.image}" alt="${item.type}" class="item__thumbnail" />
    <span class="item__description">${item.gender}</span>
</li>`;
}

// 라디오버튼에 이벤트 등록 + 성별필터링
function setEventListeners(items) {
  const s_btns = document.querySelector(".s_Form");
  s_btns.addEventListener("click", () => filterGender(items));
}

// 성별 입력받은 후 성별필터링 + 옷스타일 필터링을 위해 넘김
function filterGender(items) {
  let genderValue;
  let genderRadio = document.getElementsByName("gender");
  genderRadio.forEach((radio) => {
    if (radio.checked == true) {
      genderValue = radio.value;
    }
  });
  const genderItems = items.filter((item) => item.gender == genderValue);
  const buttons = document.querySelector(".testForm");
  buttons.addEventListener("click", (e) => onButtonClick(e, genderItems));
}

// 버튼(옷스타일) 클릭 후 필터링 결과 표시
function onButtonClick(e, items) {
  const dataset = e.target.dataset;
  const dataKey = dataset.key;
  const dataValue = dataset.value;

  const styleItems = items.filter((item) => item[dataKey] === dataValue);
  displayItems(styleItems);
}

navigator.geolocation.getCurrentPosition(onGeoOk);

// main
loadItems().then((items) => {
  displayItems(items);
  setEventListeners(items);
});

/* 
    여자/남자? + 현재날씨 + 옷 스타일에 따라 데이터 구분하는 방법 > ?
    코디 나올 때 랜덤으로 나오게 > ?

*/
