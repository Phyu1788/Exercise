"use client";

import React, { useState } from "react";

export default function UserProfile() {
    const [username, setUsername] = useState("Phyu");
    const [email, setEmail] = useState("phyu@gmail.com");
    const [joined, setJoined] = useState(new Date());
    return (
        <div>
            <h1>State in function Component</h1>
            <div>{username}</div>
            <div>{email}</div>
            <div>{joined.toString()}</div>
        </div>
    );
}