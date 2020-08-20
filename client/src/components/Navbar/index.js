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
                        <a href="/search" className="nav-link font-weight-bold title-text" onClick={clearSearches}>Search for Books</a>
                    </li>
                    <li className="nav-item active">
                        <a href="/saved" className="nav-link font-weight-bold title-text" onClick={clearSearches}>Saved Books</a>
                    </li>
                </ul>
        </nav>
    )
}

export default Navbar