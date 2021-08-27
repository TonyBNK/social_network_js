import React from "react";
import c from './Friend.module.css';

export const Friend = (props) => {
    return(
      <div className={c.friend}>
          <img src={props.ava} alt="ava"/><div>{props.name}</div>
      </div>
    );
}