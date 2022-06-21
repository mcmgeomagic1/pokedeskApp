import styled from "styled-components"

export const StyledSearchFilterSection = styled.section`
    margin-top: 5em;
    padding: 40px 0;
`

export const Layout = styled.div`
    display: flex;
    width: 100%;
`

export const StyledInput = styled.input`
    padding: 1em  4em 1em 1em;
    width: 440px;
    border: 0;
    border-radius: 25px;
    background: #F2F2F2;
    font-size: 70%;

    @media(max-width: ${({theme}) => theme.mobile}) {
		width: 330px;
	} 

    @media(max-width: ${({theme}) => theme.smallerDevices}) {
        width: 230px;
    }
	
`
export const Flex = styled.div`
    display: flex;
    align-items: center;
    flex: 50%;
    color: #e90200;

`

export const Flex2 = styled.div`
    display: flex;
    align-items: center;
    flex: 50%;
    justify-content: flex-end;
`

export const StyledSort = styled.select`
    width: 33%;
    height: 35px;
    background: white;
    color: #e90200;
    padding-left: 5px;
    font-size: 14px;
    border: 1px solid #e90200;
    margin-left: 10px;
    border-radius: 25px;
    &:active {
        border: 1px solid #e90200;
    }

    @media(max-width: ${({theme}) => theme.mobile}) {
		width: 60px;
	} 
    @media(max-width: ${({theme}) => theme.smallerDevices}) {
        width: 80px;
    }
`

export const StyledOption = styled.option`
    color: black;
    display: flex;
    min-height: 20px;
    padding: 0px 2px 1px;
    border: 0;
`