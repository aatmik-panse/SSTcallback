import React, { useState, useCallback } from "react"; // Fix 1: Import useState and useCallback

const App = () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState(""); // Fix 2: Define input state
  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  console.log("App component is rendered");
  return (
    <div className="flex flex-col items-center justify-center min-h-screen m-2 p-4 content-normal">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={increment} className="btn text-ellipsis font-medium">
        Increment
      </button>
      <h4>Input Text: {input}</h4>
      <h4>Count: {count}</h4>
      <Child count={count} increment2={increment} />
    </div>
  );
};

const Child = React.memo(function MyComponent({ count, increment2 }) {
  console.log("Child component is rendered");
  return (
    <>
      <h2>
        This is Child <command />
      </h2>
      <h4>Child Count: {count}</h4>
      <button onClick={increment2}>INCchild</button>
    </>
  );
});

export default App;
