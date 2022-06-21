import styled from 'styled-components'

export const FilterSection = styled.section`
    flex: 15%;

    p {
        cursor: pointer;
    }
	
`


export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
  cursor: pointer;

  @media(max-width: ${({theme}) => theme.mobile}) {
    justify-content: center;
    align-content: center;
    flex-diraction: row;
    width: 100%;
  } 



`

export const Switch = styled.div`
  position: relative;
  width: 50px;
  height: 24px;
  background: #d7d7d7;
  border-radius: 32px;
  padding: 4px;
  transition: 300ms all;

  &:before {
    transition: 300ms all;
    content: "";
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 35px;
    top: 50%;
    left: 4px;
    background: white;
    transform: translate(0, -50%);
  }
`;

export const Input = styled.input`
  opacity: 0;
  position: absolute;

  &:checked + ${Switch} {
    background: #e90200;

    &:before {
      transform: translate(22px, -50%);
    }
  }
`

export const StyledPokemonTypeButtonDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 5em);
  grid-gap: 0.8em;
  margin-bottom: 3em;
  font-size: 73%;
  
  @media(max-width: ${({theme}) => theme.mobile}) {
    grid-template-columns: repeat(5, 7em);
    justify-content: center;
  } 

  @media(max-width: ${({theme}) => theme.smallerDevices}) {
    grid-template-columns: repeat(4, 5em);
    width: 300px;
    font-size: 70%;
    grid-gap: 1.2em;
   }

  div {
    border: 1px solid #e90200;
    padding: .5em 1.4em;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    width: auto;
    color: #e90200;
    margin-bottom:0.2em;
    cursor: pointer;
    
  }

`



