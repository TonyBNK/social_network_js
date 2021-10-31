import React from "react";
import {connect} from "react-redux";
import {LoginPage} from "./LoginPage";
import {compose} from "redux";
import {withProfileRedirect} from "../../hoc/withProfileRedirect";
import {logIn} from "../../bll/thunks/thunks";

class LoginPageContainer extends React.PureComponent {

    render = () => {
        return <LoginPage
            captchaURL={this.props.captchaURL}
            logIn={this.props.logIn}/>
    }
}

const mapStateToProps = (state) => ({
    captchaURL: state.auth.captchaURL
});

export default compose(
    withProfileRedirect,
    connect(mapStateToProps, {logIn}),
    React.memo
)(LoginPageContainer);