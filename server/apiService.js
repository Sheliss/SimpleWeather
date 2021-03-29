const balancerService = require('./BalancerService');
const botService = require('./BotApiWrapperService');

module.exports.getCurrentWeather = (req, res) => {
    const city = req.query.city;
    
    balancerService.getCurrentWeather(city)
        .then(data => botService.sendCurrentWeather(data))
        .then(res.send('OK'))
}

module.exports.get6HWeather = (req, res) => {
    const city = req.query.city;

    balancerService.get6HWeather(city)
        .then(data => botService.send6HWeather(data))
        .then(res.send('OK'))
}