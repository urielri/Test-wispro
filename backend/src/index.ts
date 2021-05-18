import cors from "cors";
import express from "express";
import { consults } from "./queries";
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server, {
  cors: { origin: "http://localhost:3000" },
});

const si = require("systeminformation");
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);
app.use("/", consults);
let interval;
io.on("connection", (socket) => {
  console.log("conectado con el socket");
  if (interval) {
    clearInterval(interval);
  }
  interval = setInterval(() => getStatus(socket), 1000);
  io.on("disconnect", () => {
    console.log("desconectado");
    clearInterval(interval);
  });
});
const getStatus = async (socket) => {
  let stats = {
    cpu: 0,
    mem: 0,
    red: 0,
  };

  const current = await si
    .processes()
    .then((res) => {
      let aux = { mem: 0, cpu: 0 };

      aux.cpu = res.list[0].cpu;
      aux.mem = res.list[0].mem;
      return aux;
    })
    .catch((err) => console.log(err));
  stats.red = await si.networkStats().then((res) => {
    return res[0].tx_sec / 3072;
  });
  socket.emit("FromApi", {
    cpu: current.cpu,
    mem: current.mem,
    red: stats.red,
  });
};
server.listen(3030, () => {
  console.log("Server funcionando en puerto 3030!");
});
