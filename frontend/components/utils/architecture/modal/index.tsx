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
  const [message, setMessage] = useState({ text: "", style: null });
  const [del, setDelete] = useState(false);
  const [isUpdate, setUpdate] = useState({ update: false, disabled: true });
  const [user, setUser] = useState<UserInfo>({
    nombre: "",
    apellido: "",
    email: "",
    dni: "",
    alta: "",
    domicilio: "",
    actividad: { sesiones: [1] },
  });
  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    email: "",
    dni: "",
    alta: "",
    domicilio: "",
  });

  useEffect(() => {
    if (isOpen) {
      getUser(id).then((res) => {
        setUser(res[0]);
        setForm({
          nombre: res[0].nombre,
          apellido: res[0].apellido,
          dni: res[0].dni,
          alta: res[0].alta,
          email: res[0].email,
          domicilio: res[0].domicilio,
        });
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
      setMessage({ text: "", style: null });
    }
  }, [isOpen]);
  useEffect(() => {
    if (isUpdate.update) {
      if (
        check({
          nombre: form.nombre,
          apellido: form.apellido,
          email: form.email,
          dni: form.dni,
          alta: form.alta,
          domicilio: form.domicilio,
        })
      ) {
        updateUser(id, form).then((res) => {
          setUpdate({ update: false, disabled: true });
          setMessage({
            text: "Cambios guardados!",
            style: "succesful",
          });
        });
      } else {
        setMessage({
          text: "Por favor ingrese nuevamente los datos",
          style: "err",
        });
      }
    }
  }, [isUpdate]);
  const handleinputs = (e) => {
    const aux = { ...form };
    aux[e.target.name] = e.target.value;
    setForm(aux);
    if (isUpdate.disabled) {
      setUpdate({ update: isUpdate.update, disabled: false });
    }
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
      className={
        isOpen === false
          ? `${styles.modal} ${styles.animreverse}`
          : styles.modal
      }
      overlayClassName={styles.overlayModal}
      bodyOpenClassName={styles.bodyModal}
      closeTimeoutMS={400}
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
          nombre: form.nombre,
          apellido: form.apellido,
          dni: form.dni,
          domicilio: form.domicilio,
          alta: form.alta,
          email: form.email,
        }}
        message={message}
        handleinputs={(e) => handleinputs(e)}
        setUpdate={(e) => setUpdate({ update: e, disabled: isUpdate.disabled })}
        disabled={isUpdate.disabled}
      />
    </Modal>
  );
}
export default memo(ModalUser);
