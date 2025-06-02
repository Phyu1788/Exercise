"use client";

import React from "react";

//Event in class component

export default class Person extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Phyu",
            email: "phyu@gmail.com",
            phoneNo: "09786787678",
        };
        // Correct binding for onChangePhoneNo
        this.onChangePhoneNo = this.onChangePhoneNo.bind(this);
    }

    // Correct parameter name for onChangeEmail
    onChangeEmail(changeEmail) {
        this.setState({ email: changeEmail });
    }

    onChangePhoneNo(event) {
        this.setState({ phoneNo: event.target.value });
    }

    onClickButton() {
        alert("Button 1 clicked!"); // Corrected typo "Butten" to "Button"
    }

    onClickButton2() { // This method is defined but not used in the render method in the original code.
        alert("Button 2 clicked!");
    }

    render() {
        return (
            <div>
                <h1>Event in class Component</h1>
                <input
                    value={this.state.name}
                    placeholder="Enter Name"
                    onChange={(event) => {
                        this.setState({ name: event.target.value })
                    }}
                />

                <input
                    value={this.state.email}
                    placeholder="Enter Email"
                    onChange={(event) => this.onChangeEmail(event.target.value)
                    }
                />

                <input
                    value={this.state.phoneNo}
                    placeholder="Enter PhoneNo"
                    onChange={this.onChangePhoneNo}
                />

                <button onClick={this.onClickButton}>On Click</button>
                <button onClick={() => this.onClickButton2()}>Butten </button>

            </div>
        )
    }
}