import React from "react";
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import HeaderContainer from "./components/Header/HeaderContainer";
import {initializeApp} from "./bll/thunks/thunks";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {Preloader} from "./components/Preloader/Preloader";
import {store} from "./bll/redux-store";

const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const LoginPageContainer = React.lazy(() => import('./components/LoginPageContainer'));


class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.isInitialized) {
            return <Preloader/>
        }

        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <React.Suspense fallback={<div>Загрузка...</div>}>
                    <Route
                        path='/profile/:userId?'
                        render={() => <ProfileContainer/>}
                    />
                    <Route
                        path='/dialogs'
                        render={() => <DialogsContainer/>}
                    />
                    <Route
                        path={'/users'}
                        render={() => <UsersContainer/>}/>
                    <Route
                        path='/login'
                        render={() => <LoginPageContainer/>}
                    />
                </React.Suspense>
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
}

const mapStateToProps = (state) => ({
    isInitialized: state.app.isInitialized
});

const AppContainer = compose(
    connect(mapStateToProps, {initializeApp}),
    withRouter
)(App);

export const SocialNetworkApp = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </BrowserRouter>
    );
}
