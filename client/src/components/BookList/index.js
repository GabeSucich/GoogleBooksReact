import React from 'react'
import './style.css'
import { useBookContext } from "../../utils/GlobalState"
import Col from "../Col"
import Row from "../Row"
import SearchButtons from "../SearchButtons"

function BookListItem({ book }) {

    if (book.description) {
        return (
            <Col columns="col-sm-6 col-md-6 col-lg-6 p-4">
                <Row>
                <Col columns="col-sm-8 col-md-8 col-lg-8 book-item">
                    <p className="text-center mt-3">{book.title}</p>
                    <p className="text-center">{book.authors.join(",  ")}</p>
                    <SearchButtons book={book}/>
                </Col>
                <Col columns="col-sm-4 col-md-4 col-lg-4 book-item">
                    <img className="list-img" src={book.imageLinks.smallThumbnail} />

                </Col>
                </Row>
            </Col>
        )
        
    }
    else {
        return null
    }
}


function BookList() {

    const [state, dispatch] = useBookContext()

    if (state.searchResults) {
        return (
        <div className="mt-3">
            <Row attributes="divider-row">
                {state.searchResults.map(book => {
                    return <BookListItem book={book} />
                })}
            </Row>
        </div>
    )
    }

    else {
        return (
            <div className="text-center">Your search results will appear here!</div>
        )
    }
    

}

export default BookList