import React from "react";
import c from './Message.module.scss';

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