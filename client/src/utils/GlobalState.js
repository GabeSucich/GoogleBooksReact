import React, {createContext, useReducer, useContext} from "react"
import {UPDATE_BOOKS, SET_CURRENT_BOOK, NEW_QUERY, CLEAR_SEARCHES, ADD_BOOK, REMOVE_BOOK} from "./action"

const BookContext = createContext()
const {Provider} = BookContext

const reducer = (state, action) => {
    switch (action.type) {
        case UPDATE_BOOKS:
            return {
                ...state,
                books: action.books
            }
            break
        case NEW_QUERY:
            const newState = {...state, searchResults: action.results} 
            return newState
            
        case SET_CURRENT_BOOK:
            return {
                ...state,
                currentBook: action.book
            }
            break
        case CLEAR_SEARCHES:

        return {
            ...state,
            searchResults: null,
            currentBook: null
        }

        case REMOVE_BOOK: 

        const books = []
        for (const book of state.books) {
            if (book !== action.book) {
                books.push(book)
            }
        }

        return {
            ...state,
            books: books
        }

        case ADD_BOOK:
            const newSearchResults = []
            for (const book of state.searchResults) {
                if (book !== action.book) {
                    newSearchResults.push(book)
                }
            }
            return {
                ...state,
                searchResults: newSearchResults,
            }

        default:
            
            return state
    }
}

const BookProvider = ({value=[], ...props}) => {

    const [state, dispatch] = useReducer(reducer, {
        currentBook: null,
        books: [],
        searchResults: null
    })

    return <Provider value={[state, dispatch]} {...props}/>
}

const useBookContext = () => {

    return useContext(BookContext)
}

export { BookProvider, useBookContext }