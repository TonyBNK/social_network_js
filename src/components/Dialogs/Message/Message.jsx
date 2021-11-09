import React from "react";


export const Message = React.memo((
    {
        id,
        message
    }
) => {
    return (
        <div>
            {message}
        </div>
    );
});