var searchCityBtn = document.getElementById("btn");
var city = document.getElementById("city-name");
var date = document.getElementById("date");
var temperature = document.getElementById("temperature");
var humidity = document.getElementById("humidity");
var wind = document.getElementById("wind");
var uvIndex = document.getElementById("uv-index");
var icon = document.getElementById("icon");




searchCityBtn.addEventListener('click', function(event){
    event.preventDefault()
    
var weatherURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + document.getElementById("city").value.split(' ').join('+') + "&units=imperial&appid=1caf07bdfd403b26e4f9cc78d0d4e92b&cnt=40"
console.log(weatherURL);
var testUrl = "https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=1caf07bdfd403b26e4f9cc78d0d4e92b";
console.log(testUrl);


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
        var timeZone = data.city.timezone;
        var cityTime = utc + (1000 * timeZone);
        var displayTime = new Date(cityTime);
        //display date and time
        document.getElementById("time").textContent = displayTime;
        
        //day 1 of 5 day forecast info
        //weather icon
        var iconCode = data.list[0].weather[0].icon;
        icon.src = "http://openweathermap.org/img/wn/" + iconCode + "@2x.png";
        //display temp in fahrenheit
        temperature.textContent = "Temperature: " + data.list[0].main.temp + "° F";
        //display percent humidity
        humidity.textContent = "Humidity: " + data.list[0].main.humidity + "%";
        //display wind speed
        wind.textContent = "Wind Speed: " + data.list[0].wind.speed;
        //display uv index
        uvIndex.textContent = "UV Index: " + data.list[0].uvi;

        //day 2 of 5 day forecast info
        var dayTwoDate = document.getElementById("date2");
        var loTemp = document.getElementById("lo-temp");
        var hiTemp = document.getElementById("hi-temp");
        var humidity2 = document.getElementById("humidity2");
        var wind2 = document.getElementById("wind2");
        var icon2 = document.getElementById("icon2");
        //weather icon
        var iconCode2 = data.list[8].weather[0].icon;
        icon2.src = "http://openweathermap.org/img/wn/" + iconCode2 + "@2x.png";
        //date
        
        var date2 = new Date((data.list[8].dt + timeZone) * 1000);
        var month2 = date2.getMonth() + 1;
        var time2 = date2.getDate();
        var year2 = date2.getFullYear();
        dayTwoDate.textContent = month2 + "/" + time2 + "/" + year2;
        //display temp in fahrenheit
        loTemp.textContent = "Temperature: " + data.list[8].main.temp + "° F";
        
        //display percent humidity
        humidity2.textContent = "Humidity: " + data.list[8].main.humidity + "%";
        //display wind speed
        wind2.textContent = "Wind Speed: " + data.list[8].wind.speed;

        //day 3 of 5 day forecast info

        var dayThreeDate = document.getElementById("date3");
        var loTemp3 = document.getElementById("lo-temp3");
        var hiTemp3 = document.getElementById("hi-temp3");
        var humidity3 = document.getElementById("humidity3");
        var wind3 = document.getElementById("wind3");
        var icon3 = document.getElementById("icon3");
        //weather icon
        var iconCode3 = data.list[16].weather[0].icon;
        icon3.src = "http://openweathermap.org/img/wn/" + iconCode3 + "@2x.png";

        //date
        var date3 = new Date(data.list[16].dt * 1000);
        var month3 = date3.getMonth() + 1;
        var time3 = date3.getDate();
        var year3 = date3.getFullYear();
        dayThreeDate.textContent = month3 + "/" + time3 + "/" + year3;

        //display temp in fahrenheit
        loTemp3.textContent = "Temperature: " + data.list[16].main.temp + "° F";
        
        //display percent humidity
        humidity3.textContent = "Humidity: " + data.list[16].main.humidity + "%";
        //display wind speed
        wind3.textContent = "Wind Speed: " + data.list[16].wind.speed;

        //day 4 of 5 day forecast info

        var dayFourDate = document.getElementById("date4");
        var loTemp4 = document.getElementById("lo-temp4");
        var hiTemp4 = document.getElementById("hi-temp4");
        var humidity4 = document.getElementById("humidity4");
        var wind4 = document.getElementById("wind4");
        var icon4 = document.getElementById("icon4");
        //weather icon
        var iconCode4 = data.list[24].weather[0].icon;
        icon4.src = "http://openweathermap.org/img/wn/" + iconCode4 + "@2x.png";

        //date
        var date4 = new Date(data.list[24].dt * 1000);
        var month4 = date4.getMonth() + 1;
        var time4 = date4.getDate();
        var year4 = date4.getFullYear();
        dayFourDate.textContent = month4 + "/" + time4 + "/" + year4;

        
        //display temp in fahrenheit
        loTemp4.textContent = "Temperature: " + data.list[24].main.temp + "° F";
        
        //display percent humidity
        humidity4.textContent = "Humidity: " + data.list[24].main.humidity + "%";
        //display wind speed
        wind4.textContent = "Wind Speed: " + data.list[24].wind.speed;

        //day 5 of 5 day forecast

        var dayFiveDate = document.getElementById("date5");
        var loTemp5 = document.getElementById("lo-temp5");
        var hiTemp5 = document.getElementById("hi-temp5");
        var humidity5 = document.getElementById("humidity5");
        var wind5 = document.getElementById("wind5");
        var icon5 = document.getElementById("icon5");
        //weather icon
        var iconCode5 = data.list[32].weather[0].icon;
        icon5.src = "http://openweathermap.org/img/wn/" + iconCode5 + "@2x.png";

        //date
        var date5 = new Date(data.list[32].dt * 1000);
        var month5 = date5.getMonth() + 1;
        var time5 = date5.getDate();
        var year5 = date5.getFullYear();
        dayFiveDate.textContent = month5 + "/" + time5 + "/" + year5;
        //display temp in fahrenheit
        loTemp5.textContent = "Low: " + data.list[32].main.temp + "° F";
        //display percent humidity
        humidity5.textContent = "Humidity: " + data.list[32].main.humidity + "%";
        //display wind speed
        wind5.textContent = "Wind Speed: " + data.list[32].wind.speed;


      //Loop over the data to generate a table, each table row will have a link to the repo url
      for (var i = 0; i < data.length; i++) {
        
    }
})
});
