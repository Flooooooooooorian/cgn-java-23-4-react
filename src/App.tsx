import './App.css'
import Hello from "./Hello.tsx";
import RickAndMorty from "./RickAndMorty.tsx";
import Header from "./Header.tsx";
import { Route, Routes} from "react-router-dom";
import NavBar from "./NavBar.tsx";
import CharacterPage from "./CharacterPage.tsx";

function App() {

    return (
        <div>
            <h1>
                Title
            </h1>
            <NavBar />
            <Routes>
                <Route path={"/counter"} element={<div>
                    <Header title={"Counter"}/>
                    <Hello/>
                </div>}
                />
                <Route path={"/characters"} element={<div><
                    Header title={"Rick & Morty Gallery"}/>
                    <RickAndMorty/>
                </div>}
                />
                <Route path={"/characters/:id"} element={<CharacterPage/>}/>

                <Route path={"/*"} element={<p>Not found</p>} />
            </Routes>
        </div>

    )
}

export default App
