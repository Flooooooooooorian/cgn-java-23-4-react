import {useParams} from "react-router-dom";

export default function CharacterPage() {

    const params = useParams()
    const id = params.id

    return (
        <div>
            <p>Character Page</p>
            <p>{id}</p>
        </div>

    )
}
