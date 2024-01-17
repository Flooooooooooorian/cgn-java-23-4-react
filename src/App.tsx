import './App.css'
import Hello from "./Hello.tsx";
import RickAndMorty from "./RickAndMorty.tsx";
import Header from "./Header.tsx";

function App() {

    return (
        <>
            <Header title={"Counter"}/>
            <Hello/>

            <Header title={"Rick & Morty Gallery"}/>
            <RickAndMorty/>
        </>
    )
}

export default App
