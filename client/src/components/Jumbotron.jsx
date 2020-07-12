import React from "react";

export default function Jumbotron({ children }) {
    return (
        <div className="jumbotron jumbotron-fluid text-center">
            <div className="container">
                {children}
            </div>
        </div>
    );
}


