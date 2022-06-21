import styled, {keyframes} from 'styled-components'

export const StyledHeader = styled.header`
	height: 5em;
	width: 100%;
	box-shadow: 3px 3px 12px rgba(0,0,0,0.2);
	display: flex;
	align-Items: center;
	background:  #e90200;
	position: fixed;
	top:0;
	z-index: 1;


	nav {
		display: flex;
		height: 100%;
	}
`

const animation = keyframes`
	0%{
		opacity: 0;
		margin-left: -2em;
		width: 20px;
	}

	50%{
		opacity: 1;
		margin-left: 0em;
		width: 180px;
	}
`

const animation2 = keyframes`
	0%{
		opacity: 0;
		transform: rotate(-30deg);
	}

	50%{
		opacity: 1;
		transform: rotate(0deg);
	}
`



export const Flex = styled.div`
	flex: 50%;
	display: flex;
	align-Items: center;

	img{
		width: 180px;
		animation: ${animation} 1s ease-in-out;
		margin-left: -0.9em;

		@media(max-width: ${({theme}) => theme.smallerDevices}) {
			width: 150px;
		}
	}
`



export const Flex2 = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	flex: 40%;
	position: relative;
	font-size: 20px;
	color: #fff;
	animation: ${animation2} 1.2s ease-in-out;
	padding-right: 1em;

	@media(max-width: ${({theme}) => theme.tablet}) {
		padding-right: 0em;
	}

	div{
		background: #fff;
		border-radius: 50%;
		display: flex;
		justify-content: center;
		align-Items: center;
		padding: 0.5em;
		width: 40px;
		height: 40px;
		margin-right: 1em;
		color: #8BE68F;
		transform: rotate(30deg);

		@media(max-width: ${({theme}) => theme.smallerDevices}) {
			width: 35px;
			height: 35px;
		}
	}

	
`