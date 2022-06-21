import {useState} from "react"
import {FilterSection, Label, Input , Switch, StyledPokemonTypeButtonDiv} from "./StyledFilter.styled.js"

export default function Filters({seeFavorite, setPokemonDataSliced, pokemonDataSliced}){
    const [filterButton, setFilterButton] = useState("")
    console.log(filterButton)
    const pokemonTypeButton = [
        {
            id: 1,
            type: "Bug"
        },
        {
            id: 2,
            type: "Dark"
        },
        {
            id: 3,
            type: "Dragon"
        },
        {
            id: 4,
            type: "Electric"
        },
        {
            id: 5,
            type: "Fairy"
        },
        {
            id: 6,
            type: "Fighter"
        },
        {
            id: 7,
            type: "Fire"
        },
        {
            id: 8,
            type: "Flying"
        },
        {
            id: 9,
            type: "Ghost"
        },
        {
            id: 10,
            type: "Grass"
        },
        {
            id: 11,
            type: "Ground"
        },
        {
            id: 12,
            type: "Ice"
        },
        {
            id: 13,
            type: "Normal"
        },
        {
            id: 14,
            type: "Poison"
        },
        {
            id: 15,
            type: "Physic"
        },
        {
            id: 16,
            type: "Rock"
        },
        {
            id: 17,
            type: "Steel"
        },
        {
            id: 18,
            type: "Water"
        },
    ]

    const onFilterHandler =(button)=> {
        setFilterButton(button)
        const filtered = pokemonDataSliced.filter((pokemon) => 
            pokemon.type.map(item => 
                item
            ).includes(button)
        )
        setPokemonDataSliced(filtered)
    }
    return(
        <FilterSection>
            <StyledPokemonTypeButtonDiv>
                {
                    pokemonTypeButton.map(item => (
                        <div key={item.id} onClick={()=> onFilterHandler(item.type)}>
                            {item.type}
                        </div>
                    ))
                }
            </StyledPokemonTypeButtonDiv>
            <Label>
                <p>filtrar favoritos</p>
                <Input  type="checkbox" onChange={seeFavorite} />
                <Switch />
            </Label>
        </FilterSection>
    )
}