import React from "react";
import axios from "axios";

function Display(props) {
  const searchItem = props.displayItem.querry;
  console.log(props);

  let drinks = [];
  getCocktailByIngredient(searchItem);

  //   function OneTile(props) {
  //     const id = props.drink.idDrink;
  //     const description = props.drink.strDrink;
  //     const imageUrl = props.drink.strDrinkThumb + "/preview";

  //   return (
  //     <div className="pad">
  //       <img src={imageUrl} alt={description} />
  //       <p className="description"></p>
  //     </div>
  //   );
  // }

  function getCocktailByIngredient(querry) {
    drinks = axios
      .get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${querry}`)
      .then((result) => result.data.drinks)
      .catch((error) => console.log(error));
  }

  return (
    <div className="wrapper">
      <p>SUPER!</p>
    </div>
  );
}

export default Display;

//   function getCocktail(querry) {
//     axios
//       .get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${querry}`)
//       .then((result) => {
//         console.log(result.data);
//       })
//       .catch((error) => console.log(error));
//   }
