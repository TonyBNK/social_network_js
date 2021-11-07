import React from "react";
import c from './Friend.module.scss';

export const Friend = (
    {
        name,
        ava
    }
) => {
    return(
      <div className={c.friendContainer}>
          <img src={ava} alt="ava"/>
          <div>{name}</div>
      </div>
    );
}