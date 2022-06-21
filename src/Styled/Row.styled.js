import styled from 'styled-components'

export const Row = styled.div`
	width: 65%;
	margin: 0 auto;

	@media(max-width: ${({theme}) => theme.mobile}) {
		width: 90%;
	}
`