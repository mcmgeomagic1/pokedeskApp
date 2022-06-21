import {Row} from "../../Styled/Row.styled.js"
import {StyledHeader, Flex, Flex2} from './StyledHeader.styled.js'
import pokemonLogo from "../../assets/images/pokemonLogo.png"
import {FaSignOutAlt, FaFont} from 'react-icons/fa'

export default function Header () {
	return (
		<StyledHeader>
			<Row>
				<nav>				
					<Flex>
						<img src={pokemonLogo}/>
					</Flex>
					<Flex2>	
						<div>
							<FaFont/>	
						</div>	
						<FaSignOutAlt/>				
					</Flex2>
				</nav>
			</Row>
		</StyledHeader>
	)
}