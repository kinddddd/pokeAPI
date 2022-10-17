const baseUrl = "https://pokeapi.co/api/v2/pokemon/";

const POKEDEX = [];

async function fetchPokemons() {
  const pokemonsToFetch = [...new Array(150)].map((el, index) => index + 1);
  for(const index of pokemonsToFetch) {
    const response = await fetch(baseUrl + index);
    const result = await response.json();
    POKEDEX.push(result);
  }
  
  for (const pokemon of POKEDEX) {
    const olista$$ = document.querySelector('#pokedex');
    const li$$ = document.createElement('li');
    const img$$ = document.createElement('img');
    const ptitle$$ = document.createElement('span');
    const abilities$$ = document.createElement('p');
    const height$$ = document.createElement('p');
    const hp$$ = document.createElement('p');
    const attack$$ = document.createElement('p');
    const defense$$ = document.createElement('p');
    const specialAttack$$ = document.createElement('p');
    const specialDefense$$ = document.createElement('p');
    const speed$$ = document.createElement('p');
    const types$$ = document.createElement('p');



    const abilities = [];
    for (const habilidades of pokemon.abilities) {
        abilities.push(habilidades.ability.name);
    }

    const types = [];
    for (const tipos of pokemon.types) {
        types.push(tipos.type.name)
    }

    
    img$$.src = pokemon.sprites['front_default'];
    ptitle$$.textContent = pokemon.name;
    abilities$$.textContent = 'Abilities: ' + abilities.join(' | ');
    height$$.textContent = 'Height: ' + pokemon.height;
    hp$$.textContent = 'HP: ' + pokemon.stats[0]['base_stat'];
    attack$$.textContent = 'Attack: ' + pokemon.stats[1]['base_stat'];
    defense$$.textContent = 'Defense: ' + pokemon.stats[2]['base_stat'];
    specialAttack$$.textContent = 'Special attack: ' + pokemon.stats[3]['base_stat'];
    specialDefense$$.textContent = 'Special defense: ' + pokemon.stats[4]['base_stat'];
    types$$.textContent = 'Type: ' + types.join(' | ');




    li$$.classList.add('card');
    img$$.classList.add('card-image')
    ptitle$$.classList.add('card-title');
    abilities$$.classList.add('card-subtitle');
    height$$.classList.add('card-subtitle');
    hp$$.classList.add('card-subtitle');
    attack$$.classList.add('card-subtitle');
    defense$$.classList.add('card-subtitle');
    specialAttack$$.classList.add('card-subtitle');
    specialDefense$$.classList.add('card-subtitle');
    speed$$.classList.add('card-subtitle');
    types$$.classList.add('card-subtitle');


    if (types[0] === 'grass') {
        li$$.className = 'card-grass';
    } else if (types[0] === 'fire') {
        li$$.className = 'card-fire';
    } else if (types[0] === 'water') {
        li$$.className = 'card-water';
    } else if (types[0] === 'bug') {
        li$$.className = 'card-bug';
    } else if (types[0] === 'poison') {
        li$$.className = 'card-poison';
    } else if (types[0] === 'normal') {
        li$$.className = 'card';
    } else if (types[0] === 'electric') {
        li$$.className = 'card-electric';
    } else if (types[0] === 'ground') {
        li$$.className = 'card-ground';
    } else if (types[0] === 'fairy') {
        li$$.className = 'card-fairy';
    } else if (types[0] === 'fighting') {
        li$$.className = 'card-fighting';
    } else if (types[0] === 'psychic') {
        li$$.className = 'card-psychic';
    } else if (types[0] === 'rock') {
        li$$.className = 'card-rock';
    } else if (types[0] === 'steel') {
        li$$.className = 'card-steel';
    } else if (types[0] === 'ghost') {
        li$$.className = 'card-ghost';
    } else if (types[0] === 'dragon') {
        li$$.className = 'card-dragon';
    } else if (types[0] === 'ice') {
        li$$.className = 'card-ice';
    }


   

    li$$.appendChild(img$$);
    li$$.appendChild(ptitle$$);
    li$$.appendChild(height$$);
    li$$.appendChild(hp$$);
    li$$.appendChild(speed$$);
    li$$.appendChild(abilities$$);
    li$$.appendChild(attack$$);
    li$$.appendChild(defense$$);
    li$$.appendChild(specialAttack$$);
    li$$.appendChild(specialDefense$$);
    li$$.appendChild(types$$);
    olista$$.appendChild(li$$);
  }
}

fetchPokemons();