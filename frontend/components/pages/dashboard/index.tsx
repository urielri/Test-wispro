import styles from "./style.module.scss";
import Panel from "components/utils/architecture/ panel";
import Status from "components/utils/architecture/status";
import Table from "components/utils/architecture/table";
function ContentDashboard(props): JSX.Element {
  return (
    <>
      <Status />
      <div className="rows">
        <Panel />
        <Table data={null} />
      </div>
      <style jsx>
        {`
          .rows {
            display: grid;
            grid-template: 200px auto / 100%;
            width: 100%;
            height: 100%;
            row-gap: 48px;
            width: calc(100% - 400px);
            max-width: 1100px
          }
        `}
      </style>
    </>
  );
}
export default ContentDashboard;
