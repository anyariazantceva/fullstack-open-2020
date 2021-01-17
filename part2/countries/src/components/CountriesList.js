import React from "react";
import CountryDetails from "./CountryDetails";

const CountriesList = ({ countries, handleClick, selected, weather }) => {
  if (countries.length > 10) {
    return <div>Too many matches, specify filter value</div>;
  } else if (countries.length > 1 && countries.length <= 10) {
    return (
      <div>
        <ul>
          {countries.map((country) => {
            return (
              <li key={country.name}>
                {country.name}
                <button onClick={() => handleClick(country)}>
                  Show details
                </button>
              </li>
            );
          })}
        </ul>
        {selected ? (
          <CountryDetails country={selected} weather={weather} />
        ) : (
          ""
        )}
      </div>
    );
  } else if (countries.length === 1) {
    return (
      <div>
        {countries.map((country) => {
          return (
            <CountryDetails
              key={country.name}
              country={country}
              weather={weather}
            />
          );
        })}
      </div>
    );
  } else {
    return <div>No results!</div>;
  }
};

export default CountriesList;
