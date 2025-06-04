"use client";

function Greeting({ name = "Guset", age = "unknown" }) {
  return (
    <h2>
      Hello {name}! You are {age} years old.
    </h2>
  );
}

function Parent() {
  return (
    <div>
      <Greeting name="Phyu" />
      <Greeting />
    </div>
  );
}
export default Parent;
