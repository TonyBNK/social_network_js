import React from "react";
import c from './Friends.module.css';
import {Friend} from "./Friend/Friend";
import {FriendsTitle} from "./FriendsTitle/FriendsTitle";

export const Friends = (props) => {

    let friendsElements = props.friends.map(f => <Friend id={f.id} name={f.name} ava={f.ava}/>);

    return(
      <div className={c.friends}>
          <FriendsTitle/>
          {friendsElements}
      </div>
    );
}