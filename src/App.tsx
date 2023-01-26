import { useState } from "react";
import "./App.css";
import { Page } from "./Page";

function App() {
  const [count, setCount] = useState(0);

  const nums = [1, 2, 3];
  return (
    <>
      {nums.map((num) => (
        <Page>
          <h1 className="text-black">React App</h1>
          <div>
            <h1 className="text-black">{`This is page ${num}! `}</h1>
          </div>
        </Page>
      ))}
    </>
  );
}

export default App;
