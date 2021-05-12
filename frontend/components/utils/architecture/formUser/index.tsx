import styles from "./style.module.scss";
import Button from "components/utils/interactive/inputs/buttons/primary";
import { Input } from "antd";

import { useState, useEffect } from "react";
function FormUser(props): JSX.Element {
  const [values, setValues] = useState({
    nombre: "",
    apellido: "",
    email: "",
    dni: "",
    alta: "",
    domicilio: "",
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
    <div className={styles.formUser}>
      <div className={styles.info}>
        <h3>Editar usuario</h3>
        <Button type="simple">Guardar</Button>
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
          />

          <Input
            size="middle"
            onChange={(e) => handleinputs(e)}
            name="apellido"
            placeholder="Apellido"
            bordered={true}
          />

          <Input
            size="middle"
            onChange={(e) => handleinputs(e)}
            name="dni"
            placeholder="Dni"
            bordered={true}
          />
        </div>
      </div>
      <div className={styles.section}>
        <h4>Ubicacion</h4>
        <div className={styles.autoGridInputs}>
        <Input size='middle' onChange={(e) => handleinputs(e)} name="domicilio" placeholder='Domicilio' bordered={true}/>
        <Input size='middle' onChange={(e) => handleinputs(e)} name="alta" placeholder='Alta' bordered={true}/>

        </div>
      </div>
      <div className={styles.section}>
        <h4>Contacto</h4>
        <div className={styles.autoGridInputs}>
        <Input size='middle' onChange={(e) => handleinputs(e)} name="email" placeholder='Email' bordered={true}/>
        </div>
      </div>
    </div>
  );
}
export default FormUser;
