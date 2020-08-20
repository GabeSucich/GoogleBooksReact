import React from 'react'
import './style.css'
import { useBookContext } from "../../utils/GlobalState"
import Col from "../Col"
import Row from "../Row"
import { SearchButtons, SavedButtons } from "../Buttons"

function BookListItem({ book }) {

    if (window.location.pathname === "/saved") {
        if (book.description) {
            return (
                <Col columns="col-sm-6 col-md-6 col-lg-6 p-4">
                    <Row>
                        <Col columns="col-sm-8 col-md-8 col-lg-8 book-item">
                            <p className="text-center mt-3">{book.title}</p>
                            <p className="text-center">{book.authors.join(",  ")}</p>
                            {window.location.pathname === "/saved" ? <SavedButtons book={book} /> : <SearchButtons book={book} />}
                        </Col>
                        <Col columns="col-sm-4 col-md-4 col-lg-4 book-item">
                            <img className="list-img" src={book.src} />

                        </Col>
                    </Row>
                </Col>
            )

        }
        else {
            return null
        }
    }

    else {
        if (book.description) {
            return (
                <Col columns="col-sm-6 col-md-6 col-lg-6 p-4">
                    <Row>
                        <Col columns="col-sm-8 col-md-8 col-lg-8 book-item">
                            <p className="text-center mt-3">{book.title}</p>
                            <p className="text-center">{book.authors.join(",  ")}</p>
                            {window.location.pathname === "/saved" ? <SavedButtons book={book} /> : <SearchButtons book={book} />}
                        </Col>
                        {book.imageLinks.smallThumbnail &&
                        <Col columns="col-sm-4 col-md-4 col-lg-4 book-item">
                            <img className="list-img" src={book.imageLinks.smallThumbnail} />

                        </Col>}
                    </Row>
                </Col>
            )

        }
        else {
            return null
        }
    }


}

function BookList() {

    const [state, dispatch] = useBookContext()


    if (window.location.pathname === "/saved") {

        return (
            <div className="mt-3">
                
                    {state.books.length > 0 ? <Row attributes="divider-row"> {state.books.map(book => {
                        return <BookListItem key={state.books.indexOf(book)} book={book} /> }
                    )} </Row> : <p className="text-center title-text larger-text">You haven't saved any books yet!</p>}

                
            </div>
        )
    }
    else {
        return (
            <div className="mt-3">
                <Row attributes="divider-row">
                    {state.searchResults ? state.searchResults.map(book => {
                        return <BookListItem book={book} />
                    }) : ""}
                </Row>
            </div>
        )
    }




}

export default BookList