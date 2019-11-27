import net from "net";
import test from "tape";
import createServer from "../src/createServer";
import fetch from "node-fetch";

test("Server rendered content test", t => {
  const server = createServer(0, false);

  server.on("listening", () => {
    const port = (server.address() as net.AddressInfo).port;
    fetch(`http://localhost:${port}`).then(res => {
      return res.text();
    }).then((content: string) => {
      t.ok(
        content.startsWith("\n<h1>Hello, world!</h1>"),
        "Rendered content must have the Hello World message."
      );
      server.close();
      t.end();
    });
  });
});
