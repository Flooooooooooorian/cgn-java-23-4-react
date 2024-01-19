import {ChangeEvent, FormEvent, useState} from "react";
import {Character} from "./models.ts";

type AddCharacterPageProps = {
    saveCharacter: (characterToSave: Character) => void
}

export default function AddCharacterPage(props: AddCharacterPageProps) {

    const [name, setName] = useState<string>("")
    const [status, setStatus] = useState<string>("")
    const [species, setSpecies] = useState<string>("")

    const onNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value)
    }

    const onStatusChange = (event: ChangeEvent<HTMLInputElement>) => {
        setStatus(event.target.value)
    }

    const onSpeciesChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSpecies(event.target.value)
    }

    const onCharacterSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const characterToSave: Character = {
            id: 21,
            name: name,
            status: status,
            species: species
        }

        props.saveCharacter(characterToSave)
        setSpecies("")
        setName("")
        setStatus("")
    }

    return (
        <div>
            <p>
                Add Character
            </p>
            <form onSubmit={onCharacterSubmit}>
                <input value={name} onChange={onNameChange} placeholder="Name"/>
                <input value={status} onChange={onStatusChange} placeholder={"Status"}/>
                <input value={species} onChange={onSpeciesChange} placeholder={"Species"}/>
                <button type="submit">Speichern</button>
            </form>
        </div>
    )
}
