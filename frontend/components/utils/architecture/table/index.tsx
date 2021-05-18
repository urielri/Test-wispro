import styles from "./style.module.scss";
import Item from "./item";
import { UserInfo } from "components/interface";
import { useState, useEffect } from "react";
import ModalUser from "components/utils/architecture/modal";
import { getUsers, orderUsers } from "api";
function Table(props: { data: UserInfo[] }) {
  const { data } = props;
  const [currentUsers, setCurrentUsers] = useState(data);
  const [isOpen, setOpen] = useState({ active: false, id: "" });
  const [order, setOrder] = useState(false);
  useEffect(() => {
    !isOpen.active &&
      orderUsers(order ? 1 : -1).then((res) => {
        setCurrentUsers(res);
      });
  }, [isOpen]);
  useEffect(() => {
    orderUsers(order ? 1 : -1).then((res) => {
      setCurrentUsers(res);
    });
  }, [order]);
  const handleModal = (id) => {
    setOpen({ active: !isOpen.active, id: id });
  };
  return (
    <div className={styles.table}>
      <Item
        designation="identifiers"
        onClick={() => setOrder((order) => !order)}
      />
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
            onClick={() => handleModal(res._id)}
          />
        ))}
      </div>
      <div className={styles.additionalData}>
        <span>
          Mostrando {currentUsers.length} usuarios de {currentUsers.length}
        </span>
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
