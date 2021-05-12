import styles from "./style.module.scss";

function Controller(): JSX.Element {
  return (
    <div className={styles.controller}>
      <div className={styles.status}>
        <h4>test</h4>
        <h3>%55</h3>
      </div>
    </div>
  );
}
export default Controller;
