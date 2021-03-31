let currentDay=document.querySelector("#current-date");
let currentTime=document.querySelector("#current-time");
let currentData= new Date();
let hours=currentData.getHours();
let minutes=currentData.getMinutes();
let dayIndex=currentData.getDay();
let days=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday","Friday","Saturday"];
currentDay.innerHTML=`${days[dayIndex]}`;
currentTime.innerHTML=`${hours}:${minutes}`;

function displayWeatherCondition(response){
    console.log(response.data);
    document.querySelector("#city").innerHTML=response.data.name;
    document.querySelector("#main-temperature").innerHTML=Math.round(response.data.main.temp);
    document.querySelector("#current-wind").innerHTML=Math.round(response.data.wind.speed);
    document.querySelector("#weather-description").innerHTML=response.data.weather[0].description;
}
function searchCity(city){
    let apiKey="b331e5e02bda3d06b58bb7d592ccf780";
    let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(displayWeatherCondition);
}

function searchLocation(position){
    let apiKey="b331e5e02bda3d06b58bb7d592ccf780";
    let apiUrl=`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeatherCondition);
}
function handleSubmit(event){
            event.preventDefault();
            let city=document.querySelector("#city-input").value;
            searchCity(city);
        }

function getCurrentLocation(event){
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(searchLocation);
    };

function convertToF(event){
    event.preventDefault();
    let changeTemp= document.querySelector("#main-temperature");
    changeTemp.innerHTML="45";
}
       
       let fahLink=document.querySelector("#f-link");
       fahLink.addEventListener("click", convertToF);

function convertToC(event){
     event.preventDefault();
    let changeTemp= document.querySelector("#main-temperature");
    changeTemp.innerHTML="12";
}
       let celLink=document.querySelector("#c-link");
       celLink.addEventListener("click", convertToC);

        let citySearch= document.querySelector("#city-search");
       citySearch.addEventListener("click", handleSubmit);

       let currentLocationButton=document.querySelector("#current-location-button");
       currentLocationButton.addEventListener("click", getCurrentLocation);
searchCity("New York");



