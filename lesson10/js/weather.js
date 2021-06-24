const apiURL = "http://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=ffe8fd08fbf90ef22ca04d78481b8036"
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    //console.log(jsObject);
    document.getElementById('currently').textContent = jsObject.weather[0].description;
    document.getElementById('current-temp').textContent = Math.round(jsObject.main.temp * 10)/ 10;
    document.getElementById('high-temp').textContent = Math.round(jsObject.main.temp_max);
    document.getElementById('low-temp').textContent = Math.round(jsObject.main.temp_min);
    document.getElementById('humidity').textContent = jsObject.main.humidity;
    document.getElementById('speed').textContent = Math.round(jsObject.wind.speed * 10)/ 10;
    //Calculate wind chill
    const temp = document.querySelector('#current-temp').textContent
    const speed = document.querySelector('#speed').textContent
    if (temp <= 50 && speed > 3.0){
        chill = caclulateWindChill(temp, speed)
        document.querySelector('#chill').textContent = chill + '\u00B0 F'
    } else {
        document.querySelector('#chill').textContent = 'N/A'
    }
  });

function caclulateWindChill(temp, speed){
    let chill = 35.74 + (0.6215 * temp) - (37.75 * Math.pow(speed, 0.16)) + (0.4275 * temp * (Math.pow(speed, 0.16)))  
    return Math.round(chill)
}
const forecastApiURL = "http://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=ffe8fd08fbf90ef22ca04d78481b8036"
fetch(forecastApiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    const forecast = [];
    for(let i=0; i < jsObject.list.length; i++) {
       if (jsObject.list[i].dt_txt.includes("18:00:00")) {
           forecast.push(jsObject.list[i])
        }
    }
    for(let i=0; i < forecast.length; i++) {
        d = new Date(forecast[i].dt_txt.slice(0,10));
        day = weekday[d.getDay()];
        document.getElementById(`day-${i + 1}`).textContent = day
        document.getElementById(`day-${i + 1}-temp`).textContent = Math.round(forecast[i].main.temp)
        var imagesrc = `https://openweathermap.org/img/w/${forecast[i].weather[0].icon}.png`;  // note the concatenation
        var desc = forecast[i].weather[0].description;  // note how we reference the weather array
        document.getElementById(`icon-${i+1}`).setAttribute('src', imagesrc);  // focus on the setAttribute() method
        document.getElementById(`icon-${i+1}`).setAttribute('alt', desc);
    }
});
