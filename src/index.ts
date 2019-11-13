import net from "net";
import express from "express";
import morgan from "morgan";

const app = express();

app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("<h1>Hello, world!</h1>");
});

const server = app.listen(3000, () => {
  console.log(`Server is listening on port ${(server.address() as net.AddressInfo).port}`);
});
