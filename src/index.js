import { Suspense, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { Foo } from "./foo.js";

function Posts() {
  const [data, setData] = useState();

  useEffect(() => {
    (async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const json = await res.json();
      setData(json);
    })();
  }, []);

  if (data == null) {
    return null;
  }

  return data.map((d) => {
    return (
      <div key={d.id}>
        <h2>{d.title}</h2>
        <p>{d.body}</p>
      </div>
    );
  });
}

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>

      <Foo />

      <Posts />
    </>
  );
}

// const root = createRoot(document.getElementById("root"));
// root.render(<Counter />);
