import { useState, useEffect, memo } from "react";
import Controller from "./controller";
import styles from "./style.module.scss";
import socketIOClient from "socket.io-client";

function Status(): JSX.Element {
  const [stats, setStats] = useState({
    cpu: "0",
    mem: "0",
    red: "0",
  });
  useEffect(() => {
    function test() {
      const soc = socketIOClient("http://localhost:3030/");
      soc.on("FromApi", (data) => {
        let aux = { ...stats };
        aux.cpu = data.cpu
        aux.mem =data.mem
        aux.red = (data.red * 100).toFixed(0)
        setStats(aux);
      });
    }
    test();
  }, []);
  return (
    <div className={styles.containerStatus}>
      <Controller data={stats.cpu} color="#9B51E0" identifier="Cpu" />
      <Controller
        data={stats.mem}
        color="#F2994A"
        identifier="Memoria"
      />
      <Controller data={stats.red} color="#56CCF2" identifier="Red" />
    </div>
  );
}
export default memo(Status);
