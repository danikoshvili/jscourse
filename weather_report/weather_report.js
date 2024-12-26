function showweatherDetails(event) {
    event.preventDefault(); // Prevent form submission and page reload

    const city = document.getElementById('city').value.trim(); // Get the city input
    if (!city) {
        alert('Please enter a city name.');
        return;
    }

    const apiKey = '8e7a4e7c12f0ef9183ec6e8b1a19dacf';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found!');
            }
            return response.json();
        })
        .then(data => {
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `
                <h2>Weather in ${data.name}</h2>
                <p>Temperature: ${data.main.temp} &#8451;</p>
                <p>Weather: ${data.weather[0].description}</p>
            `;
            weatherInfo.style.display = 'block'; // Ensure the weather info is visible
        })
        .catch(error => {
            alert(error.message);
        });
}

document.getElementById('weatherForm').addEventListener('submit', showweatherDetails);
