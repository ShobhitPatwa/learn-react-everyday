import React from "react"
import ReactDOM from 'react-dom';

const heading = React.createElement("h1",{id:"heading"},"hello world from React")
const root = ReactDOM.createRoot(document.getElementById("root"))


const structure = React.createElement(
    "div",
    {id:"parent"},
    React.createElement(
        "div",
        {id:"child"},
        [React.createElement(
            "h1",
            {id:"heading"},
            "hello how are you ?"
        ), React.createElement(
            "h2",
            {id:"heading"},
            "hello how are you ?"
        )
        ]
    )
)

root.render(structure)