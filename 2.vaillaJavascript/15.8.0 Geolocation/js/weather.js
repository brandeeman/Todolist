// 나의 날씨 API 키
const API_KEY = "b64e724a21bc8fc0a978a56b49aebb06"

// 잘 되었을 때 함수
function onGeoOk(position){
    // console.log(position);

    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    // console.log("You live in", lat, lon);

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

    // console.log(url);

    // 크롬 newwork상의 위치를 잡아줌
    fetch(url).then(response => response.json()).then((data) => {
        const name = data.name; 
        const weather = data.weather[0].main});
    // then을 붙이는 이유?
    // 


}

// 에러가 발생했을 때 함수
function onGeoError(){
    alert("Can't find you. No weather for you.");
}

// 위치를 알려주는 함수
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

// https://openweathermap.org/api
// 날씨 Api 있는 곳
// API란? 다른 서버와 이야기 할 수 있는 방법

// 크롬확장 프로그램 : Json viewer 설치