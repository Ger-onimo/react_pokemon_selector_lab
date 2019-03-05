import React from "react";

class PokemonContainer extends React.Component {
  constructor(props){
      super(props);
      this.state = {
          pokemons: [],
          currentPokemon: null
      }
// bind goes here
  }

componentDidMount() {
    const url = "https://pokeapi.co/api/v2/pokemon/?limit=151";
    fetch(url)
    .then(res => res.json())
    .then(data => this.setState({pokemons: data}))
}




  
    render(){
        return (
          <div>
            <h2>Pokemon Container</h2>
            <PokemonSelector pokemons={this.state.pokemons}/>
            <PokemonDetail/>
          </div>
        )
    }
}

export default PokemonContainer;