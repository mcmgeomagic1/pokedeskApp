import styled, {keyframes}from "styled-components"

const animation = keyframes`
	0%{
		opacity: 0;
	}

	50%{
		opacity: 1;
	}
`

export const SteyledPokemonSection = styled.section`	
	padding:0em 0;
	display: grid;
	grid-gap: 1.5em;
	justify-content: space-between;
	grid-template-columns: repeat(5, 1fr);
	animation: ${animation} 2s ease-in-out;
	height: 600px;
	overflow-Y: scroll;

	&::-webkit-scrollbar {
		width: 8px;
		margin-right: 2em;
	}
  
	&::-webkit-scrollbar-thumb {
		background: #e90200;
		border-radius: 15px;
	}

	@media(max-width: ${({theme}) => theme.tablet}) {
		grid-template-columns: repeat(2, 1fr);
	} 
	

	@media(max-width: ${({theme}) => theme.mobile}) {
		padding: 8em 0;
		grid-template-columns: repeat(1, 2fr);
	}
	@media(max-width: ${({theme}) => theme.smallerDevices}) {
		grid-gap: 2.2em;
	}
`

export const StyledPokemonCard = styled.div`
	width: 100%;
    height: 270px;
    background: #fff;
    border-radius: 15px;
	&:hover {
		cursor: pointer;
		transform: scale(0.955);
		transition: 0.3s ease-in-out all;
	}

    @media(max-width: ${({theme}) => theme.mobile}) {
         height: 450px;
    }

`

export const StyledPokemonCardBackground = styled.div`
	height: 60%;
	display: flex;
	justify-content: center;
	align-items: center;
    padding: 0em 0;
	background: #F2F2F2;
	padding: 0.2em;
	position: relative;

	@media(max-width: ${({theme}) => theme.mobile}) {
         height: 40%;
    }

	img{
		width: 170px;
		height: 170px;

		@media(max-width: ${({theme}) => theme.mobile}) {
         	width: 60%;
    	}
	}



`

export const StyledHeart = styled.div`
	position: absolute;
	top: 0.5em;
	right: 0.5em;
	color: #e90200;
	font-size: 110%;
`

export const StyledPokemonCardBody = styled.div`
	padding: 1em 0;
	height: 105px;
`

export const StyledPokemonTitle = styled.h1`
	font-size: 100%;
	margin-bottom: 0.5em;
`

export const StyledPokemonText = styled.p`
	font-size: 80%;
	color: ${(props)=> props.color};
	opacity: 0.5;
	padding-bottom: 0.5em;
`
export const StyledPokemonType = styled.div`	
	display: flex;
	grid-gap: .5em;


	span {
		background: #51DE98;
		font-size: 70%;
		padding: .5em .5em;
		border-radius: 5px;
		font-weight: bold;
	}
`
