import React from 'react'
import "./style.css"
import {Link} from 'react-router-dom'
import {useBookContext} from "../../utils/GlobalState"
import {CLEAR_SEARCHES} from "../../utils/action"

function Navbar() {

    const [state, dispatch] = useBookContext()

    const clearSearches = () => {
        
        dispatch({type: CLEAR_SEARCHES})

    }

    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand title-text" href="#">Google Books with React</a>
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link to="/search"><a className="nav-link font-weight-bold title-text" onClick={clearSearches} href="#">Search for Books</a></Link>
                    </li>
                    <li className="nav-item active">
                        <Link to="/saved"><a className="nav-link font-weight-bold title-text" onClick={clearSearches} href="#">Saved Books</a></Link>
                    </li>
                </ul>
        </nav>
    )
}

export default Navbar