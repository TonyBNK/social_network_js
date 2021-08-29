import React from "react";
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import logo from './img/logo.png';


const App = (props) => {
    return (
        <div className="app-wrapper">
            <Header logotype={logo}/>
            <Navbar friends={props.data.friendsPage.friends}/>

            <Route path='/profile' render={() => <Profile posts={props.data.profilePage.posts}
                                                          newPostText={props.data.profilePage.newPostText}
                                                          updatePostText={props.updatePostText}
                                                          addPostText={props.addPostText}/>}/>
            <Route path='/dialogs' render={() => <Dialogs dialogs={props.data.dialogsPage.dialogs}
                                                          messages={props.data.dialogsPage.messages}
                                                          newMessageText={props.data.dialogsPage.newMessageText}
                                                          updateMessageText={props.updateMessageText}
                                                          addMessageText={props.addMessageText}/>}/>
            <Route path='/news' render={() => <News/>}/>
            <Route path='/music' render={() => <Music/>}/>
            <Route path='/settings' render={() => <Settings/>}/>
        </div>
    );
}

export default App;
