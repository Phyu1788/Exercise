"use client";
4
import React, {useState} from "react";

export default function Person() {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [phoneNo, setPhoneNo] = useState();

    const onChangeEmail = (changedEmail) => {
        setEmail(changedEmail);
    };

    const onChangePhoneNo = (event) => {
        setPhoneNo(event.target.value);
    };

    const onClickButton = () => {
        alert("Butten 1 clicked!");
    };
    const onClickButton2 = () => {
        alert("butten 2 clicked!");
    };

    return (
        <div>
            <h1>Event in Function Component</h1>
            <input
            value={name}
            placeholder="Enter Name"
            onChange={(event) => setName(event.target.value)}
            />

            <input
            value={email}
            placeholder="Enter Email"
            onChange={(event) => onChangeEmail(event.target.value)}
            />

            <input
            value={phoneNo}
            placeholder="Enter PhoneNo"
            onChange={onChangePhoneNo}
            />

            <button onClick={onClickButton}>Butten 1</button>
            <button onClick={() => onClickButton2()}>Butten 2</button>
        </div>
    )
}