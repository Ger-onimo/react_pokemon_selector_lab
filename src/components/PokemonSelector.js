import React from "react";

const PokemonSelector = (props) => {
    const options = props.pokemons.map((pokemon, index) => {
      return <option value={index} key={index}>
      pokemon.name</option>
    })
    
}