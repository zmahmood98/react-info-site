// render h2 tag inside the root div
ReactDOM.render(<h2>Hello, everyone!</h2>, document.getElementById("root"))

// render a <ul> with 2+ <li>s inside
ReactDOM.render(
    <ul>
        <li>Item 1</li>
        <li>Item 2</li>
    </ul>, 
    document.getElementById("root")
)
