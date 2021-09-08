import React from "react";
import c from './Friend.module.css';

export const Friend = (
    {
        id,
        name,
        ava
    }
) => {
    return(
      <div className={c.friend} key={id}>
          <img src={ava} alt="ava"/>
          <div>{name}</div>
      </div>
    );
}