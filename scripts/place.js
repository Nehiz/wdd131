// Footer: Current Year and Last Modified Date
document.getElementById('current-year').textContent = new Date().getFullYear();
document.getElementById('last-modified').textContent = document.lastModified;

// Wind Chill Calculation
function calculateWindChill(temp, speed) {
    return 13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16);
}

// Static values for temperature and wind speed
const temperature = 10; // °C
const windSpeed = 5; // km/h

// Check conditions for wind chill calculation
if (temperature <= 10 && windSpeed > 4.8) {
    const windChill = calculateWindChill(temperature, windSpeed).toFixed(1);
    document.getElementById('wind-chill').textContent = `${windChill}°C`;
} else {
    document.getElementById('wind-chill').textContent = 'N/A';
}