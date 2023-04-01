let offset = 0
let limit = 51
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
const btn = document.querySelector('#btnMoreItens')
const filterInput = document.querySelector('#filterInput')

filterInput.addEventListener('keyup', () => {
  const filterText = filterInput.value.toLowerCase()
  const pokemonElements = document.querySelectorAll('.li_pokemon')

  pokemonElements.forEach(pokemonElement => {
    const name = pokemonElement.querySelector('.name_pokemon').textContent.toLowerCase()

    if (name.includes(filterText)) {
      pokemonElement.style.display = 'block'
    } else {
      pokemonElement.style.display = 'none'
    }
  })
})

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

function loadItens(offset,limit) {
  pokeApi.getPokemons(offset,limit).then((results) => {
    results.map((pokemon) =>{
      pokemonList.innerHTML += pokemonToHtml(pokemon)
    })
  })
}

loadItens(offset,limit)

btn.addEventListener('click', ()=> {
  offset += limit
  loadItens(offset,limit)
})


