import React from "react";
import c from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialog = (props) => {
    let path = `/dialogs/${props.id}`;
    return(
        <div className={c.dialog}>
            <NavLink to={path} activeClassName={c.active}>{props.name}</NavLink>
        </div>
    );
};

const Message = (props) => {
    return(
        <div>{props.message}</div>
    );
};

export const Dialogs = () => {
    return (
        <div className={c.dialogs}>
            <div className={c.dialogsItems}>
                <Dialog name="Cat" id={1}/>
                <Dialog name="Doge" id={2}/>
                <Dialog name="Hamster" id={3}/>
                <Dialog name="Parrot" id={4}/>
                <Dialog name="Turtle" id={5}/>
            </div>
            <div className={c.messages}>
                <Message message='So much wow!'/>
                <Message message='Bark'/>
                <Message message="What's up?"/>
            </div>
        </div>
    );
};