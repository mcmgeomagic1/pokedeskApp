import styled from 'styled-components'

export const FlexLayout = styled.section`
    display: flex;

    
    @media(max-width: ${({theme}) => theme.mobile}) {
        flex-direction: column;
	} 
`

export const Box =  styled.section`
    flex: 85%;

    @media(max-width: ${({theme}) => theme.tablet}) {
        flex: 55%;
	} 
`
