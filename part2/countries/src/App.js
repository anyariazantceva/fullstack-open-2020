import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import axios from "axios";

function App() {
  const [value, setValue] = useState("");
  const [countries, setCountries] = useState([]);
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState({});
  const handleChange = (e) => {
    setValue(e.target.value);
    axios.get("https://restcountries.eu/rest/v2/all").then((response) => {
      const countries = response.data.filter((country) => {
        return country.name.toLowerCase().includes(value.toLowerCase());
      });
      setCountries(countries);
    });
  };
  const showDetails = (country) => {
    setShow(true);
    setSelected(country);
  };

  const List = () => {
    if (countries.length > 10) {
      return "Too many matches, please specify another filter";
    } else if (countries.length < 10 && countries.length > 1) {
      return countries.map((country) => {
        return (
          <div key={country.name}>
            <p>{country.name}</p>
            <button onClick={() => showDetails(country)}>Show</button>
          </div>
        );
      });
    } else if (countries.length === 0) {
      return "Search haven't launched yet!";
    }
  };
  const Details = (country) => {
    console.log(country);
    return (
      <div key={country.country.name}>
        <h1>{country.country.name}</h1>
        <p>Capital: {country.country.capital}</p>
        <p>Population: {country.country.population}</p>
        <ul>
          {country.country.languages.map((language) => {
            return <li>{language.name}</li>;
          })}
        </ul>
      </div>
    );
  };
  console.log(selected);

  return (
    <div className="App">
      <div>
        <label htmlFor="search">Find countries</label>
        <input type="text" id="search" value={value} onChange={handleChange} />
      </div>
      <div>
        {countries.length === 1 ? (
          countries.map((country) => <Details country={country} />)
        ) : (
          <List />
        )}
      </div>
      <div>{show ? <Details country={selected} /> : ""}</div>
    </div>
  );
}

export default App;
