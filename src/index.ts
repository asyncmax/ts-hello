import net from "net";
import os from "os";
import fs from "fs";
import express from "express";
import morgan from "morgan";

const content = `
<h1>Hello, world!</h1>
<pre>
hostname: ${os.hostname()}
</pre>
`;

function cat(path: string): string {
  try {
    const content = fs.readFileSync(path, "utf8");
    return content;
  } catch (err) {
    if (err.code != "ENOENT")
      throw err;
    return "";
  }
}

const app = express();

app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send(content);
});

const server = app.listen(4444, () => {
  console.log(`Server is listening on port ${(server.address() as net.AddressInfo).port}`);
});

console.log(`Server is running on the following environment:`);
console.log(`  hostname: ${os.hostname()}`);
console.log(`  node: ${process.version}`);
console.log(`  /proc/version: ${cat("/proc/version")}`);
console.log(`  /etc/issue: ${cat("/etc/issue")}`);
