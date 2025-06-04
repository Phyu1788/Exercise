"use clients";

//Using the Ternary Operatior (? :) in rundering

export default function Greeting({isLoggedIn}) {
    return isLoggedIn ? <h1>Welcome Back!</h1> : <h1>Please Log In</h1>;

}