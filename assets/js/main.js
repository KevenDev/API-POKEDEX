const offset = 0
const limit = 10
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

function pokemonToHtml(pokemon){
  return `
  <li class="li_pokemon ${pokemon.type}">
    <span class="id_pokemon"> #${pokemon.number}</span>
    <span class="name_pokemon"> ${pokemon.name} </span>
    
    <div class="detail_pokemon">
      <ol class="types_pokemon">
        ${pokemon.types.map((type) => `<li class ="type ${type}">${type}</li>`).join('')}
      </ol>  
      <img src="${pokemon.photo}" 
      alt="${pokemon.name}" srcset="">
  </div>
</li>`
}

const pokemonList = document.querySelector('#pokemonList')

pokeApi.getPokemons().then((results) => {
  results.map((pokemon) =>{
    pokemonList.innerHTML += pokemonToHtml(pokemon)
  })
})


