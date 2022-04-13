const baseUrl = 'http://pokeapi.co/api/v2';
const query = {
  pokemon: 'pokemon',
  species: 'pokemon-species'
}

export async function fetchPokemon(pokemon) {
  console.log(`${baseUrl}/${query.pokemon}/${pokemon}`);
  return fetch(`${baseUrl}/${query.pokemon}/${pokemon}`)
}

export async function fetchPokemonDescription(pokemon) {
  console.log(`${baseUrl}/${query.species}/${pokemon}`);
  return fetch(`${baseUrl}/${query.species}/${pokemon}`)
};
