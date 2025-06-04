"use client";

// Using Conditional Rendering with Components

function LoggedInView() {
    return <h1>Welcome Back!</h1>;
}

function LoggedOutView() {
    return <h1>Please log In</h1>;
}

export default function Greeting({ isloggedIn }) {
    return isloggedIn ? <LoggedInView/> : <LoggedOutView/>;
}