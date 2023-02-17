import { useState } from "react";

export default function SearchBar(props) {
  const [ingredientName, setIngredientName] = useState([]);

  return (
    <div className="header">
      <h2 className="invitation interestingFont">Search By Ingredient Name</h2>
      <div className="search">
        <input
          id="inputField"
          type="text"
          className="styled-border"
          value={ingredientName}
          onChange={(e) => setIngredientName(e.target.value)}
        />
        <div className="line">
          <p className="label">ingredient</p>
          <button
            type="button"
            onClick={props.updateIngredient(ingredientName)}
            className="interestingFont button styled-border"
          >
            SEARCH
          </button>
        </div>
      </div>
    </div>
  );
}
