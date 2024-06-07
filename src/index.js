import { useState } from "react";
import { createRoot } from "react-dom/client";
import { Foo } from "./foo";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>

      <Foo />
    </>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<Counter />);
