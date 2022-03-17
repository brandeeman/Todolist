// 나의 날씨 API 키
const API_KEY = "b64e724a21bc8fc0a978a56b49aebb06"

// 잘 되었을 때 함수
function onGeoOk(position){
    // console.log(position);

    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    // console.log("You live in", lat, lon);

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

    // console.log(url);

    // fetch : 크롬 newwork상의 위치를 잡아줌
    // then을 붙이는 이유?
    // fetch는 promise
    // promise란? 당장 뭔가 일어나지 않고 시간이 좀 걸린 뒤에 일어나는 것
    // 서버가 응답하는데 5분이 걸리면?
    // then을 사용

    fetch(url).then(response => response.json()).then((data) => {
        
    const weather = document.querySelector("#weather span:first-child");
    const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${parseInt(data.main.temp)}`
    }); 
    // weather는 array

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