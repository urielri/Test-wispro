import Modal from "react-modal";
import styles from "./style.module.scss";
import Close from "components/SVG/close";
import Button from "components/utils/interactive/inputs/buttons/primary";
import Tarjet from "components/utils/architecture/tarjet";
import FormUser from "components/utils/architecture/formUser";
import { UserInfo } from "components/interface";
import { useEffect, useState, memo } from "react";
import { getUser, deleteUser, updateUser } from "api";
import Activity from "./activity";

import { check } from "@/components/validation";
Modal.setAppElement("#__next");
function ModalUser(props: {
  isOpen: boolean;
  id: string;
  closeModal: Function;
}): JSX.Element {
  const { isOpen, id, closeModal } = props;
  const [message, setMessage] = useState("");
  const [del, setDelete] = useState(false);
  const [isUpdate, setUpdate] = useState(false);
  const [user, setUser] = useState<UserInfo>({
    nombre: "",
    apellido: "",
    email: "",
    dni: "",
    alta: "",
    domicilio: "",
    actividad: { sesiones: [1] },
  });
 

  useEffect(() => {
    if (isOpen) {
      getUser(id).then((res) => {
        setUser(res[0]);
      });
    } else {
      setUser({
        nombre: "",
        apellido: "",
        email: "",
        dni: "",
        alta: "",
        domicilio: "",
        actividad: { sesiones: [0] },
      });
    }
  }, [isOpen]);
  useEffect(() => {
    if (isUpdate ) {
      if (check({  nombre: user.nombre,
      apellido: user.apellido,
      email: user.email,
      dni: user.dni,
      alta: user.alta,
      domicilio: "",})) {
        updateUser(id, user).then((res) => {
          console.log(res);
          setUpdate(false);
        });
      } else {
        setMessage("Por favor ingrese nuevamente los datos");
        console.log("sale por aca");
      }
    }
  }, [isUpdate]);
  const handleinputs = (e) => {
    const aux = { ...user };
    aux[e.target.name] = e.target.value;
    setUser(aux);
  };

  useEffect(() => {
    del &&
      deleteUser(id).then((res) => {
        res.ok === 1 ? closeModal() : console.log("Usuario eliminado");
      });
  }, [del]);
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      className={styles.modal}
      overlayClassName={styles.overlayModal}
      bodyOpenClassName={styles.bodyModal}
    >
      <div className={styles.header}>
        <a onClick={() => closeModal()}>
          <Close />
        </a>
        <Button
          background="#EB3232"
          type="rounded"
          onClick={() => setDelete(true)}
        >
          Eliminar a {user.nombre}
        </Button>
      </div>
      <Tarjet>
        <>
          <h3>Actividad de {user.nombre}</h3>
          <Activity sesiones={user.actividad.sesiones} />
        </>
      </Tarjet>
      <FormUser
        user={{
          nombre: user.nombre,
          apellido: user.apellido,
          dni: user.dni,
          domicilio: user.domicilio,
          alta: user.alta,
          email: user.email,
        }}
        message={message}
        handleinputs={(e) => handleinputs(e)}
        setUpdate={(e) => setUpdate(e)}
      />
    </Modal>
  );
}
export default memo(ModalUser);
