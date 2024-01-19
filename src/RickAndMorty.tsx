import {useState} from "react";
import RickAndMortyCharacter from "./RickAndMortyCharacter.tsx";
import SearchBar from "./SearchBar.tsx";
import {Character} from "./models.ts";

type RickAndMortyProps = {
    characters: Character[]
}

export default function RickAndMorty(props: RickAndMortyProps) {

    const [filteredCharacters, setFilteredCharacters] = useState<Character[]>(props.characters)

    const onFilter = (search: string) => {
        setFilteredCharacters(props.characters.filter(character => character.name.includes(search)))
    }

    return (
        <div>
            <SearchBar handleSearch={onFilter}/>
            {filteredCharacters.length
                ? filteredCharacters.map(character => <RickAndMortyCharacter key={character.id} character={character} />)
                : "Keine Charaktere gefunden"}
        </div>
    )

}
