import React from "react";
import c from './Friend.module.css';

export const Friend = (props) => {
    return(
      <div className={c.friend}>
          <img src={props.ava} alt="ава"/><div>{props.name}</div>
      </div>
    );
}