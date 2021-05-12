import Text from 'components/utils/interactive/inputs/form/text'
import Psswd from 'components/utils/interactive/inputs/form/psswd'
import Button from 'components/utils/interactive/inputs/buttons/primary'
import styles from './style.module.scss'
function FormLogin(props): JSX.Element {
  return (
    <>
      <form>
<Text desc="Ingrese usuario"/>
<Psswd desc="Ingrese contrasena"/>
      </form>
      <div className={styles.actions}>
          <Button type='rounded'>Ingresar</Button>
          </div>
    </>
  );
}
export default FormLogin;
