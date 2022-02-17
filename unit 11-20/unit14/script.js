const param = {
  url: "https://api.openweathermap.org/data/2.5/",
  appid: "1b58709d14115e05ce34f4d75a88f43b",
  cityname: document.querySelector("#cityname"),
  temperature: document.querySelector("#temp"),
  description: document.querySelector("#desc"),
  icon: document.querySelector("#icon"),
};

function getWeather() {
  const cityId = document.querySelector("#city").value;
  fetch(`${param.url}weather?id=${cityId}&units=metric&APPID=${param.appid}`)
    .then((data) => {
      return data.json();
    })
    .then(showWeather);
}
function showWeather(data) {
  param.cityname.textContent = data.name;
  param.description.textContent = data.weather[0].description;
  param.icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  param.icon.style.border = "1px solid gray"
  if (Math.floor(data.main.temp) === -0) {
    param.temperature.textContent = 0 + "°";
  } else {
    param.temperature.textContent = Math.floor(data.main.temp) + "°";
  }
}
getWeather();
document.querySelector("#city").onchange = getWeather;
