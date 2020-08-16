import React from 'react'
import { useBookContext } from "../../utils/GlobalState"

function Jumbotron() {

    const [state, dispatch] = useBookContext()

    return (
        <div className="jumbotron">
            <h1 className="text-center display-4">{state.currentBook ? state.currentBook.title : "React Google Books Search"}</h1>
            <p className="text-center lead">{state.currentBook ? state.currentBook.authors.join(", ") : "Search for and Save Books of Interest"}</p>
            <p className="text-center lead">{state.currentBook ? state.currentBook.description : ""}</p>
        </div>
    )



}

export default Jumbotron