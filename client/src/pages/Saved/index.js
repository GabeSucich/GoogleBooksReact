import React, { useEffect, c } from 'react'
import { useBookContext } from "../../utils/GlobalState"
import { UPDATE_BOOKS, SET_CURRENT_BOOK, CLEAR_SEARCHES } from "../../utils/action"
import Jumbotron from "../../components/Jumbotron"
import API from "../../utils/API"
import BookList from '../../components/BookList'

function Saved() {

    const [state, dispatch] = useBookContext()

    const loadBooks = () => {
        API.getBooks().then(response => {
            dispatch({ type: UPDATE_BOOKS, books: response.data })
            console.log(response.data)
        })
    }

    useEffect( loadBooks, [] )


    return (
        <div>
            <Jumbotron />
            <BookList />
        </div>
    )


}

export default Saved