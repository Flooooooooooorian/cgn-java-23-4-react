import {Link, NavLink, useNavigate} from "react-router-dom";

export default function NavBar() {

    const navigate = useNavigate()

    const redirect = () => {
        navigate("/abc")
    }

    return (
        <div>
            <Link to={"/"} >Home</Link>
            <Link to={"/characters"} >Characters</Link>
            <NavLink to={"/counter"} >Counter</NavLink>
            <NavLink to={"/characters/add"} >Add</NavLink>
            <button onClick={redirect}>Nav</button>
        </div>
    )
}
