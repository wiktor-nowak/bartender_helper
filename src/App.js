import "./App.css";
import React, { useState } from "react";
import SearchBar from "./SearchBar";
import Display from "./Display";
import Axios from "axios-observable";

export default function App() {
  const [results, setResults] = useState([]);

  function updateSearch(query) {
    Axios.get(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${query}`
    ).subscribe((resp) => {
      setResults(resp.data);
    });
  }

  function showValue() {
    console.log(results);
  }

  return (
    <div className="App">
      <SearchBar updateIngredient={updateSearch} />
      <Display displayItem={results} />
      <button onClick={showValue}>A BUTTON</button>
    </div>
  );
}
