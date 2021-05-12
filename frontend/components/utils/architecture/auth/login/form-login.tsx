import { useState, useEffect } from "react";
import Button from "components/utils/interactive/inputs/buttons/primary";
import { Input } from "antd";
import styles from "./style.module.scss";
function FormLogin(props): JSX.Element {
  const [values, setValues] = useState({
    user: "",
    psswd: "",
  });
  const handleinputs = (e) => {
    const aux = { ...values };
    aux[e.target.name] = e.target.value;
    setValues(aux);
  };
  useEffect(() => {
    console.log(values);
  }, [values]);
  return (
    <>
      <form>
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
      </form>
      <div className={styles.actions}>
        <Button type="rounded">Ingresar</Button>
      </div>
    </>
  );
}
export default FormLogin;
