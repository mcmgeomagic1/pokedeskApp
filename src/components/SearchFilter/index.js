
import {Row} from "../../Styled/Row.styled.js"
import {StyledSearchFilterSection, StyledInput, Flex, Flex2 , Layout, StyledSort, StyledOption} from './StyledSearchFilter.styled.js'
import {FaSearch} from "react-icons/fa"

export default function Header ({filterText, setFilterText, onTextChange, sortBy}) {
	return (
		<StyledSearchFilterSection>
			<Row>
				<Layout>
					<Flex>
						<StyledInput
							type="text"
							onChange={(e)=> onTextChange(e)}
							value={filterText}
							placeholder="Pesquise por nome ou número"
						/>
						<FaSearch style={{marginLeft: "-2em" }}/>
					</Flex>
					<Flex2>
					<StyledSort defaultValue="Sort" onChange={sortBy}>
						<StyledOption disabled value="Sort">Sort</StyledOption>
						<StyledOption value="arc">Ascendete</StyledOption>
						<StyledOption value="desc">Descendente</StyledOption>
           			</StyledSort>
					</Flex2>
				</Layout>
			</Row>
		</StyledSearchFilterSection>
	)
}