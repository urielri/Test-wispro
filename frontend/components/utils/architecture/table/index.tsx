import styles from "./style.module.scss";
import Item from "./item";
import { UserInfo } from "components/interface";
import { useState, useEffect } from "react";
import ModalUser from "components/utils/architecture/modal";
import { getUsers } from "api";
function Table(props: { data: UserInfo[] }) {
  const { data } = props;
  const [currentUsers, setCurrentUsers] = useState(data);
  const [isOpen, setOpen] = useState({ active: false, id: "" });
  useEffect(() => {
    !isOpen.active && getUsers().then((res) => {setCurrentUsers(res)});
  }, [isOpen]);
  const handleModal = (id) => {
    setOpen({ active: !isOpen.active, id: id });
  };
  return (
    <div className={styles.table}>
      <Item designation="identifiers" handleModal={handleModal} />
      <div className={styles.data}>
        {currentUsers.map((res) => (
          <Item
            data={{
              nombre: res.nombre,
              apellido: res.apellido,
              dni: res.dni,
              domicilio: res.domicilio,
              alta: res.alta,
              email: res.email,
            }}
            key={res._id}
            designation="field"
            handleModal={() => handleModal(res._id)}
          />
        ))}
      </div>
      <div className={styles.additionalData}>
        <span>Mostrando {currentUsers.length} usuarios de {currentUsers.length}</span>
      </div>
      <ModalUser
        isOpen={isOpen.active}
        id={isOpen.id}
        closeModal={handleModal}
      />
    </div>
  );
}
export default Table;
