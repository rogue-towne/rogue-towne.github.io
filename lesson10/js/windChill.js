let temp = document.querySelector('#temp').textContent
let speed = document.querySelector('#speed').textContent

if (temp <= 50 && speed > 3.0){
    chill = caclulateWindChill(temp, speed)
    document.querySelector('#chill').textContent = chill + '\u00B0 F'
} else {
    document.querySelector('#chill').textContent = 'N/A'
}
function caclulateWindChill(temp, speed){
    let chill = 35.74 + (0.6215 * temp) - (37.75 * Math.pow(speed, 0.16)) + (0.4275 * temp * (Math.pow(speed, 0.16)))  
    return Math.round(chill)
}