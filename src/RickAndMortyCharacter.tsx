
type RickAndMortyCharacterProps = {
    character: {id: number, name: string}
}
export default function RickAndMortyCharacter(props: RickAndMortyCharacterProps) {

    return (
            <div>
                <h2>{props.character.name}</h2>
                <p>{props.character.id}</p>
            </div>
    )
}
