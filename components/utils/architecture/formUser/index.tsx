import styles from "./style.module.scss";
import Button from "components/utils/interactive/inputs/buttons/primary";
import Text from "components/utils/interactive/inputs/form/text";
function FormUser(props): JSX.Element {
  return (
    <div className={styles.formUser}>
      <div className={styles.info}>
        <h3>Editar usuario</h3>
        <Button type='simple'>Guardar</Button>
      </div>
      <div className={styles.section}>
        <h4>Datos principales</h4>
        <div className={styles.autoGridInputs}>
          <Text desc="Nombre" />
          <Text desc="Apellido" />
        </div>
      </div>
      <div className={styles.section}>
        <h4>Datos principales</h4>
        <div className={styles.autoGridInputs}>
          <Text desc="Nombre" />
          <Text desc="Apellido" />
        </div>
      </div>
      <div className={styles.section}>
        <h4>Datos principales</h4>
        <div className={styles.autoGridInputs}>
          <Text desc="Nombre" />
          <Text desc="Apellido" />
        </div>
      </div>
    </div>
  );
}
export default FormUser;
