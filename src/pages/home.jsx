import React from 'react';
import Search from '../components/Search';
import { fetchPokemon, fetchPokemonDescription } from '../services/getPokemon';
import { fetchShakespeareTranslation } from '../services/getShakespeareTranslation';
import PokemonData from '../components/PokemonData';
import { Spinner, Alert } from 'react-bootstrap';

const spinnerStyle = {
  width: '10rem',
  height: '10rem',
  borderWidth: '1rem',
};

const spinnerWrapperStyle = {
  textAlign: 'center',
  marginTop: '50px',
}

export default function HomePage() {

  const [pokemon, setPokemon] = React.useState();
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState('');

  
  const getPokemon = async (query) => {
    if (!query) {
      setErrorMsg('You must enter a valid Pokemon name');
      setError(true);
      return;
    }
    setError(false);
    setLoading(true);
    setTimeout(async () => {
      try {
    const[response, response2] = await Promise.all([fetchPokemon(query),fetchPokemonDescription(query)])
    const results = await response.json();
    const results2 = await response2.json();
    const finalResults = Object.assign(results,results2);
    const response3 = await fetchShakespeareTranslation(finalResults.flavor_text_entries[7].flavor_text);
    const results3 = await response3.json();
    const finalResults2 = Object.assign(finalResults,results3);
    setPokemon(finalResults2);
    setLoading(false);
      } catch (err) {
        setLoading(false);
        setError(true);
        setErrorMsg('Pokemon not found.');
      }
    }, 1500);
  }

  return (
    <div>
      <h1 style={{ textAlign: "center",}}>Welcome to the pokemon search engine</h1>
      {error ? (<Alert data-testid = "alert" variant='danger'>{errorMsg}</Alert>): null}
      <Search getPokemon={getPokemon} />
      {loading ? (
        <div style={spinnerWrapperStyle}>
          <Spinner style={spinnerStyle} animation="border" />
        </div>
      ) : null}
      {!loading && pokemon ? (
        <PokemonData
          name={pokemon.name}
          sprite={pokemon.sprites.front_default}
          description={pokemon.flavor_text_entries[7].flavor_text}
          descriptionShakespeare ={pokemon.contents.translated}
          />
      ): null}
    </div>
  )
}
