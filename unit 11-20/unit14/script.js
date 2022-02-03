const param = {
  url: "https://api.openweathermap.org/data/2.5/",
  appid: "1b58709d14115e05ce34f4d75a88f43b",
  cityname: document.querySelector("#cityname"),
  temp: document.querySelector("#temp"),
  desc: document.querySelector("#desc"),
  icon: document.querySelector("#icon"),
};

function getWeather() {
  const cityId = document.querySelector("#city").value;
  fetch(`${param.url}weather?id=${cityId}&units=metric&APPID=${param.appid}`)
    .then((weather) => {
      return weather.json();
    })
    .then(showWeather);
}
function showWeather(data) {
  param.cityname.textContent = data.name;
  param.desc.textContent = data.weather[0].description;
  param.icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  if (Math.floor(data.main.temp) == -0) {
    param.temp.textContent = 0 + "°";
  } else {
    param.temp.textContent = Math.floor(data.main.temp) + "°";
  }
}
getWeather();
document.querySelector("#city").onchange = getWeather;
