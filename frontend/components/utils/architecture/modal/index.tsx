import Modal from "react-modal";
import styles from "./style.module.scss";
import Close from "components/SVG/close";
import Button from "components/utils/interactive/inputs/buttons/primary";
import Tarjet from "components/utils/architecture/tarjet";
import FormUser from "components/utils/architecture/formUser";
import { UserInfo } from "components/interface";
import { useEffect, useState } from "react";
import { getUser, deleteUser } from "api";

Modal.setAppElement("#__next");
function ModalUser(props: {
  isOpen: boolean;
  id: string;
  closeModal: Function;
}): JSX.Element {
  const { isOpen, id, closeModal } = props;
  const [user, setUser] = useState<UserInfo>({
    nombre: "",
    apellido: "",
    email: "",
    dni: "",
    alta: "",
    domicilio: "",
    actividad: { sesiones: [] },
  });
  const [del, setDelete] = useState(false);
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
        actividad: { sesiones: [] },
      });
    }
  }, [isOpen]);
  useEffect(() => {
    console.log("sss", user);
  }, [user]);
  useEffect(() => {
    deleteUser(id).then((res) => {
      res.ok === 1 ? closeModal() : console.log("mal fla");
    });
  }, [del]);
  const handleDelete = () => {
    setDelete(true);
  };
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
        <h3>Actividad de {user.nombre}</h3>
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
        id={id}
      />
    </Modal>
  );
}
export default ModalUser;
