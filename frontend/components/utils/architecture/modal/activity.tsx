import dynamic from "next/dynamic";
import { memo } from "react";
import styles from "./style.module.scss";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
function Activity(props: { sesiones: number[] }): JSX.Element {
  const { sesiones } = props;
  return (
    <div className={styles.graphic}>
      <Chart
        type="bar"
        height={250}
        options={{
    
          plotOptions: {
            bar: {
              borderRadius: 10,
              columnWidth: "64",
            },
          },

          colors: ["#FFCF53"],
          xaxis: {
            categories: ["Lun", "Mar", "Mie", "Jue", "Vie", "Sab", "Dom"],
            position: "bottom",
            axisBorder: {
              show: false,
            },
            axisTicks: {
              show: false,
            },
            tooltip: {
              enabled: false,
            },
          },
          yaxis: {
            tooltip: {
              enabled: false,
            },
            axisBorder: {
              show: false,
            },
            axisTicks: {
              show: false,
            },
            labels: {
              show: false,
            },
          },
        }}
        series={[{ data: sesiones }]}
      />
    </div>
  );
}
export default memo(Activity);
