import React, { useState, useEffect } from "react";
import axios from "axios";

const CountryInfo = ({ country }) => {
    const [weatherInfo, setWeatherInfo] = useState({})
    const ACCESS_KEY = process.env.REACT_APP_API_KEY
    console.log(ACCESS_KEY)

    useEffect(() => {
        const ACCESS_KEY = process.env.REACT_APP_API_KEY
        axios
            .get(`http://api.weatherstack.com/current?access_key=${ACCESS_KEY}&query=${country.capital.toLowerCase()}&units=m`)
            .then(response => {
                console.log(response.data);
                const temperature = response.data.current.temperature;


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
            <img src={country.flag} width={"200"} />

            <h3>Weather in {country.capital}</h3>
            <p>Temperature:{weatherInfo.temperature} Celcius</p>


        </div>
    )

}

export default CountryInfo;