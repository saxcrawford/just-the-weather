const apiKey = '76e443b5d42442c0c063374c3ef50ccd';

document.getElementById('search-button').addEventListener('click', () => {
    const cityName = document.getElementById('city').value;
    if (cityName) {
        fetchWeather(cityName);
    }
});

function fetchWeather(city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`)
        .then((response) => response.json())
        .then((data) => {
            showWeather(data);
        })
        .catch((error) => {
            console.error('Error fetching weather data:', error);
        });
}

function showWeather(d) {
    document.getElementById('city-name').textContent = `${d.name}, ${d.sys.country}`;
    document.getElementById('description').textContent = `Description: ${d.weather[0].main}`;
    document.getElementById('temperature').textContent = `Temp: ${d.main.temp} F°`;
    document.getElementById('humidity').textContent = `Humidity: ${d.main.humidity} %`;
    document.getElementById('wind').textContent = `Wind Speed: ${d.wind.speed} mph`;
    document.querySelector('.hold-info').style.display = 'grid';
}