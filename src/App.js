import { useState } from "react";
import "./styles.css";

export default function App() {
  const [headingText, setheadingText] = useState("Hello Peter");
  function handleClick() {
    setheadingText("Submitted");
    // prompt("what is your name");
    // confirm("You want to exit?");
  }
  //
  const [isMouseover, setMouseover] = useState(false);

  function handleClickmouse() {
    setMouseover(true);
  }
  function handleClickmouseout() {
    setMouseover(false);
  }
  return (
    <div className="App">
      <h1>{headingText}</h1>
      <input type="text" placeholder="Enter your name" />
      <br />
      {/* <button onClick={handleClick}>Login</button> */}
      <button
        style={{ backgroundColor: isMouseover ? "black" : "blue" }}
        onMouseOver={handleClickmouse}
        onMouseOut={handleClickmouseout}
      >
        Login
      </button>
    </div>
  );
}
