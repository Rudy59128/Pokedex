import PokemonCard from "./components/PokemonCard";

import "./App.css";
import { useState } from "react";

function App() {
  const [pokemon, setPokemon] = useState(0);
  const pokedex = {
    name: pokemonList[pokemon].name,
    imgSrc: pokemonList[pokemon].imgSrc,
  };

  function handleClick() {
    setPokemon(pokemon +1);
  }

  function prevClick() {
    setPokemon(pokemon -1);
  }

  return (
    <div>
      <PokemonCard pokemon={pokedex}/>
      {pokemon <= 0 ? (
        <span style={{ display: "none" }}></span>
      ) : (
        <button onClick={prevClick}>Précédent</button>
      )}
      {pokemon < pokemonList.length - 1 ? (
        <button onClick={handleClick}>Suivant</button>
      ) : (
        <span style={{ display: "none" }}></span>
      )}
    </div>
  );
}

const pokemonList = [
  {
    name: "Bulbasaur",
    imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "Charmander",
    imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "Squirtle",
    imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "Pikachu",
    imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "Mew",
  },
];

export default App;