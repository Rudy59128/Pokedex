const pokemonList = [
    {
        name: "Bulbasaur",
        imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
    },
    {
        name: "Mew",
    },
];

function PokemonCard() {
    let pokemon = pokemonList[0];

    if(pokemon.imgSrc) {
        return (
            <figure className="card">
               <img src={pokemon.imgSrc}
                    alt={pokemon.name}
                    className="card-img" />
                <figcaption>{pokemon.name}</figcaption>
            </figure>
        );
    } else {
        return (
            <figure className="card">
                <p>???</p>
                <figcaption>{pokemon.name}</figcaption>
            </figure>
        )
    }        
}

export default PokemonCard;