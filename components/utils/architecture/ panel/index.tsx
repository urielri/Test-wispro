import styles from "./style.module.scss";
import Button from 'components/utils/interactive/inputs/buttons/primary'
function Panel(): JSX.Element {
  return (
    <div className={styles.panel}>
      <div className={styles.basicInfo}>
        <h3>
          Bienvenido, <span>usuario</span>
        </h3>
        <h4>Salir</h4>
      </div>
      <div className={styles.actions}>
      <Button>Figma</Button>
      <Button>Figma</Button>
      </div>
    </div>
  );
}
export default Panel;
