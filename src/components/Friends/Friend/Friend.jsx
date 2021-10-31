import React from "react";
import c from './Friend.module.css';

export const Friend = (
    {
        name,
        ava
    }
) => {
    return(
      <div className={c.friend}>
          <img src={ava} alt="ava"/>
          <div>{name}</div>
      </div>
    );
}