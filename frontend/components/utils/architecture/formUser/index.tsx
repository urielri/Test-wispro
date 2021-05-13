import styles from "./style.module.scss";
import Button from "components/utils/interactive/inputs/buttons/primary";
import { Input } from "antd";
import { UserInfo } from "components/interface";
import { useState, useEffect } from "react";
import { updateUser } from "api";
function FormUser(props: { user: UserInfo; id: string }): JSX.Element {
  const { user, id } = props;
  const [values, setValues] = useState<UserInfo>({
    nombre: "",
    apellido: "",
    email: "",
    dni: "",
    alta: "",
    domicilio: "",
  });
  const [isUpdate, setUpdate] = useState(false);
  const handleinputs = (e) => {
    const aux = { ...values };
    aux[e.target.name] = e.target.value;
    setValues(aux);
  };
  useEffect(() => {
    console.log("22s22", values);

    setValues(user);
  }, [user]);
  useEffect(() => {
    setValues(user);
  }, []);
  useEffect(() => {
   isUpdate && updateUser(id, values).then((res) => {
      console.log(res);
    });
    setUpdate(false);
  }, [isUpdate]);
  const handleButton = () => {
    setUpdate((isUpdate) => !isUpdate);
  };
  return (
    <div className={styles.formUser}>
      <div className={styles.info}>
        <h3>Editar usuario</h3>
        <Button type="simple" onClick={() => handleButton()}>
          Guardar
        </Button>
      </div>
      <div className={styles.section}>
        <h4>Datos principales</h4>
        <div className={styles.autoGridInputs}>
          <Input
            size="middle"
            onChange={(e) => handleinputs(e)}
            name="nombre"
            placeholder="Nombre"
            bordered={true}
            value={values.nombre}
          />

          <Input
            size="middle"
            onChange={(e) => handleinputs(e)}
            name="apellido"
            placeholder="Apellido"
            bordered={true}
            value={values.apellido}
          />

          <Input
            size="middle"
            onChange={(e) => handleinputs(e)}
            name="dni"
            placeholder="Dni"
            bordered={true}
            value={values.dni}
          />
        </div>
      </div>
      <div className={styles.section}>
        <h4>Ubicacion</h4>
        <div className={styles.autoGridInputs}>
          <Input
            size="middle"
            onChange={(e) => handleinputs(e)}
            name="domicilio"
            placeholder="Domicilio"
            bordered={true}
            value={values.domicilio}
          />
          <Input
            size="middle"
            onChange={(e) => handleinputs(e)}
            name="alta"
            placeholder="Alta"
            bordered={true}
            disabled
            value={values.alta}
          />
        </div>
      </div>
      <div className={styles.section}>
        <h4>Contacto</h4>
        <div className={styles.autoGridInputs}>
          <Input
            size="middle"
            onChange={(e) => handleinputs(e)}
            name="email"
            disabled
            placeholder="Email"
            bordered={true}
            value={values.email}
          />
        </div>
      </div>
    </div>
  );
}
export default FormUser;
