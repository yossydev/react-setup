import { hydrateRoot } from "react-dom/client";
import { useState } from "react";

export default function App() {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>SSR page</title>
      </head>
      <body>
        <Counter />
      </body>
    </html>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>
      You clicked me {count} times
    </button>
  );
}

hydrateRoot(document.getElementById("root"), <App />);
