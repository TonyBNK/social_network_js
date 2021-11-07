import React from "react";
import './App.module.scss';
import {Navbar} from "./components/Navbar/Navbar";
import {
    BrowserRouter, NavLink,
    Redirect,
    Route,
    Switch,
    withRouter
} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import HeaderContainer from "./components/Header/HeaderContainer";
import {initializeApp} from "./bll/thunks/thunks";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {Preloader} from "./components/Preloader/Preloader";
import {store} from "./bll/redux-store";
import c from "./App.module.scss";
import {Layout, Menu} from "antd";
import 'antd/dist/antd.css';
import {FriendsContainer} from "./components/Friends/FriendsContainer";
import logo from "./images/logo.png";

const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const LoginPageContainer = React.lazy(() => import('./components/Login/LoginPageContainer'));


const {Content, Sider, Footer} = Layout;

class App extends React.Component {
    catchAllUnhandledErrors = () => {
        alert('Some error occurred');
    }

    componentDidMount() {
        this.props.initializeApp();
        window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors);
    }

    componentWillUnmount() {
        window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors);
    }

    render() {
        if (!this.props.isInitialized) {
            return <Preloader/>
        }

        return (
            <Layout className={c.mainContainer}>
                <HeaderContainer/>
                <Layout className={c.bodyContainer}>
                    <Sider className={c.sider}>
                        <Navbar/>
                        <FriendsContainer/>
                    </Sider>
                    <Content>
                        <React.Suspense fallback={<Preloader/>}>
                            <Switch>
                                <Route
                                    exact path={'/'}
                                    render={() => <Redirect to={'/profile'}/>}
                                />
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
                                <Route
                                    path='*'
                                    render={() => <h2>404 NOT FOUND</h2>}
                                />
                            </Switch>
                        </React.Suspense>
                    </Content>
                </Layout>
            </Layout>
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
