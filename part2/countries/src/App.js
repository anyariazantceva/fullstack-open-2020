import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Filter from "./components/Filter";
import CountriesList from "./components/CountriesList";

function App() {
  const [value, setValue] = useState("");
  const [countries, setCountries] = useState([]);
  const [selected, setSelected] = useState(null);
  const [weather, setWeather] = useState(null);
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then((response) => {
      if (value !== "") {
        const filteredCountries = response.data.filter((country) => {
          return country.name.toLowerCase().includes(value.toLowerCase());
        });
        setCountries(filteredCountries);
      }
    });
  }, [value]);

  useEffect(() => {
    const url = "http://api.weatherstack.com/current";
    const key = process.env.REACT_APP_API_KEY;
    if (countries.length === 1) {
      axios
        .get(`${url}?access_key=${key}&query=${countries[0].capital}`)
        .then((response) => {
          setWeather(response.data);
        });
    }
    if (selected) {
      axios
        .get(`${url}?access_key=${key}&query=${selected.capital}`)
        .then((response) => {
          setWeather(response.data);
        });
    }
  }, [countries, selected]);

  const handleClick = (country) => {
    setSelected(country);
  };

  return (
    <div>
      <Filter value={value} handleChange={handleChange} />
      <CountriesList
        countries={countries}
        handleClick={handleClick}
        selected={selected}
        weather={weather}
      />
    </div>
  );
}

export default App;
