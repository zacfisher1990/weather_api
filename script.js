var searchCityBtn = document.getElementById("btn");
var city = document.getElementById("city-name");
var date = document.getElementById("date");
var temperature = document.getElementById("temperature");
var humidity = document.getElementById("humidity");
var wind = document.getElementById("wind");

searchCityBtn.addEventListener('click', function(event){
    event.preventDefault()
var weatherURL = "https://api.openweathermap.org/data/2.5/weather?q=" + document.getElementById("city").value.split(' ').join('+') + "&appid=1caf07bdfd403b26e4f9cc78d0d4e92b"
console.log(weatherURL);
console.log("show weather report");

//city.textContent = document.getElementById("city").value;


fetch(weatherURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
        city.textContent = data.name;
        //date.textContent = today;
        temperature.textContent = "Temperature: " + Math.trunc(1.8 * (data.main.temp - 273) + 32) + "° F";
        humidity.textContent = "Humidity: " + data.main.humidity + "%";
        wind.textContent = "Wind Speed: " + data.wind.speed;


      //Loop over the data to generate a table, each table row will have a link to the repo url
      for (var i = 0; i < data.length; i++) {
        
    }
})
});
