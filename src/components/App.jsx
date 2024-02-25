import React from "react";
import ReactDOM from "react-dom/client.js";
import MainShelter from "./MainShelter";
import { Provider } from 'react-redux';
import { store } from '../utils/store.js';


const App = () => {
    return (
        <Provider store = {store}>
            {/* Using jungle fever font for the entire application */}
            <div className="font-jungle-fever">
                <MainShelter/>
            </div>
        </Provider>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>) 

/*

    MainShelter Component Contains 4 divs inside it. 

    1st Div contains two buttons called provoke and feed
    2nd Div is a Monkey shelter component which will be displayed as type flex and 
    it has 5 monkey card components
    3rd Div is a Elephant shelter component which will be displayed as type flex and 
    it has 5 elephant card components
    4th Div is a Giraffe shelter component which will be displayed as type flex and 
    it has 5 giraffe card components
*/