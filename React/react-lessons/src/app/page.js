//import Example1 from "../components/Example1";
//import Example2 from "../components/Example2";
//import Example3 from "../components/Example3";
//import Example5 from "../components/Example5";
//import Example6 from "../components/Example6";
//import Example7 from "../components/Example7";
//import Example8 from "../components/Example8";
//import Example9 from "../components/Example9";
//import Example10 from "../components/Example10";
import Example23 from "../components/Example23";

//import Exercise1 from "../exercise/Exercise1";
//import Exercise2 from "../exercise/Exercise2";
//import Exercise3 from "../exercise/Exercise3";
//import Exercise4 from "../exercise/Exercise4";

export default function Home() {
  const todos = [
    {id : 1, text:"task 1"},
    {id : 2, text:"task 2"},
  ];
  return (
    <div>
    
    <Example23 todos={todos}/>

    </div>
  );
}  

