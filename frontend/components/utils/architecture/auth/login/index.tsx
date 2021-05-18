import styles from "./style.module.scss";
import FormLogin from "./form-login";
function Login(props: { setUser: Function }): JSX.Element {
  const { setUser } = props;
  return (
    <div className={styles.containerLogin}>
      <div className={styles.tarjet}>
        <div className={styles.text}>
          <h1>Bienvenido</h1>
        </div>
        <div className={styles.form}>
          <FormLogin setUser={setUser}/>
        </div>
      </div>
    </div>
  );
}
export default Login;
