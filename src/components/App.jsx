import React from "react";
import ReactDOM from "react-dom/client.js";
import MainShelter from "./MainShelter";

const App = () => {
    return (
        <div>
            <MainShelter/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>) 