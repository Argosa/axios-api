import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

const ImportButton = (props) => {

  return (
    <button onClick={props.getPokemons}>Get Pokemons</button>
  )
}

const DisplayPokemons = (props) => {
  return (
    <div>
      <ul>
        Names
        {props.pokemon.map((poke, i) => 
          <li key={i}>
            {poke.name}
          </li>
        )}
      </ul>
    </div>
  )
}

function App() {
  const [ pokemons, setPokemons] = useState([])
  const apiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=807&offset=30';
  const onClickHandler = () => {
    axios.get(apiUrl)
    .then((response) => {setPokemons(response.data.results)})
    .catch((error) => {console.log(error)})
    .then(() => {})
  }

  return (
    <div className="App">
      <ImportButton getPokemons={onClickHandler}/>
      <DisplayPokemons pokemon={pokemons} />
    </div>
  );
}

export default App;
