import {useEffect, useState, useRef} from "react"
import {ThemeProvider} from "styled-components"
import GlobalStyles from './Styled/Global.js'
import Home from './components/Home'

export default function App() {
  const [pokemonData, setPokemonData] = useState([])
  const [filteredPokemon, setFilteredPokemon] = useState([])
  console.log(pokemonData)
  

  const api = "https://unpkg.com/pokemons@1.1.0/pokemons.json"

  useEffect(()=> {
    fecthPokemon()
  }, [])

  const fecthPokemon = async ()=> {
    const data = await fetch(api)
    const pokemons = await data.json()
    setPokemonData(pokemons.results)
    setFilteredPokemon(pokemons.results)
  }

  if(pokemonData.length == 0) return (
    <div style={{display: "flex", height: "100vh", justifyContent: "center", alignItems: "center"}}>
      <h1>Loading...</h1>
    </div>
  )


  const theme = {
    mobile: '768px',
    tablet: '1394px',
    smallerDevices: '477px'
  }

  const colors = {
    primary:'#238dd2',
  }

    return (
      <ThemeProvider theme={theme} colors={colors}>
        <>
          <GlobalStyles />
          <Home pokemonData={pokemonData} filteredPokemon={filteredPokemon} setFilteredPokemon={setFilteredPokemon}/>
        </>
      </ThemeProvider>
    );

}
