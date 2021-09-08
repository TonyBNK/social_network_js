import React from "react";
import c from './Users.module.css';
import {User} from "./User/User";
import {v1} from "uuid";
import vsratiy_cat from "../../img/vsratiy_cat.jpg";
import doge from "../../img/doge.jpg";
import parrot from "../../img/parrot.jpg";
import hamster from "../../img/hamster.jpg";
import turtle from "../../img/turtle.jpg";

export const Users = (
    {
        users,
        followUnfollow,
        setUsers
    }
) => {
    if (users.length === 0){
        setUsers([
            {
                id: v1(),
                name: "Cat",
                ava: vsratiy_cat,
                followed: true,
                address: {country: 'Germany', city: 'Berlin'},
                text: 'Guten tac'
            },
            {
                id: v1(),
                name: "Doge",
                ava: doge,
                followed: false,
                address: {country: 'China', city: 'Beijin'},
                text: 'Nihao'
            },
            {
                id: v1(),
                name: "Parrot",
                ava: parrot,
                followed: true,
                address: {country: 'Russia', city: 'Moscow'},
                text: 'Priv'
            },
            {
                id: v1(),
                name: "Hamster",
                ava: hamster,
                followed: true,
                address: {country: 'UK', city: 'London'},
                text: 'Hello'
            },
            {
                id: v1(),
                name: "Turtle",
                ava: turtle,
                followed: false,
                address: {country: 'Japan', city: 'Tokyo'},
                text: 'Konichava'
            },
        ]);
    }

    const usersList = users.map(u =>
        <User
            id={u.id}
            name={u.name}
            ava={u.ava}
            followed={u.followed}
            address={u.address}
            text={u.text}
            followUnfollow={followUnfollow}
        />
    );

    return (
        <div className={c.users}>
            <h3>Users</h3>
            <span>{usersList}</span>
            <button className={c.show}>Show more</button>
        </div>
    )
}