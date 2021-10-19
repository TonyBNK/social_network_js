import React from "react";
import {connect} from "react-redux";
import {LoginPage} from "./LoginPage";
import {compose} from "redux";
import {withProfileRedirect} from "../hoc/withProfileRedirect";
import {logIn} from "../bll/thunks/thunks";

class LoginPageContainer extends React.PureComponent {

    render = () => {
        return <LoginPage
            logIn={this.props.logIn}/>
    }
}

export default compose(
    withProfileRedirect,
    connect(null, {logIn}),
    React.memo
)(LoginPageContainer);