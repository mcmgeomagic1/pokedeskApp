import {useEffect, useState, useRef} from "react"
import { Row } from '../../Styled/Row.styled.js'
import {StyledButton, StyledButtonDiv, StyledMessageDiv} from '../Button/Button.styled.js'
import {FlexLayout, Box} from "./StyledHome.styled.js"
import Header from '../Header'
import Pokemons from '../Pokemons'
import SearchFilter from "../SearchFilter"
import Filters from '../Filters'
import Button from "../Button"

import {SteyledPokemonSection} from "../Pokemons/StyledPokemon.styled.js"

export default function Home({pokemonData}) {
  const [datasToView, setDatasToView] = useState(10)
  const [filterText, setFilterText] = useState("")
  const [favoritePokemonData, setFavoritePokemonData] = useState([])
  const [pokemonDataSliced, setPokemonDataSliced] = useState(pokemonData)
  const [isFavoriteToggle, setIsFavoriteToggle] = useState(false)
  const [sort, setSort] = useState("")

  const onTextChange =(e)=> {
    setFilterText(e.target.value)
    setPokemonDataSliced(pokemonData.slice(0, datasToView).filter((item) => (
        item == "" ? 
        setDatasToView(6)
        : item.name.toLowerCase().includes(filterText.toLocaleLowerCase()) || item.national_number.toLowerCase().includes(filterText.toLocaleLowerCase()) ? 
        item : ""
      )
    ))
  }
    
  const onAddToFavorite = (id, name, national_number, type, sprites) => {
    function addToFavorite () {
        const NewPokemonsData = favoritePokemonData.concat({id: id, name: name, national_number: national_number, type: type, sprites: sprites, favorite: true})
        setFavoritePokemonData(NewPokemonsData)
    }
    addToFavorite()
    pokemonDataSliced[pokemonDataSliced.findIndex(e => e.name == name)].favorite = true
  } 

  const seeFavorite =()=> {
    if(isFavoriteToggle) {
      setPokemonDataSliced(pokemonData.slice(0,  setDatasToView(10)))
      setIsFavoriteToggle(false)
    }else{
      setIsFavoriteToggle(true)
      setPokemonDataSliced(favoritePokemonData.slice(0,  setDatasToView(10)))
    }
  }

  const sortBy = (e)=> {
    setSort(e.target.value)
    sort == "asc" ? setSort("desc") : setSort("asc")
    const sorted = pokemonDataSliced.sort((a, b) => {
        const isReversed = (sort === "asc") ? 1 : -1
        return isReversed * a.name.localeCompare(b.name)
    }) 
    setPokemonDataSliced(sorted)
  }

  const seeMore =()=> {
    setDatasToView(datasToView + datasToView)
  }

  let id = 1
    return (
        <>
          <Header/>
          <SearchFilter filterText={filterText} onTextChange={onTextChange} sortBy={sortBy} setPokemonDataSliced={setPokemonDataSliced} pokemonDataSliced={pokemonDataSliced}/>
          <Row>
            <FlexLayout>
              <Filters seeFavorite={seeFavorite} setPokemonDataSliced={setPokemonDataSliced} pokemonDataSliced={pokemonDataSliced}/>
              <Box>
                <SteyledPokemonSection>
                  {
                    pokemonDataSliced.slice(0, datasToView).map(pokemon => (
                        <Pokemons 
                          key={id++} 
                          pokemon={pokemon}
                          onAddToFavorite={onAddToFavorite}
                        />
                    ))
                  }
                </SteyledPokemonSection>
                <Button pokemonDataSliced={pokemonDataSliced} seeMore={seeMore}/>
              </Box>              
            </FlexLayout>        
          </Row>
        </>
    );

}
