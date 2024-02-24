import React from "react";
import ReactDOM from "react-dom/client.js";
import MainShelter from "./MainShelter";
import { Provider } from 'react-redux';
import { store } from '../utils/store.js';


const App = () => {
    return (
        <Provider store = {store}>
            <div className="font-jungle-fever">
                <MainShelter/>
            </div>
        </Provider>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>) 