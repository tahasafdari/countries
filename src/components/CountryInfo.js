import React, { useState, useEffect } from "react";
import axios from "axios";

const CountryInfo = ({ country }) => {
    const [weatherInfo, setWeatherInfo] = useState({})
    const ACCESS_KEY = process.env.REACT_APP_API_KEY


    useEffect(() => {
        const ACCESS_KEY = process.env.REACT_APP_API_KEY
            axios
            .get(`https://api.openweathermap.org/data/2.5/weather?q=${country.capital.toLowerCase()}&units=metric&appid=${ACCESS_KEY}`)
            .then(response => {
                console.log('response data');
                const temperature = response.data.main.temp;
                console.log(temperature);
                const weatherObject = {
                    temperature: temperature
                }
                setWeatherInfo(weatherObject)
            })
    })



    return(
        <div>
            <h2>{country.name}</h2>
            <p>Capital: {country.capital}</p>
            <p>Population: {country.population}</p>
            <h3>Languages:</h3>
            <ul>
                {country.languages.map(language => (
                    <li key={language.name}>{language.name}</li>
                ))}
            </ul>
            <h3>Flag:</h3>
            <img src={country.flag} width={"200"}  alt={country.name}/>

            <h3>Weather in {country.capital}</h3>
            <p>Temperature:{weatherInfo.temperature} Celcius</p>


        </div>
    )

}

export default CountryInfo;