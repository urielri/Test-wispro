import styles from "./style.module.scss";
import dynamic from "next/dynamic";
import { memo } from "react";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { useState, useEffect } from "react";
function Controller(props: {
  data: string;
  identifier: string;
  color: string;
}): JSX.Element {
  const { data, color, identifier } = props;
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setLoading(false);
      console.log(window.innerWidth);
    }
  }, []);
  useEffect(() => {
    console.log(loading);
  }, [loading]);
  return (
    <div className={styles.controller}>
      <div className={styles.status}>
        <div className={styles.graphic}>
          {!loading ? (
            <Chart
              options={{
                colors: [`${color}`],
                chart: {
                  height: 210,
                  type: "radialBar",
                },
                stroke: {
                  lineCap: "round",
                },

                plotOptions: {
                  radialBar: {
                    hollow: {
                      size: "75%",
                      margin: 0,
                      
                    },

                    dataLabels: {
                      name: {
                        offsetY: -10,
                        color: "#888888",
                        fontSize: "18px",
                      },
                      value: {
                        offsetY: 5,
                        color: `${color}`,
                        fontSize: "24px",
                        show: true,
                      },
                    },
                  },
                },
                labels: [`${identifier}`],
              }}
              series={[data]}
              type="radialBar"
              height="200"
              width="200"
            />
          ) : (
            <span>puto</span>
          )}
        </div>
      </div>
    </div>
  );
}
export default memo(Controller);
