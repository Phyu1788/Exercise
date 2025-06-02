"use client";

function Greeting(props){
    const {name, age} =props.user;
    return(
        <h2>
            Hello {name}! You are {age} years old.
        </h2>    
    );
}

function Parent() {
    const user1 = {name: "Phyu", age:"23"}; 
    const user2 = {name: "Sweet" , age:"24"};
    return(
        <div>
            <Greeting user ={user1}/>
            <Greeting user ={user2}/>
        </div>
    );
}
export default Parent;