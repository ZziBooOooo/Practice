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
      setTemperature(json);
    });
}

function loadItems() {
  return fetch("data.json")
    .then((response) => response.json())
    .then((json) => json.items);
}

navigator.geolocation.getCurrentPosition(onGeoOk);

function displayWeather(data) {
  const weatherImg = document.createElement("img");
  weatherImg.src = `./img/weather_Icon/${data.weather[0].icon}.png`;
  test.prepend(weatherImg);
  let mainTemp = Math.floor(data.main.temp);
  test.innerHTML += mainTemp + "℃" + "<br>";
  test.innerHTML += data.name + "<br>";
  test.innerHTML += data.weather[0].main + ` & ` + data.weather[0].description; // 설명대신 아이콘 ?
}

// *** 현재온도값을 받와야함 - data 인자로 받아왔다.
// 현재온도값에 맞춰서 해당하는 데이터만 필터링해야함
// json데이터(코디사진)를 이곳으로 불러오는 방법은 ..?
function setTemperature(data) {
  loadItems().then((items) => {
    // console.log(items);

    tempFilter(data, items);
  });
}

function tempFilter(data, items) {
  let mainTemp = Math.floor(data.main.temp);
  let kr_mainTemp;
  if (mainTemp >= 28) {
    kr_mainTemp = "28도 이상";
  } else if (mainTemp >= 23 && mainTemp <= 27) {
    kr_mainTemp = "23도 이상 27도 이하";
  } else if (mainTemp >= 17 && mainTemp <= 22) {
    kr_mainTemp = "17도 이상 22도 이하";
  } else if (mainTemp >= 12 && mainTemp <= 16) {
    kr_mainTemp = "12도 이상 16도 이하";
  } else if (mainTemp >= 7 && mainTemp <= 11) {
    kr_mainTemp = "7도 이상 11도 이하";
  } else if (mainTemp >= 1 && mainTemp <= 6) {
    kr_mainTemp = "1도 이상 6도 이하";
  } else if (mainTemp <= 0) {
    kr_mainTemp = "0도 이하";
  }

  let aaa = items.filter((item) => item.temp == kr_mainTemp);
  console.log(aaa);
  setEventListeners(aaa);
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
