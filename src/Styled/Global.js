
import {createGlobalStyle} from 'styled-components'

const GlobalStyles = createGlobalStyle`

	@import url('https://fonts.google.com/specimen/Poppins');
	
	*{
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	body,html {
		width: 100%;
		height: 100vh;
		background: #fff;
		color: #000;
		font-size: 17px;
		font-family: 'Poppins', sans-serif;
		overflow-x: hidden;
	}

	img{
		width: 100%;
		object-fit: cover;
	}

	p {
		opacity: 0.7
	}

`

export default GlobalStyles