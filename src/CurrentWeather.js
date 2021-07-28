import React from 'react';
//import DateBuilder from './DateBuilder.js';
import './CurrentWeather.css';

function CurrentWeather(currentWeatherResult) {
    return (
        <div>
            {(typeof currentWeatherResult.weather.name != "undefined") ? ( /* return weather result on valid search */
                <div>
                    <div className="location-box">
                        <div className="location">
                            {currentWeatherResult.weather.name}, {currentWeatherResult.weather.sys?.country}
                        </div>
                        {/*<div className="date">
                            <DateBuilder />
                        </div>*/}
                    </div>
                    <div className="weather-box">
                        <div className="label">
                            Currently:
                        </div>
                        <div className="temperature">
                            {Math.round(currentWeatherResult.weather.main?.temp - 273.15)}ºc
                        </div>
                        <div className="weather-description">
                            {currentWeatherResult.weather.weather[0]?.description[0].toUpperCase() +
                                currentWeatherResult.weather.weather[0]?.description.substring(1)}
                        </div>
                    </div>
                </div>
            ) : ("") /* return empty on non-valid search */
            }
        </div>
    )
}

export default CurrentWeather;
