"use client";

import { redirect } from "next/dist/server/api-utils";
import React from "react";

export default class UserProfile extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username:"Phyu",
            email:"phyu@gmail.com",
            joined: new Date("2025-5-5")
        };
    }
    render() {
        return(
            <div style={{ border: "1px solid #ccc",padding: 20, width: "300px",color:"blue", backgroundColor:"white"}}>
                <h1>User Profile</h1>
                <div>{this.state.username}</div>
                <div>{this.state.email}</div>
               <div>{this.state.joined.toString()}</div> 
            </div>

        );
    }
}
