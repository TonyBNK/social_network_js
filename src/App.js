import React from "react";
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import logo from './img/logo.png';
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";


const App = (
    {
        store
    }
) => {
    return (
        <div className="app-wrapper">
            <Header logotype={logo}/>
            <Navbar store={store}/>
            <Route
                path='/profile'
                render={() => <Profile store={store}/>}
            />
            <Route
                path='/dialogs'
                render={() => <DialogsContainer store={store}/>}
            />
            <Route
                path='/news'
                render={() => <News/>}
            />
            <Route
                path='/music'
                render={() => <Music/>}
            />
            <Route
                path='/settings'
                render={() => <Settings/>}
            />
        </div>
    );
}

export default App;
