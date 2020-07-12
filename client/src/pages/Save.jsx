import React, { useState, useEffect } from "react";

import API from "../utils/api";
import JumboTron from "../components/Jumbotron";
import { BookList, BookListItem } from "../components/BookList";

function Save() {

    const [savedBooks, setSavedBooks] = useState([]);

    useEffect(() => {
        loadBooks()
    }, [])

    const loadBooks = () => {
        API.getBooks("/api/books")
            .then(res =>
                setSavedBooks(res.data)
            )
            .catch(err => console.log(err));
    }

    const handleDeleteBook = id => {
        API.deleteBook(id)
            .then((res) => {
                loadBooks();
                console.log("Book deleted")
            })
            .catch(err => console.log(err));
    }

    return (
        <>
            <JumboTron>
                <h1 className="display-4 jumboText">Your Saved Books</h1>
            </JumboTron>
            <BookList>

                {savedBooks.map(book => (

                    <BookListItem
                        key={book._id}
                        title={book.title}
                        description={book.description}
                        link={book.link}
                        image={book.image}
                        authors={book.authors.join(", ")}
                        Button={() => (
                            <button
                                onClick={() => handleDeleteBook(book._id)}
                                className="btn deleteBtn">
                                Delete
                            </button>
                        )}
                    />
                ))}
            </BookList>
        </>
    );
}

export default Save;
