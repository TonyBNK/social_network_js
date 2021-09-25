import React from "react";
import {connect} from "react-redux";
import {logIn} from "../redux/authReducer";
import {LoginPage} from "./LoginPage";
import {compose} from "redux";
import {withProfileRedirect} from "../hoc/withProfileRedirect";

class LoginPageContainer extends React.Component {

    render = () => {
        return <LoginPage
            logIn={this.props.logIn}/>
    }
}

export default compose(
    withProfileRedirect,
    connect(null, {logIn})
)(LoginPageContainer);