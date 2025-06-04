"use client";

//Using the Logical Operatoor (&&) in rendering

export default function Notification({hasMessage}) {
    return (
        <div>
        <h1>Dashboard</h1>
        {hasMessage && <p>You have new message</p>}
        </div>
    );
}