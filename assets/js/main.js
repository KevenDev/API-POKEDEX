const offset = 0
const limit = 10
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

function pokemonToHtml(pokemon){
  return `
  <li class="li_pokemon">
    <span class="id_pokemon"> #001</span>
    <span class="name_pokemon"> ${pokemon.name} </span>
    
    <div class="detail_pokemon">
      <ol class="types_pokemon">
        <li class="type">grass</li>
        <li class="type">poison</li>
      </ol>
    
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" 
      alt="${pokemon.name}" srcset="">
  </div>
</li>`
}

const pokemonList = document.querySelector('#pokemonList')

fetch(url)
.then((res => res.json()))
.then((data) => {
  const results = data.results
  for (let i = 0; i < results.length; i++) {
    const pokemon = results[i];
    pokemonList.innerHTML += pokemonToHtml(pokemon)
  }
})

.catch((error) => {
  console.log(error)
})


