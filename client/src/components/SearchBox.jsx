import React from "react";

export default function SearchBox(props) {
    return (
        <div className="input-group input-group-lg">
            <input
                className="form-control"
                type="text"
                {...props} />
        </div>
    )
};


