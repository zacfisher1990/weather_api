var searchCityBtn = document.getElementById("btn");
var city = document.getElementById("city-name");
var date = document.getElementById("date");
var temperature = document.getElementById("temperature");
var humidity = document.getElementById("humidity");
var wind = document.getElementById("wind");
var icon = document.getElementById("icon");




searchCityBtn.addEventListener('click', function(event){
    event.preventDefault()
var weatherURL = "https://api.openweathermap.org/data/2.5/weather?q=" + document.getElementById("city").value.split(' ').join('+') + "&appid=1caf07bdfd403b26e4f9cc78d0d4e92b"
console.log(weatherURL);
console.log("show weather report");

fetch(weatherURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
        city.textContent = data.name;
        var todayDate = new Date();
        var localTime = todayDate.getTime();
        var localOffset = todayDate.getTimezoneOffset() * 60000;
        var utc = localOffset + localTime;
        var cityTime = utc + (1000 * data.timezone);
        var displayTime = new Date(cityTime);
        document.getElementById("time").textContent = displayTime;
        var iconCode = data.weather[0].icon;
        icon.src = "http://openweathermap.org/img/wn/" + iconCode + "@2x.png";
        console.log(icon.src);
        temperature.textContent = "Temperature: " + Math.trunc(1.8 * (data.main.temp - 273) + 32) + "° F";
        humidity.textContent = "Humidity: " + data.main.humidity + "%";
        wind.textContent = "Wind Speed: " + data.wind.speed;


      //Loop over the data to generate a table, each table row will have a link to the repo url
      for (var i = 0; i < data.length; i++) {
        
    }
})
});
