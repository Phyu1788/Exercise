"use client";

//Using switch Statements in rendering

export default function StatusMessage({ status }) {
  switch (status) {
    case "success":
      return <h1>Operation Successful</h1>;
    case "error":
      return <h1> Something went wrong!</h1>;
    default:
      return <h1>Waiting for actio....</h1>;
  }
}
