var searchCityBtn = document.getElementById("btn");
var city = document.getElementById("city-name");
var date = document.getElementById("date");
var temperature = document.getElementById("temperature");
var humidity = document.getElementById("humidity");
var wind = document.getElementById("wind");
var icon = document.getElementById("icon");




searchCityBtn.addEventListener('click', function(event){
    event.preventDefault()
var weatherURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + document.getElementById("city").value.split(' ').join('+') + "&appid=1caf07bdfd403b26e4f9cc78d0d4e92b&cnt=5"
console.log(weatherURL);


fetch(weatherURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      
      //city name
        city.textContent = data.city.name;
        //variables for local date and time
        var todayDate = new Date();
        var localTime = todayDate.getTime();
        var localOffset = todayDate.getTimezoneOffset() * 60000;
        var utc = localOffset + localTime;
        var cityTime = utc + (1000 * data.city.timezone);
        var displayTime = new Date(cityTime);
        //display date and time
        document.getElementById("time").textContent = displayTime;
        
        //day 1 of 5 day forecast info
        //weather icon
        var iconCode = data.list[0].weather[0].icon;
        icon.src = "http://openweathermap.org/img/wn/" + iconCode + "@2x.png";
        //display temp in fahrenheit
        temperature.textContent = "Temperature: " + Math.trunc(1.8 * (data.list[0].main.temp - 273) + 32) + "° F";
        //display percent humidity
        humidity.textContent = "Humidity: " + data.list[0].main.humidity + "%";
        //display wind speed
        wind.textContent = "Wind Speed: " + data.list[0].wind.speed;
        
        //day 2 of 5 day forecast info
        var dayTwoDate = document.getElementById("date2");
        var loTemp = document.getElementById("lo-temp");
        var hiTemp = document.getElementById("hi-temp");
        var humidity2 = document.getElementById("humidity2");
        var wind2 = document.getElementById("wind2");
        var icon2 = document.getElementById("icon2");
        //weather icon
        var iconCode2 = data.list[1].weather[0].icon;
        icon2.src = "http://openweathermap.org/img/wn/" + iconCode2 + "@2x.png";
        //date
        dayTwoDate.textContent = data.list[1].dt_txt;
        //display temp in fahrenheit
        loTemp.textContent = "Low: " + Math.trunc(1.8 * (data.list[1].main.temp_min - 273) + 32) + "° F - ";
        hiTemp.textContent = "High: " + Math.trunc(1.8 * (data.list[1].main.temp_max - 273) + 32) + "° F";
        //display percent humidity
        humidity2.textContent = "Humidity: " + data.list[1].main.humidity + "%";
        //display wind speed
        wind2.textContent = "Wind Speed: " + data.list[1].wind.speed;

        //day 3 of 5 day forecast info

        var dayThreeDate = document.getElementById("date3");
        var loTemp3 = document.getElementById("lo-temp3");
        var hiTemp3 = document.getElementById("hi-temp3");
        var humidity3 = document.getElementById("humidity3");
        var wind3 = document.getElementById("wind3");
        var icon3 = document.getElementById("icon3");
        //weather icon
        var iconCode3 = data.list[2].weather[0].icon;
        icon3.src = "http://openweathermap.org/img/wn/" + iconCode3 + "@2x.png";

        dayThreeDate.textContent = data.list[2].dt_txt;
        //display temp in fahrenheit
        loTemp3.textContent = "Low: " + Math.trunc(1.8 * (data.list[2].main.temp_min - 273) + 32) + "° F - ";
        hiTemp3.textContent = "High: " + Math.trunc(1.8 * (data.list[2].main.temp_max - 273) + 32) + "° F";
        //display percent humidity
        humidity3.textContent = "Humidity: " + data.list[2].main.humidity + "%";
        //display wind speed
        wind3.textContent = "Wind Speed: " + data.list[2].wind.speed;

        //day 4 of 5 day forecast info

        var dayFourDate = document.getElementById("date4");
        var loTemp4 = document.getElementById("lo-temp4");
        var hiTemp4 = document.getElementById("hi-temp4");
        var humidity4 = document.getElementById("humidity4");
        var wind4 = document.getElementById("wind4");
        var icon4 = document.getElementById("icon4");
        //weather icon
        var iconCode4 = data.list[3].weather[0].icon;
        icon4.src = "http://openweathermap.org/img/wn/" + iconCode4 + "@2x.png";

        dayFourDate.textContent = data.list[3].dt_txt;
        //display temp in fahrenheit
        loTemp4.textContent = "Low: " + Math.trunc(1.8 * (data.list[3].main.temp_min - 273) + 32) + "° F - ";
        hiTemp4.textContent = "High: " + Math.trunc(1.8 * (data.list[3].main.temp_max - 273) + 32) + "° F";
        //display percent humidity
        humidity4.textContent = "Humidity: " + data.list[3].main.humidity + "%";
        //display wind speed
        wind4.textContent = "Wind Speed: " + data.list[3].wind.speed;

        //day 5 of 5 day forecast

        var dayFiveDate = document.getElementById("date5");
        var loTemp5 = document.getElementById("lo-temp5");
        var hiTemp5 = document.getElementById("hi-temp5");
        var humidity5 = document.getElementById("humidity5");
        var wind5 = document.getElementById("wind5");
        var icon5 = document.getElementById("icon5");
        //weather icon
        var iconCode5 = data.list[3].weather[0].icon;
        icon5.src = "http://openweathermap.org/img/wn/" + iconCode5 + "@2x.png";

        dayFiveDate.textContent = data.list[3].dt_txt;
        //display temp in fahrenheit
        loTemp5.textContent = "Low: " + Math.trunc(1.8 * (data.list[4].main.temp_min - 273) + 32) + "° F - ";
        hiTemp5.textContent = "High: " + Math.trunc(1.8 * (data.list[4].main.temp_max - 273) + 32) + "° F";
        //display percent humidity
        humidity5.textContent = "Humidity: " + data.list[4].main.humidity + "%";
        //display wind speed
        wind5.textContent = "Wind Speed: " + data.list[4].wind.speed;


      //Loop over the data to generate a table, each table row will have a link to the repo url
      for (var i = 0; i < data.length; i++) {
        
    }
})
});
