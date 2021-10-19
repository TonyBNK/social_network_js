import React from "react";
import c from './Message.module.css';

export const Message = React.memo((
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
});