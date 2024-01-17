import {ChangeEvent, useState} from "react";

type SearchBarProps = {
    handleSearch: (search:string) => void
}

export default function SearchBar(props: Readonly<SearchBarProps>) {
    const [search, setSearch] = useState("")

    const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value)
        props.handleSearch(event.target.value)
    }

    return (
        <input value={search} onChange={handleSearch}/>
    )
}
