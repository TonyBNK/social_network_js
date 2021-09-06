import React from "react";
import c from './Message.module.css';

export const Message = (
    {
        id,
        message
    }
) => {
    return (
        <div className={c.message}>
            {message}
        </div>
    );
};