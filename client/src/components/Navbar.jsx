import React from "react";

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark">
            <a className="navbar-brand" href="/">
                React Google Book Search
            </a> |
            <a className="nav-link" href="/">
                Search Books
            </a> |

            <a className="nav-link" href="/save">
                Saved Books
            </a>

        </nav>
    );

}

