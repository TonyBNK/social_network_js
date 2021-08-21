import React from "react";
import c from './Message.module.css';

export const Message = (props) => {
    return(
        <div>{props.message}</div>
    );
};