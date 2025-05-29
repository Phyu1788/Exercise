"use client";

import React, { useState } from "react";

export default function Person() {
    const [name, setName] = useState("Phyu");
    const [date, srtDate] = useState(new Date());
    return (
        <div>
            <h1>State in function Component</h1>
            <div>{name}</div>
            <div>{date.toString()}</div>
        </div>
    );
}