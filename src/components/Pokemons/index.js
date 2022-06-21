import {StyledPokemonCard, StyledPokemonCardBackground, StyledPokemonCardBody, StyledPokemonTitle, StyledPokemonText, StyledHeart, StyledPokemonType} from './StyledPokemon.styled.js'
import {FaHeart} from "react-icons/fa"

export default function Pokemons ({pokemon, onAddToFavorite, key}) {
    return(
        <StyledPokemonCard onClick={()=> onAddToFavorite(key, pokemon.name, pokemon.national_numbe, pokemon.type, pokemon.sprites)}>
            <StyledPokemonCardBackground>
                {
                    pokemon.favorite ?
                    <StyledHeart>
                        <FaHeart/>
                    </StyledHeart>
                    : ""
                }
                <img src={pokemon.sprites.normal}/>
            </StyledPokemonCardBackground>
            <StyledPokemonCardBody>
                <StyledPokemonText>{pokemon.national_number}</StyledPokemonText>
                <StyledPokemonTitle>{pokemon.name}</StyledPokemonTitle>
                <StyledPokemonType>
                    {
                        pokemon.type.map(item => (
                            <span>{item}</span>
                        ))
                    }
                </StyledPokemonType>
            </StyledPokemonCardBody>
        </StyledPokemonCard>
    )
    
}