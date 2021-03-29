const express = require('express');
const weatherApi = require('./apiService');

const weatherApp = express();
const port = 3000;

weatherApp.get('/', (req, res) => {
    res.send('OK')
})

weatherApp.listen(port, () => {
    console.log(`Server works at http://localhost:${port}`)
});

weatherApp.get('/weather/current', weatherApi.getCurrentWeather)

weatherApp.get('/weather/forecast/6h' , weatherApi.get6HWeather)
