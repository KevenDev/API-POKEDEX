const pokeApi = {}

function modelPokemon(pokeDetail){
  const pokemon = new Pokemon()
  pokemon.number = pokeDetail.id
  pokemon.name = pokeDetail.name
  // converter tipo do pokemom em objeto
  // pegando o primeiro item do tipo e colocando como principal
  const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
  const [type] = types 
  pokemon.types = types
  pokemon.type = type
  pokemon.photo = pokeDetail.sprites.other.home.front_default

  return pokemon
}

pokeApi.getPokemonsDetails = (pokemon) => { 
  return fetch(pokemon.url)
  .then((res) => res.json())
  .then(modelPokemon)
}

pokeApi.getPokemons = (offset = 0, limit = 5) => { 
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}` 
  
  return fetch(url)
  .then((res => res.json()))
  .then((data) => data.results)
  .then((pokemons) => pokemons.map(pokeApi.getPokemonsDetails))
  .then((detailRequests) => Promise.all(detailRequests))
  .then((pokemonsDetails) => pokemonsDetails)
}