const apiKey = '9ad9726f5a778076664c2282334bc70d';
const weatherInfoElement = document.getElementById('weatherInfo');

function getWeather() {
  const cityInput = document.getElementById('cityInput');
  const city = cityInput.value;

  if (city === '') {
    alert('Please enter a city');
    return;
  }

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      displayWeather(data);
    })
    .catch(error => {
      console.error('Error fetching weather data:', error);
      alert('Error fetching weather data. Please try again.');
    });
}

function displayWeather(data) {
    if (!data || typeof data.main === 'undefined' || typeof data.weather === 'undefined' || data.weather.length === 0) {
      console.error('Invalid data received from the weather API');
      alert('Error fetching weather data. Please try again.');
      return;
    }
  
    const { name, main, weather } = data;
  
    const temperature = typeof main.temp !== 'undefined' ? `${main.temp}°C` : 'N/A';
    const description = weather[0].description || 'N/A';
  
    const weatherHTML = 
    `
      <h2>${name}</h2>
      <p>Temperature: ${temperature}</p>
      <p>Weather: ${description}</p>
    `;
  
    weatherInfoElement.innerHTML = weatherHTML;
  }
  