function PokemonCard(props) {
    if(props.pokemon.imgSrc) {
        return (
            <figure className="card">
               <img src={props.pokemon.imgSrc}
                    alt={props.pokemon.name}
                    className="card-img" />
                <figcaption>{props.pokemon.name}</figcaption>
            </figure>
        );
    } else {
        return (
            <figure className="card">
                <p>???</p>
                <figcaption>{props.pokemon.name}</figcaption>
            </figure>
        )
    }        
}

export default PokemonCard;