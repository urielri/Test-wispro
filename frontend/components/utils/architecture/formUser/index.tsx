import styles from "./style.module.scss";
import Button from "components/utils/interactive/inputs/buttons/primary";
import { Input } from "antd";
import { UserInfo } from "components/interface";
import { useState, useEffect, memo } from "react";

function FormUser(props: {
  user: UserInfo;
  message: { text: string; style: any };
  handleinputs: Function;
  setUpdate: Function;
  disabled: boolean;
}): JSX.Element {
  const { user, message, handleinputs, setUpdate, disabled } = props;
  
  return (
    <div className={styles.formUser}>
      <div className={styles.info}>
        <div
          className={
            message.text !== ""
              ? `${styles.message} ${styles[message.style]}`
              : styles.message
          }
        >
          <h3>Editar usuario</h3>
          {message.text !== "" && <span>{message.text}</span>}
        </div>
        <Button
          type="simple"
          onClick={() => setUpdate(true)}
          disabled={disabled}
        >
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
            value={user.nombre}
          />

          <Input
            size="middle"
            onChange={(e) => handleinputs(e)}
            name="apellido"
            placeholder="Apellido"
            bordered={true}
            value={user.apellido}
          />

          <Input
            size="middle"
            onChange={(e) => handleinputs(e)}
            name="dni"
            placeholder="Dni"
            bordered={true}
            value={user.dni}
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
            value={user.domicilio}
          />
          <Input
            size="middle"
            onChange={(e) => handleinputs(e)}
            name="alta"
            placeholder="Alta"
            bordered={true}
            disabled
            value={user.alta}
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
            value={user.email}
          />
        </div>
      </div>
    </div>
  );
}
export default memo(FormUser);
