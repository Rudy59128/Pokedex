import PropTypes from "prop-types";

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

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string,
  }).isRequired,
};

export default PokemonCard;