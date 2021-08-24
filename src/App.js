import React from "react";
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Navbar/Menu/Profile/Profile";
import {Dialogs} from "./components/Navbar/Menu/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/Navbar/Menu/News/News";
import {Music} from "./components/Navbar/Menu/Music/Music";
import {Settings} from "./components/Navbar/Menu/Settings/Settings";
import {Friends} from "./components/Navbar/Friends/Friends";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className={"app-wrapper"}>
                <Header/>
                <Navbar friendsPage={props.state.friendsPage}/>
                <div className={"app-wrapper-content"}>
                    <Route path='/profile' render={() => <Profile profilePage={props.state.profilePage}/>}/>
                    <Route path='/dialogs' render={() => <Dialogs dialogsPage={props.state.dialogsPage}/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                    <Route path='/friends' render={() => <Friends/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
