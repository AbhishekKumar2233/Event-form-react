import { useState } from "react";
import Events from "./Events";
import "./styles.css";

export default function App() {
  const [name, setName] = useState("");

  function handleChange(event) {
    console.log(event.target.value);
    console.log(event.target.placeholder);
    console.log(event.target.type);
    setName(event.target.value);
    //used to get input value.
  }

  return (
    //  <Events />
    <div className="App">
      <h1>Hello {name}</h1>
      <input
        onChange={handleChange}
        type="text"
        placeholder="Enter your name"
        value={name}
      />
      <br />
      <button>Submit</button>
    </div>
  );
}
