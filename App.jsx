import React from "react";
import ReactDOM from "react-dom/client.js";

const App = () => {
    return (
        <div>
            <p style={{color : 'red'}}>This is a zoo simulator</p>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>) 