const apiKey = '6816961817d3ad9d83ecd27b86789cc8';
let weatherData;

fetch(
  `https://api.openweathermap.org/data/2.5/weather?lat=44&lon=10.99&appid=${apiKey}`
)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    weatherData = data;
    document.querySelector('.weather_tit').innerHTML = weatherData.name;
    document.querySelector('.weather_icon').innerHTML =
      weatherData.weather[0].icon;
  })
  .catch((err) => {
    console.log(err);
  });
