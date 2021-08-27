import React from "react";
import c from './Message.module.css';

export const Message = (props) => {
    return (
        <div className={c.message}>
            {props.message}
        </div>
    );
};