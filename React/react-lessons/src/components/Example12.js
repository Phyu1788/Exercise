"use client";

//Global Style

const h1Style = {color: "red", backgroundColor: "white", padding:10};

export default function UserProfile(){
    return (
        <div>
            <h1 style={h1Style}>UserProfile</h1>
            <h1 style={h1Style}>UserProfile</h1>
            <p style={{ color: "blue", fontSize:20, padding:10}}>Name : Phyu</p>
        </div>
    );
}