const baseUrl = "https://pokeapi.co/api/v2/pokemon/";

const POKEDEX = [];

async function fetchPokemons() {
  const pokemonsToFetch = [...new Array(150)].map((el, index) => index + 1);
  for(const index of pokemonsToFetch) {
    const response = await fetch(baseUrl + index);
    const result = await response.json();
    POKEDEX.push(result);
  }
  
  const button$$ = document.querySelector('button');
  const input$$ = document.querySelector('input');
  const olista$$ = document.querySelector('#pokedex');
  const div$$ = document.querySelector('.nav')


function allPokemon() {
    olista$$.innerHTML = '';
    for (const pokemon of POKEDEX) {
        const li$$ = document.createElement('li');
        const img$$ = document.createElement('img');
        const ptitle$$ = document.createElement('span');
        const abilities$$ = document.createElement('p');
        const height$$ = document.createElement('p');
        const weight$$ = document.createElement('p');
        const hp$$ = document.createElement('p');
        const attack$$ = document.createElement('p');
        const defense$$ = document.createElement('p');
        const specialAttack$$ = document.createElement('p');
        const specialDefense$$ = document.createElement('p');
        const speed$$ = document.createElement('p');
        const types$$ = document.createElement('p');



        const abilities = [];
            for (const habilidades of pokemon.abilities) {
                abilities.push(habilidades.ability.name.charAt(0).toUpperCase() + habilidades.ability.name.slice(1));
            }

        const types = [];
            for (const tipos of pokemon.types) {
                types.push(tipos.type.name.charAt(0).toUpperCase() + tipos.type.name.slice(1));
            }

        
        img$$.src = pokemon.sprites['front_default'];
        ptitle$$.textContent = pokemon.name;
        abilities$$.textContent = 'Abilities: ' + abilities.join(' / ');
        height$$.textContent = 'Height: ' + pokemon.height * 10 + ' cm';
        weight$$.textContent = 'Weight: ' + pokemon.weight / 10 + ' Kg';
        hp$$.textContent = 'HP: ' + pokemon.stats[0]['base_stat'];
        attack$$.textContent = 'Attack: ' + pokemon.stats[1]['base_stat'];
        defense$$.textContent = 'Defense: ' + pokemon.stats[2]['base_stat'];
        specialAttack$$.textContent = 'Special attack: ' + pokemon.stats[3]['base_stat'];
        specialDefense$$.textContent = 'Special defense: ' + pokemon.stats[4]['base_stat'];
        speed$$.textContent = 'Speed: ' + pokemon.stats[5]['base_stat'];
        types$$.textContent = 'Type: ' + types.join(' / ');




        li$$.classList.add('card');
        img$$.classList.add('card-image')
        ptitle$$.classList.add('card-title');
        abilities$$.classList.add('card-subtitle');
        height$$.classList.add('card-subtitle');
        weight$$.classList.add('card-subtitle');
        hp$$.classList.add('card-subtitle');
        attack$$.classList.add('card-subtitle');
        defense$$.classList.add('card-subtitle');
        specialAttack$$.classList.add('card-subtitle');
        specialDefense$$.classList.add('card-subtitle');
        speed$$.classList.add('card-subtitle');
        types$$.classList.add('card-subtitle');


        if (types[0] === 'Grass') {
            li$$.className = 'card-grass';
        } else if (types[0] === 'Fire') {
            li$$.className = 'card-fire';
        } else if (types[0] === 'Water') {
            li$$.className = 'card-water';
        } else if (types[0] === 'Bug') {
            li$$.className = 'card-bug';
        } else if (types[0] === 'Poison') {
            li$$.className = 'card-poison';
        } else if (types[0] === 'Normal') {
            li$$.className = 'card';
        } else if (types[0] === 'Electric') {
            li$$.className = 'card-electric';
        } else if (types[0] === 'Ground') {
            li$$.className = 'card-ground';
        } else if (types[0] === 'Fairy') {
            li$$.className = 'card-fairy';
        } else if (types[0] === 'Fighting') {
            li$$.className = 'card-fighting';
        } else if (types[0] === 'Psychic') {
            li$$.className = 'card-psychic';
        } else if (types[0] === 'Rock') {
            li$$.className = 'card-rock';
        } else if (types[0] === 'Steel') {
            li$$.className = 'card-steel';
        } else if (types[0] === 'Ghost') {
            li$$.className = 'card-ghost';
        } else if (types[0] === 'Dragon') {
            li$$.className = 'card-dragon';
        } else if (types[0] === 'Ice') {
            li$$.className = 'card-ice';
        }


    

        li$$.appendChild(img$$);
        li$$.appendChild(ptitle$$);
        li$$.appendChild(height$$);
        li$$.appendChild(weight$$);
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
 allPokemon();


 function onePokemon() {
    olista$$.innerHTML = '';
    for (const pokemon of POKEDEX) {
        if(input$$.value == pokemon.name || input$$.value == pokemon.types[0].type.name) {
            const li$$ = document.createElement('li');
            const img$$ = document.createElement('img');
            const ptitle$$ = document.createElement('span');
            const abilities$$ = document.createElement('p');
            const height$$ = document.createElement('p');
            const weight$$ = document.createElement('p');
            const hp$$ = document.createElement('p');
            const attack$$ = document.createElement('p');
            const defense$$ = document.createElement('p');
            const specialAttack$$ = document.createElement('p');
            const specialDefense$$ = document.createElement('p');
            const speed$$ = document.createElement('p');
            const types$$ = document.createElement('p');



            const abilities = [];
            for (const habilidades of pokemon.abilities) {
                abilities.push(habilidades.ability.name.charAt(0).toUpperCase() + habilidades.ability.name.slice(1));
            }

            const types = [];
            for (const tipos of pokemon.types) {
                types.push(tipos.type.name.charAt(0).toUpperCase() + tipos.type.name.slice(1));
            }

            
            img$$.src = pokemon.sprites['front_default'];
            ptitle$$.textContent = pokemon.name;
            abilities$$.textContent = 'Abilities: ' + abilities.join(' / ');
            height$$.textContent = 'Height: ' + pokemon.height * 10 + ' cm';
            weight$$.textContent = 'Weight: ' + pokemon.weight / 10 + ' Kg';
            hp$$.textContent = 'HP: ' + pokemon.stats[0]['base_stat'];
            attack$$.textContent = 'Attack: ' + pokemon.stats[1]['base_stat'];
            defense$$.textContent = 'Defense: ' + pokemon.stats[2]['base_stat'];
            specialAttack$$.textContent = 'Special attack: ' + pokemon.stats[3]['base_stat'];
            specialDefense$$.textContent = 'Special defense: ' + pokemon.stats[4]['base_stat'];
            speed$$.textContent = 'Speed: ' + pokemon.stats[5]['base_stat'];
            types$$.textContent = 'Type: ' + types.join(' / ');




            li$$.classList.add('card');
            img$$.classList.add('card-image')
            ptitle$$.classList.add('card-title');
            abilities$$.classList.add('card-subtitle');
            height$$.classList.add('card-subtitle');
            weight$$.classList.add('card-subtitle');
            hp$$.classList.add('card-subtitle');
            attack$$.classList.add('card-subtitle');
            defense$$.classList.add('card-subtitle');
            specialAttack$$.classList.add('card-subtitle');
            specialDefense$$.classList.add('card-subtitle');
            speed$$.classList.add('card-subtitle');
            types$$.classList.add('card-subtitle');


            if (types[0] === 'Grass') {
                li$$.className = 'card-grass';
            } else if (types[0] === 'Fire') {
                li$$.className = 'card-fire';
            } else if (types[0] === 'Water') {
                li$$.className = 'card-water';
            } else if (types[0] === 'Bug') {
                li$$.className = 'card-bug';
            } else if (types[0] === 'Poison') {
                li$$.className = 'card-poison';
            } else if (types[0] === 'Normal') {
                li$$.className = 'card';
            } else if (types[0] === 'Electric') {
                li$$.className = 'card-electric';
            } else if (types[0] === 'Ground') {
                li$$.className = 'card-ground';
            } else if (types[0] === 'Fairy') {
                li$$.className = 'card-fairy';
            } else if (types[0] === 'Fighting') {
                li$$.className = 'card-fighting';
            } else if (types[0] === 'Psychic') {
                li$$.className = 'card-psychic';
            } else if (types[0] === 'Rock') {
                li$$.className = 'card-rock';
            } else if (types[0] === 'Steel') {
                li$$.className = 'card-steel';
            } else if (types[0] === 'Ghost') {
                li$$.className = 'card-ghost';
            } else if (types[0] === 'Dragon') {
                li$$.className = 'card-dragon';
            } else if (types[0] === 'Ice') {
                li$$.className = 'card-ice';
            }


        

            li$$.appendChild(img$$);
            li$$.appendChild(ptitle$$);
            li$$.appendChild(height$$);
            li$$.appendChild(weight$$);
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
}

const search = (event) => {
    if (input$$.value.length > 0) {
        onePokemon();
    } else {
        allPokemon();
    }
}

button$$.addEventListener('click', search);



const icons$$ = document.querySelector('.icons');

const back$$ = document.createElement('img');
back$$.src = './icons/back.png';
back$$.addEventListener('click', allPokemon);
icons$$.appendChild(back$$);


const bug$$ = document.createElement('img');
bug$$.src = './icons/bug.svg';
bug$$.addEventListener('click', searchBug);
icons$$.appendChild(bug$$);


const dragon$$ = document.createElement('img');
dragon$$.src = './icons/dragon.svg';
dragon$$.addEventListener('click', searchDragon);
icons$$.appendChild(dragon$$);


const electric$$ = document.createElement('img');
electric$$.src = './icons/electric.svg';
electric$$.addEventListener('click', searchElectric);
icons$$.appendChild(electric$$);


const fairy$$ = document.createElement('img');
fairy$$.src = './icons/fairy.svg';
fairy$$.addEventListener('click', searchFairy);
icons$$.appendChild(fairy$$);


const fighting$$ = document.createElement('img');
fighting$$.src = './icons/fighting.svg';
fighting$$.addEventListener('click', searchFighting);
icons$$.appendChild(fighting$$);


const fire$$ = document.createElement('img');
fire$$.src = './icons/fire.svg';
fire$$.addEventListener('click', searchFire);
icons$$.appendChild(fire$$);


const flying$$ = document.createElement('img');
flying$$.src = './icons/flying.svg';
flying$$.addEventListener('click', searchFlying);
icons$$.appendChild(flying$$);


const ghost$$ = document.createElement('img');
ghost$$.src = './icons/ghost.svg';
ghost$$.addEventListener('click', searchGhost);
icons$$.appendChild(ghost$$);


const grass$$ = document.createElement('img');
grass$$.src = './icons/grass.svg';
grass$$.addEventListener('click', searchGrass);
icons$$.appendChild(grass$$);


const ground$$ = document.createElement('img');
ground$$.src = './icons/ground.svg';
ground$$.addEventListener('click', searchGround);
icons$$.appendChild(ground$$);


const ice$$ = document.createElement('img');
ice$$.src = './icons/ice.svg';
ice$$.addEventListener('click', searchIce);
icons$$.appendChild(ice$$);


const normal$$ = document.createElement('img');
normal$$.src = './icons/normal.svg';
normal$$.addEventListener('click', searchNormal);
icons$$.appendChild(normal$$);


const poison$$ = document.createElement('img');
poison$$.src = './icons/poison.svg';
poison$$.addEventListener('click', searchPoison);
icons$$.appendChild(poison$$);


const psychic$$ = document.createElement('img');
psychic$$.src = './icons/psychic.svg';
psychic$$.addEventListener('click', searchPsychic);
icons$$.appendChild(psychic$$);


const rock$$ = document.createElement('img');
rock$$.src = './icons/rock.svg';
rock$$.addEventListener('click', searchRock);
icons$$.appendChild(rock$$);


const steel$$ = document.createElement('img');
steel$$.src = './icons/steel.svg';
steel$$.addEventListener('click', searchSteel);
icons$$.appendChild(steel$$);


const water$$ = document.createElement('img');
water$$.src = './icons/water.svg';
water$$.addEventListener('click', searchWater);
icons$$.appendChild(water$$);



function searchBug() {
    olista$$.innerHTML = '';
    for (const pokemon of POKEDEX) {
        if(pokemon.types[0].type.name == 'bug') {
            const li$$ = document.createElement('li');
            const img$$ = document.createElement('img');
            const ptitle$$ = document.createElement('span');
            const abilities$$ = document.createElement('p');
            const height$$ = document.createElement('p');
            const weight$$ = document.createElement('p');
            const hp$$ = document.createElement('p');
            const attack$$ = document.createElement('p');
            const defense$$ = document.createElement('p');
            const specialAttack$$ = document.createElement('p');
            const specialDefense$$ = document.createElement('p');
            const speed$$ = document.createElement('p');
            const types$$ = document.createElement('p');



            const abilities = [];
            for (const habilidades of pokemon.abilities) {
                abilities.push(habilidades.ability.name.charAt(0).toUpperCase() + habilidades.ability.name.slice(1));
            }

            const types = [];
            for (const tipos of pokemon.types) {
                types.push(tipos.type.name.charAt(0).toUpperCase() + tipos.type.name.slice(1));
            }

            
            img$$.src = pokemon.sprites['front_default'];
            ptitle$$.textContent = pokemon.name;
            abilities$$.textContent = 'Abilities: ' + abilities.join(' / ');
            height$$.textContent = 'Height: ' + pokemon.height * 10 + ' cm';
            weight$$.textContent = 'Weight: ' + pokemon.weight / 10 + ' Kg';
            hp$$.textContent = 'HP: ' + pokemon.stats[0]['base_stat'];
            attack$$.textContent = 'Attack: ' + pokemon.stats[1]['base_stat'];
            defense$$.textContent = 'Defense: ' + pokemon.stats[2]['base_stat'];
            specialAttack$$.textContent = 'Special attack: ' + pokemon.stats[3]['base_stat'];
            specialDefense$$.textContent = 'Special defense: ' + pokemon.stats[4]['base_stat'];
            speed$$.textContent = 'Speed: ' + pokemon.stats[5]['base_stat'];
            types$$.textContent = 'Type: ' + types.join(' / ');




            li$$.classList.add('card');
            img$$.classList.add('card-image')
            ptitle$$.classList.add('card-title');
            abilities$$.classList.add('card-subtitle');
            height$$.classList.add('card-subtitle');
            weight$$.classList.add('card-subtitle');
            hp$$.classList.add('card-subtitle');
            attack$$.classList.add('card-subtitle');
            defense$$.classList.add('card-subtitle');
            specialAttack$$.classList.add('card-subtitle');
            specialDefense$$.classList.add('card-subtitle');
            speed$$.classList.add('card-subtitle');
            types$$.classList.add('card-subtitle');


            if (types[0] === 'Grass') {
                li$$.className = 'card-grass';
            } else if (types[0] === 'Fire') {
                li$$.className = 'card-fire';
            } else if (types[0] === 'Water') {
                li$$.className = 'card-water';
            } else if (types[0] === 'Bug') {
                li$$.className = 'card-bug';
            } else if (types[0] === 'Poison') {
                li$$.className = 'card-poison';
            } else if (types[0] === 'Normal') {
                li$$.className = 'card';
            } else if (types[0] === 'Electric') {
                li$$.className = 'card-electric';
            } else if (types[0] === 'Ground') {
                li$$.className = 'card-ground';
            } else if (types[0] === 'Fairy') {
                li$$.className = 'card-fairy';
            } else if (types[0] === 'Fighting') {
                li$$.className = 'card-fighting';
            } else if (types[0] === 'Psychic') {
                li$$.className = 'card-psychic';
            } else if (types[0] === 'Rock') {
                li$$.className = 'card-rock';
            } else if (types[0] === 'Steel') {
                li$$.className = 'card-steel';
            } else if (types[0] === 'Ghost') {
                li$$.className = 'card-ghost';
            } else if (types[0] === 'Dragon') {
                li$$.className = 'card-dragon';
            } else if (types[0] === 'Ice') {
                li$$.className = 'card-ice';
            }


        

            li$$.appendChild(img$$);
            li$$.appendChild(ptitle$$);
            li$$.appendChild(height$$);
            li$$.appendChild(weight$$);
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
}



function searchDragon() {
    olista$$.innerHTML = '';
    for (const pokemon of POKEDEX) {
        if(pokemon.types[0].type.name == 'dragon') {
            const li$$ = document.createElement('li');
            const img$$ = document.createElement('img');
            const ptitle$$ = document.createElement('span');
            const abilities$$ = document.createElement('p');
            const height$$ = document.createElement('p');
            const weight$$ = document.createElement('p');
            const hp$$ = document.createElement('p');
            const attack$$ = document.createElement('p');
            const defense$$ = document.createElement('p');
            const specialAttack$$ = document.createElement('p');
            const specialDefense$$ = document.createElement('p');
            const speed$$ = document.createElement('p');
            const types$$ = document.createElement('p');



            const abilities = [];
            for (const habilidades of pokemon.abilities) {
                abilities.push(habilidades.ability.name.charAt(0).toUpperCase() + habilidades.ability.name.slice(1));
            }

            const types = [];
            for (const tipos of pokemon.types) {
                types.push(tipos.type.name.charAt(0).toUpperCase() + tipos.type.name.slice(1));
            }

            
            img$$.src = pokemon.sprites['front_default'];
            ptitle$$.textContent = pokemon.name;
            abilities$$.textContent = 'Abilities: ' + abilities.join(' / ');
            height$$.textContent = 'Height: ' + pokemon.height * 10 + ' cm';
            weight$$.textContent = 'Weight: ' + pokemon.weight / 10 + ' Kg';
            hp$$.textContent = 'HP: ' + pokemon.stats[0]['base_stat'];
            attack$$.textContent = 'Attack: ' + pokemon.stats[1]['base_stat'];
            defense$$.textContent = 'Defense: ' + pokemon.stats[2]['base_stat'];
            specialAttack$$.textContent = 'Special attack: ' + pokemon.stats[3]['base_stat'];
            specialDefense$$.textContent = 'Special defense: ' + pokemon.stats[4]['base_stat'];
            speed$$.textContent = 'Speed: ' + pokemon.stats[5]['base_stat'];
            types$$.textContent = 'Type: ' + types.join(' / ');




            li$$.classList.add('card');
            img$$.classList.add('card-image')
            ptitle$$.classList.add('card-title');
            abilities$$.classList.add('card-subtitle');
            height$$.classList.add('card-subtitle');
            weight$$.classList.add('card-subtitle');
            hp$$.classList.add('card-subtitle');
            attack$$.classList.add('card-subtitle');
            defense$$.classList.add('card-subtitle');
            specialAttack$$.classList.add('card-subtitle');
            specialDefense$$.classList.add('card-subtitle');
            speed$$.classList.add('card-subtitle');
            types$$.classList.add('card-subtitle');


            if (types[0] === 'Grass') {
                li$$.className = 'card-grass';
            } else if (types[0] === 'Fire') {
                li$$.className = 'card-fire';
            } else if (types[0] === 'Water') {
                li$$.className = 'card-water';
            } else if (types[0] === 'Bug') {
                li$$.className = 'card-bug';
            } else if (types[0] === 'Poison') {
                li$$.className = 'card-poison';
            } else if (types[0] === 'Normal') {
                li$$.className = 'card';
            } else if (types[0] === 'Electric') {
                li$$.className = 'card-electric';
            } else if (types[0] === 'Ground') {
                li$$.className = 'card-ground';
            } else if (types[0] === 'Fairy') {
                li$$.className = 'card-fairy';
            } else if (types[0] === 'Fighting') {
                li$$.className = 'card-fighting';
            } else if (types[0] === 'Psychic') {
                li$$.className = 'card-psychic';
            } else if (types[0] === 'Rock') {
                li$$.className = 'card-rock';
            } else if (types[0] === 'Steel') {
                li$$.className = 'card-steel';
            } else if (types[0] === 'Ghost') {
                li$$.className = 'card-ghost';
            } else if (types[0] === 'Dragon') {
                li$$.className = 'card-dragon';
            } else if (types[0] === 'Ice') {
                li$$.className = 'card-ice';
            }


        

            li$$.appendChild(img$$);
            li$$.appendChild(ptitle$$);
            li$$.appendChild(height$$);
            li$$.appendChild(weight$$);
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
}



function searchElectric() {
    olista$$.innerHTML = '';
    for (const pokemon of POKEDEX) {
        if(pokemon.types[0].type.name == 'electric') {
            const li$$ = document.createElement('li');
            const img$$ = document.createElement('img');
            const ptitle$$ = document.createElement('span');
            const abilities$$ = document.createElement('p');
            const height$$ = document.createElement('p');
            const weight$$ = document.createElement('p');
            const hp$$ = document.createElement('p');
            const attack$$ = document.createElement('p');
            const defense$$ = document.createElement('p');
            const specialAttack$$ = document.createElement('p');
            const specialDefense$$ = document.createElement('p');
            const speed$$ = document.createElement('p');
            const types$$ = document.createElement('p');



            const abilities = [];
            for (const habilidades of pokemon.abilities) {
                abilities.push(habilidades.ability.name.charAt(0).toUpperCase() + habilidades.ability.name.slice(1));
            }

            const types = [];
            for (const tipos of pokemon.types) {
                types.push(tipos.type.name.charAt(0).toUpperCase() + tipos.type.name.slice(1));
            }

            
            img$$.src = pokemon.sprites['front_default'];
            ptitle$$.textContent = pokemon.name;
            abilities$$.textContent = 'Abilities: ' + abilities.join(' / ');
            height$$.textContent = 'Height: ' + pokemon.height * 10 + ' cm';
            weight$$.textContent = 'Weight: ' + pokemon.weight / 10 + ' Kg';
            hp$$.textContent = 'HP: ' + pokemon.stats[0]['base_stat'];
            attack$$.textContent = 'Attack: ' + pokemon.stats[1]['base_stat'];
            defense$$.textContent = 'Defense: ' + pokemon.stats[2]['base_stat'];
            specialAttack$$.textContent = 'Special attack: ' + pokemon.stats[3]['base_stat'];
            specialDefense$$.textContent = 'Special defense: ' + pokemon.stats[4]['base_stat'];
            speed$$.textContent = 'Speed: ' + pokemon.stats[5]['base_stat'];
            types$$.textContent = 'Type: ' + types.join(' / ');




            li$$.classList.add('card');
            img$$.classList.add('card-image')
            ptitle$$.classList.add('card-title');
            abilities$$.classList.add('card-subtitle');
            height$$.classList.add('card-subtitle');
            weight$$.classList.add('card-subtitle');
            hp$$.classList.add('card-subtitle');
            attack$$.classList.add('card-subtitle');
            defense$$.classList.add('card-subtitle');
            specialAttack$$.classList.add('card-subtitle');
            specialDefense$$.classList.add('card-subtitle');
            speed$$.classList.add('card-subtitle');
            types$$.classList.add('card-subtitle');


            if (types[0] === 'Grass') {
                li$$.className = 'card-grass';
            } else if (types[0] === 'Fire') {
                li$$.className = 'card-fire';
            } else if (types[0] === 'Water') {
                li$$.className = 'card-water';
            } else if (types[0] === 'Bug') {
                li$$.className = 'card-bug';
            } else if (types[0] === 'Poison') {
                li$$.className = 'card-poison';
            } else if (types[0] === 'Normal') {
                li$$.className = 'card';
            } else if (types[0] === 'Electric') {
                li$$.className = 'card-electric';
            } else if (types[0] === 'Ground') {
                li$$.className = 'card-ground';
            } else if (types[0] === 'Fairy') {
                li$$.className = 'card-fairy';
            } else if (types[0] === 'Fighting') {
                li$$.className = 'card-fighting';
            } else if (types[0] === 'Psychic') {
                li$$.className = 'card-psychic';
            } else if (types[0] === 'Rock') {
                li$$.className = 'card-rock';
            } else if (types[0] === 'Steel') {
                li$$.className = 'card-steel';
            } else if (types[0] === 'Ghost') {
                li$$.className = 'card-ghost';
            } else if (types[0] === 'Dragon') {
                li$$.className = 'card-dragon';
            } else if (types[0] === 'Ice') {
                li$$.className = 'card-ice';
            }


        

            li$$.appendChild(img$$);
            li$$.appendChild(ptitle$$);
            li$$.appendChild(height$$);
            li$$.appendChild(weight$$);
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
}


function searchFairy() {
    olista$$.innerHTML = '';
    for (const pokemon of POKEDEX) {
        if(pokemon.types[0].type.name == 'fairy') {
            const li$$ = document.createElement('li');
            const img$$ = document.createElement('img');
            const ptitle$$ = document.createElement('span');
            const abilities$$ = document.createElement('p');
            const height$$ = document.createElement('p');
            const weight$$ = document.createElement('p');
            const hp$$ = document.createElement('p');
            const attack$$ = document.createElement('p');
            const defense$$ = document.createElement('p');
            const specialAttack$$ = document.createElement('p');
            const specialDefense$$ = document.createElement('p');
            const speed$$ = document.createElement('p');
            const types$$ = document.createElement('p');



            const abilities = [];
            for (const habilidades of pokemon.abilities) {
                abilities.push(habilidades.ability.name.charAt(0).toUpperCase() + habilidades.ability.name.slice(1));
            }

            const types = [];
            for (const tipos of pokemon.types) {
                types.push(tipos.type.name.charAt(0).toUpperCase() + tipos.type.name.slice(1));
            }

            
            img$$.src = pokemon.sprites['front_default'];
            ptitle$$.textContent = pokemon.name;
            abilities$$.textContent = 'Abilities: ' + abilities.join(' / ');
            height$$.textContent = 'Height: ' + pokemon.height * 10 + ' cm';
            weight$$.textContent = 'Weight: ' + pokemon.weight / 10 + ' Kg';
            hp$$.textContent = 'HP: ' + pokemon.stats[0]['base_stat'];
            attack$$.textContent = 'Attack: ' + pokemon.stats[1]['base_stat'];
            defense$$.textContent = 'Defense: ' + pokemon.stats[2]['base_stat'];
            specialAttack$$.textContent = 'Special attack: ' + pokemon.stats[3]['base_stat'];
            specialDefense$$.textContent = 'Special defense: ' + pokemon.stats[4]['base_stat'];
            speed$$.textContent = 'Speed: ' + pokemon.stats[5]['base_stat'];
            types$$.textContent = 'Type: ' + types.join(' / ');




            li$$.classList.add('card');
            img$$.classList.add('card-image')
            ptitle$$.classList.add('card-title');
            abilities$$.classList.add('card-subtitle');
            height$$.classList.add('card-subtitle');
            weight$$.classList.add('card-subtitle');
            hp$$.classList.add('card-subtitle');
            attack$$.classList.add('card-subtitle');
            defense$$.classList.add('card-subtitle');
            specialAttack$$.classList.add('card-subtitle');
            specialDefense$$.classList.add('card-subtitle');
            speed$$.classList.add('card-subtitle');
            types$$.classList.add('card-subtitle');


            if (types[0] === 'Grass') {
                li$$.className = 'card-grass';
            } else if (types[0] === 'Fire') {
                li$$.className = 'card-fire';
            } else if (types[0] === 'Water') {
                li$$.className = 'card-water';
            } else if (types[0] === 'Bug') {
                li$$.className = 'card-bug';
            } else if (types[0] === 'Poison') {
                li$$.className = 'card-poison';
            } else if (types[0] === 'Normal') {
                li$$.className = 'card';
            } else if (types[0] === 'Electric') {
                li$$.className = 'card-electric';
            } else if (types[0] === 'Ground') {
                li$$.className = 'card-ground';
            } else if (types[0] === 'Fairy') {
                li$$.className = 'card-fairy';
            } else if (types[0] === 'Fighting') {
                li$$.className = 'card-fighting';
            } else if (types[0] === 'Psychic') {
                li$$.className = 'card-psychic';
            } else if (types[0] === 'Rock') {
                li$$.className = 'card-rock';
            } else if (types[0] === 'Steel') {
                li$$.className = 'card-steel';
            } else if (types[0] === 'Ghost') {
                li$$.className = 'card-ghost';
            } else if (types[0] === 'Dragon') {
                li$$.className = 'card-dragon';
            } else if (types[0] === 'Ice') {
                li$$.className = 'card-ice';
            }


        

            li$$.appendChild(img$$);
            li$$.appendChild(ptitle$$);
            li$$.appendChild(height$$);
            li$$.appendChild(weight$$);
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
}


function searchFighting() {
    olista$$.innerHTML = '';
    for (const pokemon of POKEDEX) {
        if(pokemon.types[0].type.name == 'fighting') {
            const li$$ = document.createElement('li');
            const img$$ = document.createElement('img');
            const ptitle$$ = document.createElement('span');
            const abilities$$ = document.createElement('p');
            const height$$ = document.createElement('p');
            const weight$$ = document.createElement('p');
            const hp$$ = document.createElement('p');
            const attack$$ = document.createElement('p');
            const defense$$ = document.createElement('p');
            const specialAttack$$ = document.createElement('p');
            const specialDefense$$ = document.createElement('p');
            const speed$$ = document.createElement('p');
            const types$$ = document.createElement('p');



            const abilities = [];
            for (const habilidades of pokemon.abilities) {
                abilities.push(habilidades.ability.name.charAt(0).toUpperCase() + habilidades.ability.name.slice(1));
            }

            const types = [];
            for (const tipos of pokemon.types) {
                types.push(tipos.type.name.charAt(0).toUpperCase() + tipos.type.name.slice(1));
            }

            
            img$$.src = pokemon.sprites['front_default'];
            ptitle$$.textContent = pokemon.name;
            abilities$$.textContent = 'Abilities: ' + abilities.join(' / ');
            height$$.textContent = 'Height: ' + pokemon.height * 10 + ' cm';
            weight$$.textContent = 'Weight: ' + pokemon.weight / 10 + ' Kg';
            hp$$.textContent = 'HP: ' + pokemon.stats[0]['base_stat'];
            attack$$.textContent = 'Attack: ' + pokemon.stats[1]['base_stat'];
            defense$$.textContent = 'Defense: ' + pokemon.stats[2]['base_stat'];
            specialAttack$$.textContent = 'Special attack: ' + pokemon.stats[3]['base_stat'];
            specialDefense$$.textContent = 'Special defense: ' + pokemon.stats[4]['base_stat'];
            speed$$.textContent = 'Speed: ' + pokemon.stats[5]['base_stat'];
            types$$.textContent = 'Type: ' + types.join(' / ');




            li$$.classList.add('card');
            img$$.classList.add('card-image')
            ptitle$$.classList.add('card-title');
            abilities$$.classList.add('card-subtitle');
            height$$.classList.add('card-subtitle');
            weight$$.classList.add('card-subtitle');
            hp$$.classList.add('card-subtitle');
            attack$$.classList.add('card-subtitle');
            defense$$.classList.add('card-subtitle');
            specialAttack$$.classList.add('card-subtitle');
            specialDefense$$.classList.add('card-subtitle');
            speed$$.classList.add('card-subtitle');
            types$$.classList.add('card-subtitle');


            if (types[0] === 'Grass') {
                li$$.className = 'card-grass';
            } else if (types[0] === 'Fire') {
                li$$.className = 'card-fire';
            } else if (types[0] === 'Water') {
                li$$.className = 'card-water';
            } else if (types[0] === 'Bug') {
                li$$.className = 'card-bug';
            } else if (types[0] === 'Poison') {
                li$$.className = 'card-poison';
            } else if (types[0] === 'Normal') {
                li$$.className = 'card';
            } else if (types[0] === 'Electric') {
                li$$.className = 'card-electric';
            } else if (types[0] === 'Ground') {
                li$$.className = 'card-ground';
            } else if (types[0] === 'Fairy') {
                li$$.className = 'card-fairy';
            } else if (types[0] === 'Fighting') {
                li$$.className = 'card-fighting';
            } else if (types[0] === 'Psychic') {
                li$$.className = 'card-psychic';
            } else if (types[0] === 'Rock') {
                li$$.className = 'card-rock';
            } else if (types[0] === 'Steel') {
                li$$.className = 'card-steel';
            } else if (types[0] === 'Ghost') {
                li$$.className = 'card-ghost';
            } else if (types[0] === 'Dragon') {
                li$$.className = 'card-dragon';
            } else if (types[0] === 'Ice') {
                li$$.className = 'card-ice';
            }


        

            li$$.appendChild(img$$);
            li$$.appendChild(ptitle$$);
            li$$.appendChild(height$$);
            li$$.appendChild(weight$$);
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
}


function searchFire() {
    olista$$.innerHTML = '';
    for (const pokemon of POKEDEX) {
        if(pokemon.types[0].type.name == 'fire') {
            const li$$ = document.createElement('li');
            const img$$ = document.createElement('img');
            const ptitle$$ = document.createElement('span');
            const abilities$$ = document.createElement('p');
            const height$$ = document.createElement('p');
            const weight$$ = document.createElement('p');
            const hp$$ = document.createElement('p');
            const attack$$ = document.createElement('p');
            const defense$$ = document.createElement('p');
            const specialAttack$$ = document.createElement('p');
            const specialDefense$$ = document.createElement('p');
            const speed$$ = document.createElement('p');
            const types$$ = document.createElement('p');



            const abilities = [];
            for (const habilidades of pokemon.abilities) {
                abilities.push(habilidades.ability.name.charAt(0).toUpperCase() + habilidades.ability.name.slice(1));
            }

            const types = [];
            for (const tipos of pokemon.types) {
                types.push(tipos.type.name.charAt(0).toUpperCase() + tipos.type.name.slice(1));
            }

            
            img$$.src = pokemon.sprites['front_default'];
            ptitle$$.textContent = pokemon.name;
            abilities$$.textContent = 'Abilities: ' + abilities.join(' / ');
            height$$.textContent = 'Height: ' + pokemon.height * 10 + ' cm';
            weight$$.textContent = 'Weight: ' + pokemon.weight / 10 + ' Kg';
            hp$$.textContent = 'HP: ' + pokemon.stats[0]['base_stat'];
            attack$$.textContent = 'Attack: ' + pokemon.stats[1]['base_stat'];
            defense$$.textContent = 'Defense: ' + pokemon.stats[2]['base_stat'];
            specialAttack$$.textContent = 'Special attack: ' + pokemon.stats[3]['base_stat'];
            specialDefense$$.textContent = 'Special defense: ' + pokemon.stats[4]['base_stat'];
            speed$$.textContent = 'Speed: ' + pokemon.stats[5]['base_stat'];
            types$$.textContent = 'Type: ' + types.join(' / ');




            li$$.classList.add('card');
            img$$.classList.add('card-image')
            ptitle$$.classList.add('card-title');
            abilities$$.classList.add('card-subtitle');
            height$$.classList.add('card-subtitle');
            weight$$.classList.add('card-subtitle');
            hp$$.classList.add('card-subtitle');
            attack$$.classList.add('card-subtitle');
            defense$$.classList.add('card-subtitle');
            specialAttack$$.classList.add('card-subtitle');
            specialDefense$$.classList.add('card-subtitle');
            speed$$.classList.add('card-subtitle');
            types$$.classList.add('card-subtitle');


            if (types[0] === 'Grass') {
                li$$.className = 'card-grass';
            } else if (types[0] === 'Fire') {
                li$$.className = 'card-fire';
            } else if (types[0] === 'Water') {
                li$$.className = 'card-water';
            } else if (types[0] === 'Bug') {
                li$$.className = 'card-bug';
            } else if (types[0] === 'Poison') {
                li$$.className = 'card-poison';
            } else if (types[0] === 'Normal') {
                li$$.className = 'card';
            } else if (types[0] === 'Electric') {
                li$$.className = 'card-electric';
            } else if (types[0] === 'Ground') {
                li$$.className = 'card-ground';
            } else if (types[0] === 'Fairy') {
                li$$.className = 'card-fairy';
            } else if (types[0] === 'Fighting') {
                li$$.className = 'card-fighting';
            } else if (types[0] === 'Psychic') {
                li$$.className = 'card-psychic';
            } else if (types[0] === 'Rock') {
                li$$.className = 'card-rock';
            } else if (types[0] === 'Steel') {
                li$$.className = 'card-steel';
            } else if (types[0] === 'Ghost') {
                li$$.className = 'card-ghost';
            } else if (types[0] === 'Dragon') {
                li$$.className = 'card-dragon';
            } else if (types[0] === 'Ice') {
                li$$.className = 'card-ice';
            }


        

            li$$.appendChild(img$$);
            li$$.appendChild(ptitle$$);
            li$$.appendChild(height$$);
            li$$.appendChild(weight$$);
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
}


function searchFlying() {
    olista$$.innerHTML = '';
    for (const pokemon of POKEDEX) {
        if(pokemon.types[0].type.name == 'flying') {
            const li$$ = document.createElement('li');
            const img$$ = document.createElement('img');
            const ptitle$$ = document.createElement('span');
            const abilities$$ = document.createElement('p');
            const height$$ = document.createElement('p');
            const weight$$ = document.createElement('p');
            const hp$$ = document.createElement('p');
            const attack$$ = document.createElement('p');
            const defense$$ = document.createElement('p');
            const specialAttack$$ = document.createElement('p');
            const specialDefense$$ = document.createElement('p');
            const speed$$ = document.createElement('p');
            const types$$ = document.createElement('p');



            const abilities = [];
            for (const habilidades of pokemon.abilities) {
                abilities.push(habilidades.ability.name.charAt(0).toUpperCase() + habilidades.ability.name.slice(1));
            }

            const types = [];
            for (const tipos of pokemon.types) {
                types.push(tipos.type.name.charAt(0).toUpperCase() + tipos.type.name.slice(1));
            }

            
            img$$.src = pokemon.sprites['front_default'];
            ptitle$$.textContent = pokemon.name;
            abilities$$.textContent = 'Abilities: ' + abilities.join(' / ');
            height$$.textContent = 'Height: ' + pokemon.height * 10 + ' cm';
            weight$$.textContent = 'Weight: ' + pokemon.weight / 10 + ' Kg';
            hp$$.textContent = 'HP: ' + pokemon.stats[0]['base_stat'];
            attack$$.textContent = 'Attack: ' + pokemon.stats[1]['base_stat'];
            defense$$.textContent = 'Defense: ' + pokemon.stats[2]['base_stat'];
            specialAttack$$.textContent = 'Special attack: ' + pokemon.stats[3]['base_stat'];
            specialDefense$$.textContent = 'Special defense: ' + pokemon.stats[4]['base_stat'];
            speed$$.textContent = 'Speed: ' + pokemon.stats[5]['base_stat'];
            types$$.textContent = 'Type: ' + types.join(' / ');




            li$$.classList.add('card');
            img$$.classList.add('card-image')
            ptitle$$.classList.add('card-title');
            abilities$$.classList.add('card-subtitle');
            height$$.classList.add('card-subtitle');
            weight$$.classList.add('card-subtitle');
            hp$$.classList.add('card-subtitle');
            attack$$.classList.add('card-subtitle');
            defense$$.classList.add('card-subtitle');
            specialAttack$$.classList.add('card-subtitle');
            specialDefense$$.classList.add('card-subtitle');
            speed$$.classList.add('card-subtitle');
            types$$.classList.add('card-subtitle');


            if (types[0] === 'Grass') {
                li$$.className = 'card-grass';
            } else if (types[0] === 'Fire') {
                li$$.className = 'card-fire';
            } else if (types[0] === 'Water') {
                li$$.className = 'card-water';
            } else if (types[0] === 'Bug') {
                li$$.className = 'card-bug';
            } else if (types[0] === 'Poison') {
                li$$.className = 'card-poison';
            } else if (types[0] === 'Normal') {
                li$$.className = 'card';
            } else if (types[0] === 'Electric') {
                li$$.className = 'card-electric';
            } else if (types[0] === 'Ground') {
                li$$.className = 'card-ground';
            } else if (types[0] === 'Fairy') {
                li$$.className = 'card-fairy';
            } else if (types[0] === 'Fighting') {
                li$$.className = 'card-fighting';
            } else if (types[0] === 'Psychic') {
                li$$.className = 'card-psychic';
            } else if (types[0] === 'Rock') {
                li$$.className = 'card-rock';
            } else if (types[0] === 'Steel') {
                li$$.className = 'card-steel';
            } else if (types[0] === 'Ghost') {
                li$$.className = 'card-ghost';
            } else if (types[0] === 'Dragon') {
                li$$.className = 'card-dragon';
            } else if (types[0] === 'Ice') {
                li$$.className = 'card-ice';
            }


        

            li$$.appendChild(img$$);
            li$$.appendChild(ptitle$$);
            li$$.appendChild(height$$);
            li$$.appendChild(weight$$);
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
}


function searchGhost() {
    olista$$.innerHTML = '';
    for (const pokemon of POKEDEX) {
        if(pokemon.types[0].type.name == 'ghost') {
            const li$$ = document.createElement('li');
            const img$$ = document.createElement('img');
            const ptitle$$ = document.createElement('span');
            const abilities$$ = document.createElement('p');
            const height$$ = document.createElement('p');
            const weight$$ = document.createElement('p');
            const hp$$ = document.createElement('p');
            const attack$$ = document.createElement('p');
            const defense$$ = document.createElement('p');
            const specialAttack$$ = document.createElement('p');
            const specialDefense$$ = document.createElement('p');
            const speed$$ = document.createElement('p');
            const types$$ = document.createElement('p');



            const abilities = [];
            for (const habilidades of pokemon.abilities) {
                abilities.push(habilidades.ability.name.charAt(0).toUpperCase() + habilidades.ability.name.slice(1));
            }

            const types = [];
            for (const tipos of pokemon.types) {
                types.push(tipos.type.name.charAt(0).toUpperCase() + tipos.type.name.slice(1));
            }

            
            img$$.src = pokemon.sprites['front_default'];
            ptitle$$.textContent = pokemon.name;
            abilities$$.textContent = 'Abilities: ' + abilities.join(' / ');
            height$$.textContent = 'Height: ' + pokemon.height * 10 + ' cm';
            weight$$.textContent = 'Weight: ' + pokemon.weight / 10 + ' Kg';
            hp$$.textContent = 'HP: ' + pokemon.stats[0]['base_stat'];
            attack$$.textContent = 'Attack: ' + pokemon.stats[1]['base_stat'];
            defense$$.textContent = 'Defense: ' + pokemon.stats[2]['base_stat'];
            specialAttack$$.textContent = 'Special attack: ' + pokemon.stats[3]['base_stat'];
            specialDefense$$.textContent = 'Special defense: ' + pokemon.stats[4]['base_stat'];
            speed$$.textContent = 'Speed: ' + pokemon.stats[5]['base_stat'];
            types$$.textContent = 'Type: ' + types.join(' / ');




            li$$.classList.add('card');
            img$$.classList.add('card-image')
            ptitle$$.classList.add('card-title');
            abilities$$.classList.add('card-subtitle');
            height$$.classList.add('card-subtitle');
            weight$$.classList.add('card-subtitle');
            hp$$.classList.add('card-subtitle');
            attack$$.classList.add('card-subtitle');
            defense$$.classList.add('card-subtitle');
            specialAttack$$.classList.add('card-subtitle');
            specialDefense$$.classList.add('card-subtitle');
            speed$$.classList.add('card-subtitle');
            types$$.classList.add('card-subtitle');


            if (types[0] === 'Grass') {
                li$$.className = 'card-grass';
            } else if (types[0] === 'Fire') {
                li$$.className = 'card-fire';
            } else if (types[0] === 'Water') {
                li$$.className = 'card-water';
            } else if (types[0] === 'Bug') {
                li$$.className = 'card-bug';
            } else if (types[0] === 'Poison') {
                li$$.className = 'card-poison';
            } else if (types[0] === 'Normal') {
                li$$.className = 'card';
            } else if (types[0] === 'Electric') {
                li$$.className = 'card-electric';
            } else if (types[0] === 'Ground') {
                li$$.className = 'card-ground';
            } else if (types[0] === 'Fairy') {
                li$$.className = 'card-fairy';
            } else if (types[0] === 'Fighting') {
                li$$.className = 'card-fighting';
            } else if (types[0] === 'Psychic') {
                li$$.className = 'card-psychic';
            } else if (types[0] === 'Rock') {
                li$$.className = 'card-rock';
            } else if (types[0] === 'Steel') {
                li$$.className = 'card-steel';
            } else if (types[0] === 'Ghost') {
                li$$.className = 'card-ghost';
            } else if (types[0] === 'Dragon') {
                li$$.className = 'card-dragon';
            } else if (types[0] === 'Ice') {
                li$$.className = 'card-ice';
            }


        

            li$$.appendChild(img$$);
            li$$.appendChild(ptitle$$);
            li$$.appendChild(height$$);
            li$$.appendChild(weight$$);
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
}


function searchGrass() {
    olista$$.innerHTML = '';
    for (const pokemon of POKEDEX) {
        if(pokemon.types[0].type.name == 'grass') {
            const li$$ = document.createElement('li');
            const img$$ = document.createElement('img');
            const ptitle$$ = document.createElement('span');
            const abilities$$ = document.createElement('p');
            const height$$ = document.createElement('p');
            const weight$$ = document.createElement('p');
            const hp$$ = document.createElement('p');
            const attack$$ = document.createElement('p');
            const defense$$ = document.createElement('p');
            const specialAttack$$ = document.createElement('p');
            const specialDefense$$ = document.createElement('p');
            const speed$$ = document.createElement('p');
            const types$$ = document.createElement('p');



            const abilities = [];
            for (const habilidades of pokemon.abilities) {
                abilities.push(habilidades.ability.name.charAt(0).toUpperCase() + habilidades.ability.name.slice(1));
            }

            const types = [];
            for (const tipos of pokemon.types) {
                types.push(tipos.type.name.charAt(0).toUpperCase() + tipos.type.name.slice(1));
            }

            
            img$$.src = pokemon.sprites['front_default'];
            ptitle$$.textContent = pokemon.name;
            abilities$$.textContent = 'Abilities: ' + abilities.join(' / ');
            height$$.textContent = 'Height: ' + pokemon.height * 10 + ' cm';
            weight$$.textContent = 'Weight: ' + pokemon.weight / 10 + ' Kg';
            hp$$.textContent = 'HP: ' + pokemon.stats[0]['base_stat'];
            attack$$.textContent = 'Attack: ' + pokemon.stats[1]['base_stat'];
            defense$$.textContent = 'Defense: ' + pokemon.stats[2]['base_stat'];
            specialAttack$$.textContent = 'Special attack: ' + pokemon.stats[3]['base_stat'];
            specialDefense$$.textContent = 'Special defense: ' + pokemon.stats[4]['base_stat'];
            speed$$.textContent = 'Speed: ' + pokemon.stats[5]['base_stat'];
            types$$.textContent = 'Type: ' + types.join(' / ');




            li$$.classList.add('card');
            img$$.classList.add('card-image')
            ptitle$$.classList.add('card-title');
            abilities$$.classList.add('card-subtitle');
            height$$.classList.add('card-subtitle');
            weight$$.classList.add('card-subtitle');
            hp$$.classList.add('card-subtitle');
            attack$$.classList.add('card-subtitle');
            defense$$.classList.add('card-subtitle');
            specialAttack$$.classList.add('card-subtitle');
            specialDefense$$.classList.add('card-subtitle');
            speed$$.classList.add('card-subtitle');
            types$$.classList.add('card-subtitle');


            if (types[0] === 'Grass') {
                li$$.className = 'card-grass';
            } else if (types[0] === 'Fire') {
                li$$.className = 'card-fire';
            } else if (types[0] === 'Water') {
                li$$.className = 'card-water';
            } else if (types[0] === 'Bug') {
                li$$.className = 'card-bug';
            } else if (types[0] === 'Poison') {
                li$$.className = 'card-poison';
            } else if (types[0] === 'Normal') {
                li$$.className = 'card';
            } else if (types[0] === 'Electric') {
                li$$.className = 'card-electric';
            } else if (types[0] === 'Ground') {
                li$$.className = 'card-ground';
            } else if (types[0] === 'Fairy') {
                li$$.className = 'card-fairy';
            } else if (types[0] === 'Fighting') {
                li$$.className = 'card-fighting';
            } else if (types[0] === 'Psychic') {
                li$$.className = 'card-psychic';
            } else if (types[0] === 'Rock') {
                li$$.className = 'card-rock';
            } else if (types[0] === 'Steel') {
                li$$.className = 'card-steel';
            } else if (types[0] === 'Ghost') {
                li$$.className = 'card-ghost';
            } else if (types[0] === 'Dragon') {
                li$$.className = 'card-dragon';
            } else if (types[0] === 'Ice') {
                li$$.className = 'card-ice';
            }


        

            li$$.appendChild(img$$);
            li$$.appendChild(ptitle$$);
            li$$.appendChild(height$$);
            li$$.appendChild(weight$$);
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
}


function searchGround() {
    olista$$.innerHTML = '';
    for (const pokemon of POKEDEX) {
        if(pokemon.types[0].type.name == 'ground') {
            const li$$ = document.createElement('li');
            const img$$ = document.createElement('img');
            const ptitle$$ = document.createElement('span');
            const abilities$$ = document.createElement('p');
            const height$$ = document.createElement('p');
            const weight$$ = document.createElement('p');
            const hp$$ = document.createElement('p');
            const attack$$ = document.createElement('p');
            const defense$$ = document.createElement('p');
            const specialAttack$$ = document.createElement('p');
            const specialDefense$$ = document.createElement('p');
            const speed$$ = document.createElement('p');
            const types$$ = document.createElement('p');



            const abilities = [];
            for (const habilidades of pokemon.abilities) {
                abilities.push(habilidades.ability.name.charAt(0).toUpperCase() + habilidades.ability.name.slice(1));
            }

            const types = [];
            for (const tipos of pokemon.types) {
                types.push(tipos.type.name.charAt(0).toUpperCase() + tipos.type.name.slice(1));
            }

            
            img$$.src = pokemon.sprites['front_default'];
            ptitle$$.textContent = pokemon.name;
            abilities$$.textContent = 'Abilities: ' + abilities.join(' / ');
            height$$.textContent = 'Height: ' + pokemon.height * 10 + ' cm';
            weight$$.textContent = 'Weight: ' + pokemon.weight / 10 + ' Kg';
            hp$$.textContent = 'HP: ' + pokemon.stats[0]['base_stat'];
            attack$$.textContent = 'Attack: ' + pokemon.stats[1]['base_stat'];
            defense$$.textContent = 'Defense: ' + pokemon.stats[2]['base_stat'];
            specialAttack$$.textContent = 'Special attack: ' + pokemon.stats[3]['base_stat'];
            specialDefense$$.textContent = 'Special defense: ' + pokemon.stats[4]['base_stat'];
            speed$$.textContent = 'Speed: ' + pokemon.stats[5]['base_stat'];
            types$$.textContent = 'Type: ' + types.join(' / ');




            li$$.classList.add('card');
            img$$.classList.add('card-image')
            ptitle$$.classList.add('card-title');
            abilities$$.classList.add('card-subtitle');
            height$$.classList.add('card-subtitle');
            weight$$.classList.add('card-subtitle');
            hp$$.classList.add('card-subtitle');
            attack$$.classList.add('card-subtitle');
            defense$$.classList.add('card-subtitle');
            specialAttack$$.classList.add('card-subtitle');
            specialDefense$$.classList.add('card-subtitle');
            speed$$.classList.add('card-subtitle');
            types$$.classList.add('card-subtitle');


            if (types[0] === 'Grass') {
                li$$.className = 'card-grass';
            } else if (types[0] === 'Fire') {
                li$$.className = 'card-fire';
            } else if (types[0] === 'Water') {
                li$$.className = 'card-water';
            } else if (types[0] === 'Bug') {
                li$$.className = 'card-bug';
            } else if (types[0] === 'Poison') {
                li$$.className = 'card-poison';
            } else if (types[0] === 'Normal') {
                li$$.className = 'card';
            } else if (types[0] === 'Electric') {
                li$$.className = 'card-electric';
            } else if (types[0] === 'Ground') {
                li$$.className = 'card-ground';
            } else if (types[0] === 'Fairy') {
                li$$.className = 'card-fairy';
            } else if (types[0] === 'Fighting') {
                li$$.className = 'card-fighting';
            } else if (types[0] === 'Psychic') {
                li$$.className = 'card-psychic';
            } else if (types[0] === 'Rock') {
                li$$.className = 'card-rock';
            } else if (types[0] === 'Steel') {
                li$$.className = 'card-steel';
            } else if (types[0] === 'Ghost') {
                li$$.className = 'card-ghost';
            } else if (types[0] === 'Dragon') {
                li$$.className = 'card-dragon';
            } else if (types[0] === 'Ice') {
                li$$.className = 'card-ice';
            }


        

            li$$.appendChild(img$$);
            li$$.appendChild(ptitle$$);
            li$$.appendChild(height$$);
            li$$.appendChild(weight$$);
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
}


function searchIce() {
    olista$$.innerHTML = '';
    for (const pokemon of POKEDEX) {
        if(pokemon.types[0].type.name == 'ice') {
            const li$$ = document.createElement('li');
            const img$$ = document.createElement('img');
            const ptitle$$ = document.createElement('span');
            const abilities$$ = document.createElement('p');
            const height$$ = document.createElement('p');
            const weight$$ = document.createElement('p');
            const hp$$ = document.createElement('p');
            const attack$$ = document.createElement('p');
            const defense$$ = document.createElement('p');
            const specialAttack$$ = document.createElement('p');
            const specialDefense$$ = document.createElement('p');
            const speed$$ = document.createElement('p');
            const types$$ = document.createElement('p');



            const abilities = [];
            for (const habilidades of pokemon.abilities) {
                abilities.push(habilidades.ability.name.charAt(0).toUpperCase() + habilidades.ability.name.slice(1));
            }

            const types = [];
            for (const tipos of pokemon.types) {
                types.push(tipos.type.name.charAt(0).toUpperCase() + tipos.type.name.slice(1));
            }

            
            img$$.src = pokemon.sprites['front_default'];
            ptitle$$.textContent = pokemon.name;
            abilities$$.textContent = 'Abilities: ' + abilities.join(' / ');
            height$$.textContent = 'Height: ' + pokemon.height * 10 + ' cm';
            weight$$.textContent = 'Weight: ' + pokemon.weight / 10 + ' Kg';
            hp$$.textContent = 'HP: ' + pokemon.stats[0]['base_stat'];
            attack$$.textContent = 'Attack: ' + pokemon.stats[1]['base_stat'];
            defense$$.textContent = 'Defense: ' + pokemon.stats[2]['base_stat'];
            specialAttack$$.textContent = 'Special attack: ' + pokemon.stats[3]['base_stat'];
            specialDefense$$.textContent = 'Special defense: ' + pokemon.stats[4]['base_stat'];
            speed$$.textContent = 'Speed: ' + pokemon.stats[5]['base_stat'];
            types$$.textContent = 'Type: ' + types.join(' / ');




            li$$.classList.add('card');
            img$$.classList.add('card-image')
            ptitle$$.classList.add('card-title');
            abilities$$.classList.add('card-subtitle');
            height$$.classList.add('card-subtitle');
            weight$$.classList.add('card-subtitle');
            hp$$.classList.add('card-subtitle');
            attack$$.classList.add('card-subtitle');
            defense$$.classList.add('card-subtitle');
            specialAttack$$.classList.add('card-subtitle');
            specialDefense$$.classList.add('card-subtitle');
            speed$$.classList.add('card-subtitle');
            types$$.classList.add('card-subtitle');


            if (types[0] === 'Grass') {
                li$$.className = 'card-grass';
            } else if (types[0] === 'Fire') {
                li$$.className = 'card-fire';
            } else if (types[0] === 'Water') {
                li$$.className = 'card-water';
            } else if (types[0] === 'Bug') {
                li$$.className = 'card-bug';
            } else if (types[0] === 'Poison') {
                li$$.className = 'card-poison';
            } else if (types[0] === 'Normal') {
                li$$.className = 'card';
            } else if (types[0] === 'Electric') {
                li$$.className = 'card-electric';
            } else if (types[0] === 'Ground') {
                li$$.className = 'card-ground';
            } else if (types[0] === 'Fairy') {
                li$$.className = 'card-fairy';
            } else if (types[0] === 'Fighting') {
                li$$.className = 'card-fighting';
            } else if (types[0] === 'Psychic') {
                li$$.className = 'card-psychic';
            } else if (types[0] === 'Rock') {
                li$$.className = 'card-rock';
            } else if (types[0] === 'Steel') {
                li$$.className = 'card-steel';
            } else if (types[0] === 'Ghost') {
                li$$.className = 'card-ghost';
            } else if (types[0] === 'Dragon') {
                li$$.className = 'card-dragon';
            } else if (types[0] === 'Ice') {
                li$$.className = 'card-ice';
            }


        

            li$$.appendChild(img$$);
            li$$.appendChild(ptitle$$);
            li$$.appendChild(height$$);
            li$$.appendChild(weight$$);
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
}


function searchNormal() {
    olista$$.innerHTML = '';
    for (const pokemon of POKEDEX) {
        if(pokemon.types[0].type.name == 'normal') {
            const li$$ = document.createElement('li');
            const img$$ = document.createElement('img');
            const ptitle$$ = document.createElement('span');
            const abilities$$ = document.createElement('p');
            const height$$ = document.createElement('p');
            const weight$$ = document.createElement('p');
            const hp$$ = document.createElement('p');
            const attack$$ = document.createElement('p');
            const defense$$ = document.createElement('p');
            const specialAttack$$ = document.createElement('p');
            const specialDefense$$ = document.createElement('p');
            const speed$$ = document.createElement('p');
            const types$$ = document.createElement('p');



            const abilities = [];
            for (const habilidades of pokemon.abilities) {
                abilities.push(habilidades.ability.name.charAt(0).toUpperCase() + habilidades.ability.name.slice(1));
            }

            const types = [];
            for (const tipos of pokemon.types) {
                types.push(tipos.type.name.charAt(0).toUpperCase() + tipos.type.name.slice(1));
            }

            
            img$$.src = pokemon.sprites['front_default'];
            ptitle$$.textContent = pokemon.name;
            abilities$$.textContent = 'Abilities: ' + abilities.join(' / ');
            height$$.textContent = 'Height: ' + pokemon.height * 10 + ' cm';
            weight$$.textContent = 'Weight: ' + pokemon.weight / 10 + ' Kg';
            hp$$.textContent = 'HP: ' + pokemon.stats[0]['base_stat'];
            attack$$.textContent = 'Attack: ' + pokemon.stats[1]['base_stat'];
            defense$$.textContent = 'Defense: ' + pokemon.stats[2]['base_stat'];
            specialAttack$$.textContent = 'Special attack: ' + pokemon.stats[3]['base_stat'];
            specialDefense$$.textContent = 'Special defense: ' + pokemon.stats[4]['base_stat'];
            speed$$.textContent = 'Speed: ' + pokemon.stats[5]['base_stat'];
            types$$.textContent = 'Type: ' + types.join(' / ');




            li$$.classList.add('card');
            img$$.classList.add('card-image')
            ptitle$$.classList.add('card-title');
            abilities$$.classList.add('card-subtitle');
            height$$.classList.add('card-subtitle');
            weight$$.classList.add('card-subtitle');
            hp$$.classList.add('card-subtitle');
            attack$$.classList.add('card-subtitle');
            defense$$.classList.add('card-subtitle');
            specialAttack$$.classList.add('card-subtitle');
            specialDefense$$.classList.add('card-subtitle');
            speed$$.classList.add('card-subtitle');
            types$$.classList.add('card-subtitle');


            if (types[0] === 'Grass') {
                li$$.className = 'card-grass';
            } else if (types[0] === 'Fire') {
                li$$.className = 'card-fire';
            } else if (types[0] === 'Water') {
                li$$.className = 'card-water';
            } else if (types[0] === 'Bug') {
                li$$.className = 'card-bug';
            } else if (types[0] === 'Poison') {
                li$$.className = 'card-poison';
            } else if (types[0] === 'Normal') {
                li$$.className = 'card';
            } else if (types[0] === 'Electric') {
                li$$.className = 'card-electric';
            } else if (types[0] === 'Ground') {
                li$$.className = 'card-ground';
            } else if (types[0] === 'Fairy') {
                li$$.className = 'card-fairy';
            } else if (types[0] === 'Fighting') {
                li$$.className = 'card-fighting';
            } else if (types[0] === 'Psychic') {
                li$$.className = 'card-psychic';
            } else if (types[0] === 'Rock') {
                li$$.className = 'card-rock';
            } else if (types[0] === 'Steel') {
                li$$.className = 'card-steel';
            } else if (types[0] === 'Ghost') {
                li$$.className = 'card-ghost';
            } else if (types[0] === 'Dragon') {
                li$$.className = 'card-dragon';
            } else if (types[0] === 'Ice') {
                li$$.className = 'card-ice';
            }


        

            li$$.appendChild(img$$);
            li$$.appendChild(ptitle$$);
            li$$.appendChild(height$$);
            li$$.appendChild(weight$$);
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
}


function searchPoison() {
    olista$$.innerHTML = '';
    for (const pokemon of POKEDEX) {
        if(pokemon.types[0].type.name == 'poison') {
            const li$$ = document.createElement('li');
            const img$$ = document.createElement('img');
            const ptitle$$ = document.createElement('span');
            const abilities$$ = document.createElement('p');
            const height$$ = document.createElement('p');
            const weight$$ = document.createElement('p');
            const hp$$ = document.createElement('p');
            const attack$$ = document.createElement('p');
            const defense$$ = document.createElement('p');
            const specialAttack$$ = document.createElement('p');
            const specialDefense$$ = document.createElement('p');
            const speed$$ = document.createElement('p');
            const types$$ = document.createElement('p');



            const abilities = [];
            for (const habilidades of pokemon.abilities) {
                abilities.push(habilidades.ability.name.charAt(0).toUpperCase() + habilidades.ability.name.slice(1));
            }

            const types = [];
            for (const tipos of pokemon.types) {
                types.push(tipos.type.name.charAt(0).toUpperCase() + tipos.type.name.slice(1));
            }

            
            img$$.src = pokemon.sprites['front_default'];
            ptitle$$.textContent = pokemon.name;
            abilities$$.textContent = 'Abilities: ' + abilities.join(' / ');
            height$$.textContent = 'Height: ' + pokemon.height * 10 + ' cm';
            weight$$.textContent = 'Weight: ' + pokemon.weight / 10 + ' Kg';
            hp$$.textContent = 'HP: ' + pokemon.stats[0]['base_stat'];
            attack$$.textContent = 'Attack: ' + pokemon.stats[1]['base_stat'];
            defense$$.textContent = 'Defense: ' + pokemon.stats[2]['base_stat'];
            specialAttack$$.textContent = 'Special attack: ' + pokemon.stats[3]['base_stat'];
            specialDefense$$.textContent = 'Special defense: ' + pokemon.stats[4]['base_stat'];
            speed$$.textContent = 'Speed: ' + pokemon.stats[5]['base_stat'];
            types$$.textContent = 'Type: ' + types.join(' / ');




            li$$.classList.add('card');
            img$$.classList.add('card-image')
            ptitle$$.classList.add('card-title');
            abilities$$.classList.add('card-subtitle');
            height$$.classList.add('card-subtitle');
            weight$$.classList.add('card-subtitle');
            hp$$.classList.add('card-subtitle');
            attack$$.classList.add('card-subtitle');
            defense$$.classList.add('card-subtitle');
            specialAttack$$.classList.add('card-subtitle');
            specialDefense$$.classList.add('card-subtitle');
            speed$$.classList.add('card-subtitle');
            types$$.classList.add('card-subtitle');


            if (types[0] === 'Grass') {
                li$$.className = 'card-grass';
            } else if (types[0] === 'Fire') {
                li$$.className = 'card-fire';
            } else if (types[0] === 'Water') {
                li$$.className = 'card-water';
            } else if (types[0] === 'Bug') {
                li$$.className = 'card-bug';
            } else if (types[0] === 'Poison') {
                li$$.className = 'card-poison';
            } else if (types[0] === 'Normal') {
                li$$.className = 'card';
            } else if (types[0] === 'Electric') {
                li$$.className = 'card-electric';
            } else if (types[0] === 'Ground') {
                li$$.className = 'card-ground';
            } else if (types[0] === 'Fairy') {
                li$$.className = 'card-fairy';
            } else if (types[0] === 'Fighting') {
                li$$.className = 'card-fighting';
            } else if (types[0] === 'Psychic') {
                li$$.className = 'card-psychic';
            } else if (types[0] === 'Rock') {
                li$$.className = 'card-rock';
            } else if (types[0] === 'Steel') {
                li$$.className = 'card-steel';
            } else if (types[0] === 'Ghost') {
                li$$.className = 'card-ghost';
            } else if (types[0] === 'Dragon') {
                li$$.className = 'card-dragon';
            } else if (types[0] === 'Ice') {
                li$$.className = 'card-ice';
            }


        

            li$$.appendChild(img$$);
            li$$.appendChild(ptitle$$);
            li$$.appendChild(height$$);
            li$$.appendChild(weight$$);
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
}


function searchPsychic() {
    olista$$.innerHTML = '';
    for (const pokemon of POKEDEX) {
        if(pokemon.types[0].type.name == 'psychic') {
            const li$$ = document.createElement('li');
            const img$$ = document.createElement('img');
            const ptitle$$ = document.createElement('span');
            const abilities$$ = document.createElement('p');
            const height$$ = document.createElement('p');
            const weight$$ = document.createElement('p');
            const hp$$ = document.createElement('p');
            const attack$$ = document.createElement('p');
            const defense$$ = document.createElement('p');
            const specialAttack$$ = document.createElement('p');
            const specialDefense$$ = document.createElement('p');
            const speed$$ = document.createElement('p');
            const types$$ = document.createElement('p');



            const abilities = [];
            for (const habilidades of pokemon.abilities) {
                abilities.push(habilidades.ability.name.charAt(0).toUpperCase() + habilidades.ability.name.slice(1));
            }

            const types = [];
            for (const tipos of pokemon.types) {
                types.push(tipos.type.name.charAt(0).toUpperCase() + tipos.type.name.slice(1));
            }

            
            img$$.src = pokemon.sprites['front_default'];
            ptitle$$.textContent = pokemon.name;
            abilities$$.textContent = 'Abilities: ' + abilities.join(' / ');
            height$$.textContent = 'Height: ' + pokemon.height * 10 + ' cm';
            weight$$.textContent = 'Weight: ' + pokemon.weight / 10 + ' Kg';
            hp$$.textContent = 'HP: ' + pokemon.stats[0]['base_stat'];
            attack$$.textContent = 'Attack: ' + pokemon.stats[1]['base_stat'];
            defense$$.textContent = 'Defense: ' + pokemon.stats[2]['base_stat'];
            specialAttack$$.textContent = 'Special attack: ' + pokemon.stats[3]['base_stat'];
            specialDefense$$.textContent = 'Special defense: ' + pokemon.stats[4]['base_stat'];
            speed$$.textContent = 'Speed: ' + pokemon.stats[5]['base_stat'];
            types$$.textContent = 'Type: ' + types.join(' / ');




            li$$.classList.add('card');
            img$$.classList.add('card-image')
            ptitle$$.classList.add('card-title');
            abilities$$.classList.add('card-subtitle');
            height$$.classList.add('card-subtitle');
            weight$$.classList.add('card-subtitle');
            hp$$.classList.add('card-subtitle');
            attack$$.classList.add('card-subtitle');
            defense$$.classList.add('card-subtitle');
            specialAttack$$.classList.add('card-subtitle');
            specialDefense$$.classList.add('card-subtitle');
            speed$$.classList.add('card-subtitle');
            types$$.classList.add('card-subtitle');


            if (types[0] === 'Grass') {
                li$$.className = 'card-grass';
            } else if (types[0] === 'Fire') {
                li$$.className = 'card-fire';
            } else if (types[0] === 'Water') {
                li$$.className = 'card-water';
            } else if (types[0] === 'Bug') {
                li$$.className = 'card-bug';
            } else if (types[0] === 'Poison') {
                li$$.className = 'card-poison';
            } else if (types[0] === 'Normal') {
                li$$.className = 'card';
            } else if (types[0] === 'Electric') {
                li$$.className = 'card-electric';
            } else if (types[0] === 'Ground') {
                li$$.className = 'card-ground';
            } else if (types[0] === 'Fairy') {
                li$$.className = 'card-fairy';
            } else if (types[0] === 'Fighting') {
                li$$.className = 'card-fighting';
            } else if (types[0] === 'Psychic') {
                li$$.className = 'card-psychic';
            } else if (types[0] === 'Rock') {
                li$$.className = 'card-rock';
            } else if (types[0] === 'Steel') {
                li$$.className = 'card-steel';
            } else if (types[0] === 'Ghost') {
                li$$.className = 'card-ghost';
            } else if (types[0] === 'Dragon') {
                li$$.className = 'card-dragon';
            } else if (types[0] === 'Ice') {
                li$$.className = 'card-ice';
            }


        

            li$$.appendChild(img$$);
            li$$.appendChild(ptitle$$);
            li$$.appendChild(height$$);
            li$$.appendChild(weight$$);
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
}


function searchRock() {
    olista$$.innerHTML = '';
    for (const pokemon of POKEDEX) {
        if(pokemon.types[0].type.name == 'rock') {
            const li$$ = document.createElement('li');
            const img$$ = document.createElement('img');
            const ptitle$$ = document.createElement('span');
            const abilities$$ = document.createElement('p');
            const height$$ = document.createElement('p');
            const weight$$ = document.createElement('p');
            const hp$$ = document.createElement('p');
            const attack$$ = document.createElement('p');
            const defense$$ = document.createElement('p');
            const specialAttack$$ = document.createElement('p');
            const specialDefense$$ = document.createElement('p');
            const speed$$ = document.createElement('p');
            const types$$ = document.createElement('p');



            const abilities = [];
            for (const habilidades of pokemon.abilities) {
                abilities.push(habilidades.ability.name.charAt(0).toUpperCase() + habilidades.ability.name.slice(1));
            }

            const types = [];
            for (const tipos of pokemon.types) {
                types.push(tipos.type.name.charAt(0).toUpperCase() + tipos.type.name.slice(1));
            }

            
            img$$.src = pokemon.sprites['front_default'];
            ptitle$$.textContent = pokemon.name;
            abilities$$.textContent = 'Abilities: ' + abilities.join(' / ');
            height$$.textContent = 'Height: ' + pokemon.height * 10 + ' cm';
            weight$$.textContent = 'Weight: ' + pokemon.weight / 10 + ' Kg';
            hp$$.textContent = 'HP: ' + pokemon.stats[0]['base_stat'];
            attack$$.textContent = 'Attack: ' + pokemon.stats[1]['base_stat'];
            defense$$.textContent = 'Defense: ' + pokemon.stats[2]['base_stat'];
            specialAttack$$.textContent = 'Special attack: ' + pokemon.stats[3]['base_stat'];
            specialDefense$$.textContent = 'Special defense: ' + pokemon.stats[4]['base_stat'];
            speed$$.textContent = 'Speed: ' + pokemon.stats[5]['base_stat'];
            types$$.textContent = 'Type: ' + types.join(' / ');




            li$$.classList.add('card');
            img$$.classList.add('card-image')
            ptitle$$.classList.add('card-title');
            abilities$$.classList.add('card-subtitle');
            height$$.classList.add('card-subtitle');
            weight$$.classList.add('card-subtitle');
            hp$$.classList.add('card-subtitle');
            attack$$.classList.add('card-subtitle');
            defense$$.classList.add('card-subtitle');
            specialAttack$$.classList.add('card-subtitle');
            specialDefense$$.classList.add('card-subtitle');
            speed$$.classList.add('card-subtitle');
            types$$.classList.add('card-subtitle');


            if (types[0] === 'Grass') {
                li$$.className = 'card-grass';
            } else if (types[0] === 'Fire') {
                li$$.className = 'card-fire';
            } else if (types[0] === 'Water') {
                li$$.className = 'card-water';
            } else if (types[0] === 'Bug') {
                li$$.className = 'card-bug';
            } else if (types[0] === 'Poison') {
                li$$.className = 'card-poison';
            } else if (types[0] === 'Normal') {
                li$$.className = 'card';
            } else if (types[0] === 'Electric') {
                li$$.className = 'card-electric';
            } else if (types[0] === 'Ground') {
                li$$.className = 'card-ground';
            } else if (types[0] === 'Fairy') {
                li$$.className = 'card-fairy';
            } else if (types[0] === 'Fighting') {
                li$$.className = 'card-fighting';
            } else if (types[0] === 'Psychic') {
                li$$.className = 'card-psychic';
            } else if (types[0] === 'Rock') {
                li$$.className = 'card-rock';
            } else if (types[0] === 'Steel') {
                li$$.className = 'card-steel';
            } else if (types[0] === 'Ghost') {
                li$$.className = 'card-ghost';
            } else if (types[0] === 'Dragon') {
                li$$.className = 'card-dragon';
            } else if (types[0] === 'Ice') {
                li$$.className = 'card-ice';
            }


        

            li$$.appendChild(img$$);
            li$$.appendChild(ptitle$$);
            li$$.appendChild(height$$);
            li$$.appendChild(weight$$);
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
}


function searchSteel() {
    olista$$.innerHTML = '';
    for (const pokemon of POKEDEX) {
        if(pokemon.types[0].type.name == 'steel') {
            const li$$ = document.createElement('li');
            const img$$ = document.createElement('img');
            const ptitle$$ = document.createElement('span');
            const abilities$$ = document.createElement('p');
            const height$$ = document.createElement('p');
            const weight$$ = document.createElement('p');
            const hp$$ = document.createElement('p');
            const attack$$ = document.createElement('p');
            const defense$$ = document.createElement('p');
            const specialAttack$$ = document.createElement('p');
            const specialDefense$$ = document.createElement('p');
            const speed$$ = document.createElement('p');
            const types$$ = document.createElement('p');



            const abilities = [];
            for (const habilidades of pokemon.abilities) {
                abilities.push(habilidades.ability.name.charAt(0).toUpperCase() + habilidades.ability.name.slice(1));
            }

            const types = [];
            for (const tipos of pokemon.types) {
                types.push(tipos.type.name.charAt(0).toUpperCase() + tipos.type.name.slice(1));
            }

            
            img$$.src = pokemon.sprites['front_default'];
            ptitle$$.textContent = pokemon.name;
            abilities$$.textContent = 'Abilities: ' + abilities.join(' / ');
            height$$.textContent = 'Height: ' + pokemon.height * 10 + ' cm';
            weight$$.textContent = 'Weight: ' + pokemon.weight / 10 + ' Kg';
            hp$$.textContent = 'HP: ' + pokemon.stats[0]['base_stat'];
            attack$$.textContent = 'Attack: ' + pokemon.stats[1]['base_stat'];
            defense$$.textContent = 'Defense: ' + pokemon.stats[2]['base_stat'];
            specialAttack$$.textContent = 'Special attack: ' + pokemon.stats[3]['base_stat'];
            specialDefense$$.textContent = 'Special defense: ' + pokemon.stats[4]['base_stat'];
            speed$$.textContent = 'Speed: ' + pokemon.stats[5]['base_stat'];
            types$$.textContent = 'Type: ' + types.join(' / ');




            li$$.classList.add('card');
            img$$.classList.add('card-image')
            ptitle$$.classList.add('card-title');
            abilities$$.classList.add('card-subtitle');
            height$$.classList.add('card-subtitle');
            weight$$.classList.add('card-subtitle');
            hp$$.classList.add('card-subtitle');
            attack$$.classList.add('card-subtitle');
            defense$$.classList.add('card-subtitle');
            specialAttack$$.classList.add('card-subtitle');
            specialDefense$$.classList.add('card-subtitle');
            speed$$.classList.add('card-subtitle');
            types$$.classList.add('card-subtitle');


            if (types[0] === 'Grass') {
                li$$.className = 'card-grass';
            } else if (types[0] === 'Fire') {
                li$$.className = 'card-fire';
            } else if (types[0] === 'Water') {
                li$$.className = 'card-water';
            } else if (types[0] === 'Bug') {
                li$$.className = 'card-bug';
            } else if (types[0] === 'Poison') {
                li$$.className = 'card-poison';
            } else if (types[0] === 'Normal') {
                li$$.className = 'card';
            } else if (types[0] === 'Electric') {
                li$$.className = 'card-electric';
            } else if (types[0] === 'Ground') {
                li$$.className = 'card-ground';
            } else if (types[0] === 'Fairy') {
                li$$.className = 'card-fairy';
            } else if (types[0] === 'Fighting') {
                li$$.className = 'card-fighting';
            } else if (types[0] === 'Psychic') {
                li$$.className = 'card-psychic';
            } else if (types[0] === 'Rock') {
                li$$.className = 'card-rock';
            } else if (types[0] === 'Steel') {
                li$$.className = 'card-steel';
            } else if (types[0] === 'Ghost') {
                li$$.className = 'card-ghost';
            } else if (types[0] === 'Dragon') {
                li$$.className = 'card-dragon';
            } else if (types[0] === 'Ice') {
                li$$.className = 'card-ice';
            }


        

            li$$.appendChild(img$$);
            li$$.appendChild(ptitle$$);
            li$$.appendChild(height$$);
            li$$.appendChild(weight$$);
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
}


function searchWater() {
    olista$$.innerHTML = '';
    for (const pokemon of POKEDEX) {
        if(pokemon.types[0].type.name == 'water') {
            const li$$ = document.createElement('li');
            const img$$ = document.createElement('img');
            const ptitle$$ = document.createElement('span');
            const abilities$$ = document.createElement('p');
            const height$$ = document.createElement('p');
            const weight$$ = document.createElement('p');
            const hp$$ = document.createElement('p');
            const attack$$ = document.createElement('p');
            const defense$$ = document.createElement('p');
            const specialAttack$$ = document.createElement('p');
            const specialDefense$$ = document.createElement('p');
            const speed$$ = document.createElement('p');
            const types$$ = document.createElement('p');



            const abilities = [];
            for (const habilidades of pokemon.abilities) {
                abilities.push(habilidades.ability.name.charAt(0).toUpperCase() + habilidades.ability.name.slice(1));
            }

            const types = [];
            for (const tipos of pokemon.types) {
                types.push(tipos.type.name.charAt(0).toUpperCase() + tipos.type.name.slice(1));
            }

            
            img$$.src = pokemon.sprites['front_default'];
            ptitle$$.textContent = pokemon.name;
            abilities$$.textContent = 'Abilities: ' + abilities.join(' / ');
            height$$.textContent = 'Height: ' + pokemon.height * 10 + ' cm';
            weight$$.textContent = 'Weight: ' + pokemon.weight / 10 + ' Kg';
            hp$$.textContent = 'HP: ' + pokemon.stats[0]['base_stat'];
            attack$$.textContent = 'Attack: ' + pokemon.stats[1]['base_stat'];
            defense$$.textContent = 'Defense: ' + pokemon.stats[2]['base_stat'];
            specialAttack$$.textContent = 'Special attack: ' + pokemon.stats[3]['base_stat'];
            specialDefense$$.textContent = 'Special defense: ' + pokemon.stats[4]['base_stat'];
            speed$$.textContent = 'Speed: ' + pokemon.stats[5]['base_stat'];
            types$$.textContent = 'Type: ' + types.join(' / ');




            li$$.classList.add('card');
            img$$.classList.add('card-image')
            ptitle$$.classList.add('card-title');
            abilities$$.classList.add('card-subtitle');
            height$$.classList.add('card-subtitle');
            weight$$.classList.add('card-subtitle');
            hp$$.classList.add('card-subtitle');
            attack$$.classList.add('card-subtitle');
            defense$$.classList.add('card-subtitle');
            specialAttack$$.classList.add('card-subtitle');
            specialDefense$$.classList.add('card-subtitle');
            speed$$.classList.add('card-subtitle');
            types$$.classList.add('card-subtitle');


            if (types[0] === 'Grass') {
                li$$.className = 'card-grass';
            } else if (types[0] === 'Fire') {
                li$$.className = 'card-fire';
            } else if (types[0] === 'Water') {
                li$$.className = 'card-water';
            } else if (types[0] === 'Bug') {
                li$$.className = 'card-bug';
            } else if (types[0] === 'Poison') {
                li$$.className = 'card-poison';
            } else if (types[0] === 'Normal') {
                li$$.className = 'card';
            } else if (types[0] === 'Electric') {
                li$$.className = 'card-electric';
            } else if (types[0] === 'Ground') {
                li$$.className = 'card-ground';
            } else if (types[0] === 'Fairy') {
                li$$.className = 'card-fairy';
            } else if (types[0] === 'Fighting') {
                li$$.className = 'card-fighting';
            } else if (types[0] === 'Psychic') {
                li$$.className = 'card-psychic';
            } else if (types[0] === 'Rock') {
                li$$.className = 'card-rock';
            } else if (types[0] === 'Steel') {
                li$$.className = 'card-steel';
            } else if (types[0] === 'Ghost') {
                li$$.className = 'card-ghost';
            } else if (types[0] === 'Dragon') {
                li$$.className = 'card-dragon';
            } else if (types[0] === 'Ice') {
                li$$.className = 'card-ice';
            }


        

            li$$.appendChild(img$$);
            li$$.appendChild(ptitle$$);
            li$$.appendChild(height$$);
            li$$.appendChild(weight$$);
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
}


















}

fetchPokemons();