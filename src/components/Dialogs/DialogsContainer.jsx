import {addNewMessage} from "../../bll/reducers/dialogsReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

const mapStateToProps = (state) => ({
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages
});

export const DialogsContainer = compose(
    withAuthRedirect,
    connect(mapStateToProps, {addNewMessage})
)(Dialogs);