"use client";

import {useState} from "react";

function Card(props)  {
    return<div>{props.children}</div>
}

function Heading ({text}){
    console.log("Heading Reader")
    return<div>{text}</div>
}

function Parent() {
    const [headingText ,setHeadingText] =useState("");
    return(
        <div>
            <div>
                <Card>
                    <input value={headingText} onChange={(e) => setHeadingText(e.target.value)}/>
                    <Heading text={headingText}/>
                    <h2>Welcome</h2>
                    <p>This is inside card</p>
                </Card>

                <card>
                    <h3>User Profile</h3>
                    <ul>
                        <li>Name: Phyu</li>
                        <li>Age :23</li>
                    </ul>
                </card>
            </div>
        </div>
    );
}
export default Parent;