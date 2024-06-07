import { useState } from "react";
import { createRoot } from "react-dom/client";
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
function Counter() {
  const [count, setCount] = useState(0);
  return /*#__PURE__*/_jsxs(_Fragment, {
    children: [/*#__PURE__*/_jsx("h1", {
      children: count
    }), /*#__PURE__*/_jsx("button", {
      onClick: () => setCount(count + 1),
      children: "Increment"
    })]
  });
}
const root = createRoot(document.getElementById("root"));
root.render( /*#__PURE__*/_jsx(Counter, {}));