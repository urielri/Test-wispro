import { useState, useEffect, memo } from "react";
import Button from "components/utils/interactive/inputs/buttons/primary";
import { Input } from "antd";
import styles from "./style.module.scss";
import { setLogg } from "@/components/validation";
import { useUser } from "@/components/validation/context";
import { check } from "components/validation/";
function FormLogin(props: { setUser: Function }): JSX.Element {
  const { setUser } = props;
  const currentUser = useUser();
  const [values, setValues] = useState({
    user: "",
    psswd: "",
  });
  const [message, setMessage] = useState("");
  const handleinputs = (e) => {
    const aux = { ...values };
    aux[e.target.name] = e.target.value;
    setValues(aux);
  };

  useEffect(() => {
    if (!currentUser.logged) {
    }
  }, [currentUser]);
  const log = () => {
    if (check(values)) {
      setLogg(values, setUser).then((res: { status: string }) => {
        res.status !== "ok" && setMessage("Usuario o contrasena incorrectas");
      });
    } else {
      setMessage("Por favor, ngrese nuevamente los datos");
    }
  };
  const handleForm = (e) => {
    e.preventDefault();
    log();
  };
  return (
    <>
      <form onSubmit={(e) => handleForm(e)}>
        <Input
          size="middle"
          onChange={(e) => handleinputs(e)}
          name="user"
          placeholder="Usuario"
          bordered={true}
        />
        <Input.Password
          size="middle"
          onChange={(e) => handleinputs(e)}
          name="psswd"
          placeholder="Contrasena"
          bordered={true}
        />
        {message !== "" && <div className={styles.messagges}>{message}</div>}
        <div className={styles.actions}>
          <Button type="rounded" onClick={() => log()}>
            Ingresar
          </Button>
        </div>
      </form>
    </>
  );
}
export default memo(FormLogin);
