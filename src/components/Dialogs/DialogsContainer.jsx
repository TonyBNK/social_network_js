import {
    addNewMessage,setNewMessage
} from "../../redux/dialogsReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

const mapStateToProps = (state) => ({
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages,
    newMessageText: state.dialogsPage.newMessageText
});

export const DialogsContainer = compose(
    withAuthRedirect,
    connect(mapStateToProps, {setNewMessage, addNewMessage})
)(Dialogs);