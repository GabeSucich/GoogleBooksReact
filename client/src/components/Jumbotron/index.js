import React from 'react'
import "./style.css"
import { useBookContext } from "../../utils/GlobalState"

function Jumbotron() {

    const [state, dispatch] = useBookContext()

    if (window.location.pathname === "/saved") {

        return (
        <div className="jumbotron mt-5">
            <h1 className="text-center display-4 title-text">{state.currentBook ? state.currentBook.title : "Saved Books"}</h1>
            <p className="text-center lead title-text">{state.currentBook ? state.currentBook.authors.join(", ") : "Click on any of the books you saved to view here!"}</p>
            <p className="text-center lead">{state.currentBook ? state.currentBook.description : ""}</p>
        </div>
        )
    }

    else {



        return (
            <div className="jumbotron mt-5">
                <h1 className="text-center display-4 title-text">{state.currentBook ? state.currentBook.title : "Google Books Search With React"}</h1>
                <p className="text-center lead title-text">{state.currentBook ? state.currentBook.authors.join(", ") : "Search for and Save Books of Interest"}</p>
                <p className="text-center lead">{state.currentBook ? state.currentBook.description : ""}</p>
            </div>
        )
    }


}

export default Jumbotron