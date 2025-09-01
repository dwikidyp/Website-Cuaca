/**
 * @license MIT
 * @fileoverview Menage all routes
 * 
 * 
 */

'use strict';

import { updateWeather, error404 } from "./app.js";

const defaultLocation = "#/weather?Lat=51.5073219&lon=-0.1276474"

const currentLocation = function () {

}

const searchedLocation = query => {

}

const routes = new Map([
    ["/current-location", currentLocation],
    ["/weather", searchedLocation]
]);

const checkHash = function () {

}

window.addEventListener("hashchange", checkHash);

window.addEventListener("load", function () {
    if (!window.location.hash) {
        window.location.hash = "#/current-location"
    }
});