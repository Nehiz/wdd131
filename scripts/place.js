// Footer: Current Year and Last Modified Date
document.getElementById('current-year').textContent = new Date().getFullYear();
document.getElementById('last-modified').textContent = document.lastModified;

document.addEventListener("DOMContentLoaded", function () {
    const temperature = 26.9; // Example temperature in Celsius
    const windSpeed = 7; // Example wind speed in km/h

    // Function to calculate wind chill
    function calculateWindChill(temp, wind) {
        return 13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16);
    }

    // Check if conditions are met (temperature <= 10°C and wind speed > 4.8 km/h)
    if (temperature <= 10 && windSpeed > 4.8) {
        const windChill = calculateWindChill(temperature, windSpeed).toFixed(1);
        document.getElementById("wind-chill").textContent = `${windChill}°C`;
    } else {
        document.getElementById("wind-chill").textContent = "N/A";
    }
});