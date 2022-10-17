const baseUrl = "https://pokeapi.co/api/v2/pokemon/";

const POKEDEX = [];

async function fetchPokemons() {
  const pokemonsToFetch = [...new Array(150)].map((el, index) => index + 1);
  console.log(pokemonsToFetch);
  for(const index of pokemonsToFetch) {
    const response = await fetch(baseUrl + index);
    const result = await response.json();
    POKEDEX.push(result);
  }
  
  for (const pokemon of POKEDEX) {
    const olista$$ = document.querySelector('#pokedex');
    const li$$ = document.createElement('li');
    const img$$ = document.createElement('img');
    const ptitle$$ = document.createElement('p');
    const abilities$$ = document.createElement('p');
    const height$$ = document.createElement('p');
    const stats$$ = document.createElement('p');
    const types$$ = document.createElement('p');



    const abilities = [];
    for (const habilidades of pokemon.abilities) {
        abilities.push(habilidades.ability.name);
    }



    
    img$$.src = pokemon.sprites['front_default'];
    ptitle$$.textContent = pokemon.name;
    abilities$$.textContent = 'Abilities: ' + abilities.join(' | ');
    height$$.textContent = 'Height: ' + pokemon.height;
    stats$$.textContent = 'Stats: ' + 
    

    li$$.classList.add('card');
    img$$.classList.add('card-image')
    ptitle$$.classList.add('card-title');
    abilities$$.classList.add('card-subtitle');
    height$$.classList.add('card-subtitle');
    stats$$.classList.add('card-subtitle');
    types$$.classList.add('card-subtitle');


   

    li$$.appendChild(img$$);
    li$$.appendChild(ptitle$$);
    li$$.appendChild(abilities$$);
    li$$.appendChild(height$$);
    li$$.appendChild(stats$$);
    li$$.appendChild(types$$);
    olista$$.appendChild(li$$);



  }
  










}

fetchPokemons();