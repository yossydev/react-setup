import { renderToPipeableStream } from "react-dom/server";

const { pipe } = renderToPipeableStream(<App />, {
  bootstrapScripts: ["/index.js"],
  onShellReady() {
    response.setHeader("content-type", "text/html");
    pipe(response);
  },
});
