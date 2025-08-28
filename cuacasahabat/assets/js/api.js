/**
 * @license MIT
 * @fileoverview All api related stuff like api_key, api request etc.
 * 
 * 
 */

'use strict';

const api_key = "a0291b401b7f7ffd26ccb4bda7ad8046";

/**
 * fetch data from server
 * @param {string} URL API url 
 * @param {Function} callback callback
 * 
 */

export const fetchData = function(URL, callback) {
    fetch('${URL}&appid=${api_key}').then(res => res.json()).then(data => callback(data));
}

export const url = {
    currentWeather(lat, lon) {
        return 'https://api.openweathermap.org/data/2.5/weather?${lat}&${lon}&units=metric'
    },
    forecast(lat, lon) {
        return 'https://api.openweathermap.org/data/2.5/forecast?${lat}&${lon}&units=metric'
    },
    airPollution(lat, lon) {
        return 'http://api.openweathermap.org/data/2.5/air_pollution?${lat}&${lon}'
    }
}
