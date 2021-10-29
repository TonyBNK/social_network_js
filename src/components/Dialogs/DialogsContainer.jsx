import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import React from "react";
import {addNewMessage} from "../../bll/actions/actions";

const mapStateToProps = (state) => ({
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages
});

const DialogsContainer = compose(
    withAuthRedirect,
    connect(mapStateToProps, {addNewMessage}),
    React.memo
)(Dialogs);

export default DialogsContainer;