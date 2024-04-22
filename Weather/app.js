const apikey="0d14cb7379534b6c9bfebf33f4d5372f";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const inpBox=document.querySelector('.search input')
const but=document.querySelector('.search button')
let temp=document.querySelector(".temp")
let city=document.querySelector(".city")
let humid=document.querySelector(".humidity")
let wind=document.querySelector(".wind")
const weatherIcon=document.querySelector(".wimg")
async function checkWeather(cit)
{
    const response=await fetch(apiurl + cit + `&appid=${apikey}`)
    var data = await response.json();
    console.log(data)
    city.innerHTML=data.name;
    temp.innerHTML=data.main.temp + "°C";
    humid.innerHTML=data.main.humidity + "%";
    wind.innerHTML=data.wind.speed + " km/h ";
    if(data.weather[0].main=="clouds")
    {
        weatherIcon.src="images/Clouds.png"
    }
   else if(data.weather[0].main=="haze")
    {
        weatherIcon.src="images/rain.png"
    }
    else if(data.weather[0].main=="Clear")
    {
        weatherIcon.src="images/clear.png"
    }
   else if(data.weather[0].main=="drizzle")
    {
        weatherIcon.src="images/drizzle.png"
    }
}
but.addEventListener('click',()=>{
    checkWeather(inpBox.value)
    
})
;