
const baseUrl = 'https://pokeapi.co/api/v2/pokemon/'

const POKEDEX = [];

for (let i = 1; i <= 150; i++) {
    fetch(baseUrl + i)
        .then((res) => res.json())
        .then((pokemons) => POKEDEX.push(pokemons));
}

console.log(POKEDEX);



/* 
for (let i = 0; i < 150; i++) {
    const lista$$ = document.createElement('li');
    const olista$$ = document.querySelector('#pokedex');
    const p$$ = document.createElement('p');

    p$$.textContent = pokedex[i].name;
    lista$$.classList.add('card')

    olista$$.appendChild(lista$$);
    lista$$.appendChild(p$$);
} */





