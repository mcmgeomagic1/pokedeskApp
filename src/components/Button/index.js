import {StyledButtonDiv, StyledButton, StyledMessageDiv } from './Button.styled.js'

export default function Button({pokemonDataSliced, seeMore}) {
    if(pokemonDataSliced.length >= 10) {
        return(
            <StyledButtonDiv>
                <StyledButton onClick={seeMore}>Ver mais</StyledButton>
            </StyledButtonDiv>
        )
    }else if(pokemonDataSliced.length == 0 ){
        return(
            <StyledMessageDiv>
              <p>Sem pokemons na lista</p>
            </StyledMessageDiv>
        )
    }
      
}