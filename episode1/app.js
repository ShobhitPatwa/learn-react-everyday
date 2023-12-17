const heading = React.createElement("h1",{id:"heading"},"hello world from React")
const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(heading) 

// want this type of structure

//  <div parent>
    // <div child
        // <h1></h1>
        // <h2></h2>
//   </div>
// </div> then please follow the below code.
// ReactElement(Object) ==== Convert ===> HTML(Browser understands)

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