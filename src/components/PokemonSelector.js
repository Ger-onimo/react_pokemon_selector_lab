import React from "react";

const PokemonSelector = (props) => {
    const options = props.pokemons.map((pokemon, index) => {
      return <option value={index} key={index}>
      {pokemon.name}</option>
    })

    function handleChange(event){
        props.onPokemonSelected(event.target.value);
    }

    return(
        <select id="pokemon-selector" onChange={handleChange} defaultValue="default">
          <option disabled value="default">Choose a Pokemon...</option>
          {options}
        </select>
    )
}

export default PokemonSelector;