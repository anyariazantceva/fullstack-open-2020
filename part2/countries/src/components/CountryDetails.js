import React from "react";
import Weather from "./Weather";

const CountryDetails = ({ country, weather }) => {
  return (
    <>
      <h1>{country.name}</h1>
      <p>Capital: {country.capital}</p>
      <p>Population: {country.population}</p>
      <p>Languages: </p>
      <ul>
        {country.languages.map((language) => {
          return <li key={language.name}>{language.name}</li>;
        })}
      </ul>
      <img className="country-flag" src={country.flag} alt={country.flag} />
      {weather ? <Weather weather={weather} /> : ""}
    </>
  );
};
export default CountryDetails;
