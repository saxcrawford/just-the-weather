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
            const attributionElement = document.getElementById('image-attribution');
            const photographerLink = document.getElementById('photographer-link');
            if (data.weather[0].main == 'Mist' || data.weather[0].main == 'Fog' || data.weather[0].main == 'Haze' || data.weather[0].main == 'Smoke' || data.weather[0].main == 'Dust' || data.weather[0].main == 'Sand' || data.weather[0].main == 'Ash' || data.weather[0].main == 'Squall' || data.weather[0].main == 'Tornado') {
                document.body.style.backgroundImage = "url('images/mist.jpg')";
                photographerLink.href = "https://unsplash.com/@sharadmbhat?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash";
                photographerLink.textContent = "Sharad Bhat - unsplash";
                attributionElement.style.display = 'block';
            } else if (data.weather[0].main == 'Thunderstorm') {
                document.body.style.backgroundImage = "url('images/thunderstorm.jpg')";
                photographerLink.href = "https://unsplash.com/@noaa?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash";
                photographerLink.textContent = "NOAA - unsplash";
                attributionElement.style.display = 'block';
            } else if (data.weather[0].main == 'Rain' || data.weather[0].main == 'Drizzle') {
                document.body.style.backgroundImage = "url('images/rain.jpg')";
                photographerLink.href = "https://unsplash.com/@josenothose?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash";
                photographerLink.textContent = "Jose Fontano - unsplash";
                attributionElement.style.display = 'block';
            } else if (data.weather[0].main == 'Snow') {
                document.body.style.backgroundImage = "url('images/snow.jpg')";
                photographerLink.href = "https://www.freepik.com/free-photo/small-coniferous-tree-field_1579320.htm#fromView=search&page=4&position=9&uuid=0f4d5c52-3c0e-4cb4-b68a-8bbcacc518df";
                photographerLink.textContent = "freepik";
                attributionElement.style.display = 'block';
            } else if (data.weather[0].main == 'Clear') {
                document.body.style.backgroundImage = "url('images/clear.jpg')";
                photographerLink.href = "https://www.freepik.com/free-photo/beautiful-photo-sea-waves_179723483.htm#fromView=search&page=1&position=15&uuid=f4c4500e-b97f-43c7-8b24-1dbecc04f2c2";
                photographerLink.textContent = "Mateus Andre - freepik";
                attributionElement.style.display = 'block';
            } else if (data.weather[0].main == 'Clouds') {
                document.body.style.backgroundImage = "url('images/clouds.jpg')";
                photographerLink.href = "https://unsplash.com/@marcwieland95?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash";
                photographerLink.textContent = "Marc Wieland - unsplash";
                attributionElement.style.display = 'block';
            } else {
                document.body.style.backgroundColor = '#B7E0FF';
                attributionElement.style.display = 'none';
            }
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