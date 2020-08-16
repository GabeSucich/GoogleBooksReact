import React from 'react'
import "./style.css"
import API from "../../utils/API"
import {ADD_BOOK, SET_CURRENT_BOOK} from "../../utils/action"
import Row from "../Row"
import Col from "../Col"
import {useBookContext} from "../../utils/GlobalState"

function SearchButtons(props) {

    const [state, dispatch] = useBookContext()

    console.log(props.book)

    const handleSaveClick = book => {

        API.saveBook({title: book.title, author: book.authors, description: book.description}).then(response => {
            dispatch({type: ADD_BOOK, book: book})
        })
    }

    const handleViewClick = book => {

        dispatch({type: SET_CURRENT_BOOK, book: book})
    }
        
        


    // }
    return (
        <Row>
            <Col columns="col-sm-3 offset-sm-3">
                <button type="button" className="btn btn-info" onClick={() => handleViewClick(props.book)}>View</button>
                
            </Col>
            <Col columns="col-sm-3">
                <button type="button" class="btn btn-success" onClick={() => handleSaveClick(props.book)}>Save</button>
            </Col>
            
        </Row>
    )
}

export default SearchButtons