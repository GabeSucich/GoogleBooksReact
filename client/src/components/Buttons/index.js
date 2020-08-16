import React from 'react'
import "./style.css"
import API from "../../utils/API"
import {ADD_BOOK, SET_CURRENT_BOOK, UPDATE_BOOKS, REMOVE_BOOK} from "../../utils/action"
import Row from "../Row"
import Col from "../Col"
import {useBookContext} from "../../utils/GlobalState"
import { PromiseProvider } from 'mongoose'

export function ViewButton(props) {

    const [state, dispatch] = useBookContext()

    const handleViewClick = book => {

        dispatch({type: SET_CURRENT_BOOK, book: book})
    }

    return (
        <button type="button" className="btn btn-info" onClick={() => handleViewClick(props.book)}>View</button>
    )

}

export function SaveButton(props) {

    const [state, dispatch] = useBookContext()

    const handleSaveClick = book => {

        API.saveBook({title: book.title, authors: book.authors, description: book.description, src: book.imageLinks.smallThumbnail}).then(response => {
            dispatch({type: ADD_BOOK, book: book})
        })
    }

    return (
        <button type="button" className="btn btn-success" onClick={() => handleSaveClick(props.book)}>Save</button>
    )

}

export function DeleteButton(props) {

    const [state, dispatch] = useBookContext()

    const handleDeleteClick = book => {
        API.deleteBook(book._id).then(data => {
            dispatch({type: REMOVE_BOOK, book: book})
        })
    }


    return (
        <button type="button" class="btn btn-danger" onClick={() => handleDeleteClick(props.book)}>Delete</button>
    )

}

export function SavedButtons(props) {

    const [state, dispatch] = useBookContext()

    return (
        <Row>
            <Col columns="col-sm-3 offset-sm-3">
                <ViewButton book={props.book}/>
            </Col>
            <Col columns="col-sm-3">
                <DeleteButton book={props.book}/>
            </Col>
        </Row>
    )

}

export function SearchButtons(props) {

    const [state, dispatch] = useBookContext()
        
    
    return (
        <Row>
            <Col columns="col-sm-3 offset-sm-3">
                <ViewButton book={props.book}/>
                
            </Col>
            <Col columns="col-sm-3">
                <SaveButton book={props.book}/>
            </Col>
        </Row>
    )
}

