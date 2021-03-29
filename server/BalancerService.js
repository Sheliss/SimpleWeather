const fetch = require('node-fetch');

const apiKey = 'OPEN_WEATHER_APIKEY_HERE';

module.exports.getCurrentWeather = city => {
    return new Promise ((resovle, reject) => {
       fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey + '&lang=ru&units=metric')
        .then(resp => resp.json())
        .then(data => {
            resovle(data);
        })
        .catch(err => console.log(err))
    })
}

module.exports.get6HWeather = city => {
    return new Promise ((resovle, reject) => {
        fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey)
            .then(resp => resp.json())
            .then(data => 
                fetch('https://api.openweathermap.org/data/2.5/onecall?lat=' + data.coord.lat + '&lon=' + data.coord.lon + '&appid=' + apiKey + '&lang=ru&units=metric&exclude=minutely,daily,alerts'))
                    .then(resp => resp.json())
                    .then(data => resovle(data))

    })
}