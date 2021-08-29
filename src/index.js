import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {addMessageText, addPostText, data, subscribe, updateMessageText, updatePostText} from "./redux/state";
import * as ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";


let rerenderEntireTree = (data) => {
    ReactDOM.render(
        <BrowserRouter>
            <App data={data}
                 updatePostText={updatePostText}
                 addPostText={addPostText}
                 updateMessageText={updateMessageText}
                 addMessageText={addMessageText}/>
        </BrowserRouter>,
        document.getElementById('root'));
}

rerenderEntireTree(data);

subscribe(rerenderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
