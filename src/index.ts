import net from "net";
import os from "os";
import express from "express";
import morgan from "morgan";

const content = `
<h1>Hello, world!</h1>
<pre>
hostname: ${os.hostname()}
</pre>
`;

const app = express();

app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send(content);
});

const server = app.listen(4444, () => {
  console.log(`Server is listening on port ${(server.address() as net.AddressInfo).port}`);
});

console.log(`Server started on the hostname: ${os.hostname()}`);
