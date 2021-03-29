const TelegramBot = require('node-telegram-bot-api');

const token = 'BOT_TOKEN_HERE';

const bot = new TelegramBot(token, {polling: true});

const chatIdHardcode = '339913854';

module.exports.sendCurrentWeather = weatherData => {
    bot.sendMessage(chatIdHardcode, weatherData.name + ', ' + weatherData.sys.country + '\n' + 
    'Погода ' + weatherData.weather[0].description + '\nТемпература: ' + Math.round(weatherData.main.temp) + '°, чувствуется как ' + 
    Math.round(weatherData.main.feels_like) + '°\nДавление: ' + weatherData.main.pressure + 'мм\n'
    + 'Влажность: ' + weatherData.main.humidity + '%\nВетер: ' + weatherData.wind.speed + 'м/сек')
}

module.exports.send6HWeather = weatherData => {

    bot.sendMessage(chatIdHardcode, 'Температура на 6 часов:\nТекущая: ' + Math.round(weatherData.current.temp) + '°\n' + 
    countTime(weatherData.hourly[1].dt) + ': ' + Math.round(weatherData.hourly[1].temp) + '°\n' +
    countTime(weatherData.hourly[2].dt) + ': ' + Math.round(weatherData.hourly[2].temp) + '°\n' +
    countTime(weatherData.hourly[3].dt) + ': ' + Math.round(weatherData.hourly[3].temp) + '°\n' +
    countTime(weatherData.hourly[4].dt) + ': ' + Math.round(weatherData.hourly[4].temp) + '°\n' +
    countTime(weatherData.hourly[5].dt) + ': ' + Math.round(weatherData.hourly[5].temp) + '°\n' +
    countTime(weatherData.hourly[6].dt) + ': ' + Math.round(weatherData.hourly[6].temp) + '°'
    )

}

function countTime(unix) {
    const date = new Date(unix * 1000);
    const hours = date.getHours();
    return hours + ':00'
}