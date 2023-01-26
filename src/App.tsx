import { useState } from "react";
import "./App.css";
import { BottomlessPage, Page, PageWithoutPadding } from "./Page";

function App() {
  const [count, setCount] = useState(0);

  const nums = [1, 2, 3];
  return (
    <>
      {nums.map((num) => (
        <PageWithoutPadding>
          <h1 className="text-black">React App</h1>
          <div>
            <h1 className="text-black">{`This is page ${num}! `}</h1>
          </div>
        </PageWithoutPadding>
      ))}
      <BottomlessPage>
        <h1 className="text-black">This one is boooottomless</h1>
        <p className="text-black">
          It will expand at will, but be careful! You might need to break things
          manually
        </p>
      </BottomlessPage>
    </>
  );
}

export default App;
