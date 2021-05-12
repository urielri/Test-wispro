import styles from "./style.module.scss";
import Button from 'components/utils/interactive/inputs/buttons/primary'
function Panel(): JSX.Element {
  return (
    <div className={styles.panel}>
      <div className={styles.basicInfo}>
        <h3>
          Bienvenido, <span>usuario</span>
        </h3>
        <Button type='simple'>Salir</Button>
      </div>
      <div className={styles.actions}>
      <Button type='rounded'>Figma</Button>
      <Button type='rounded'>GitHub</Button>
      </div>
    </div>
  );
}
export default Panel;
