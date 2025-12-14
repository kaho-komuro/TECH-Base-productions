fetch('https://weather.tsukumijima.net/api/forecast?city=110010')
    .then((response) => response.json())
    .then((data) => {
        const tomorrow = data.forecasts[1];
        const weather = tomorrow.telop;
        const maxTemp = tomorrow.temperature.max.celsius;
        const minTemp = tomorrow.temperature.min.celsius;
        const message = `${weather}（最高気温: ${maxTemp}℃ / 最低気温: ${minTemp}℃）`;
        document.getElementById('SaitamaWeather').innerText = message;
        });