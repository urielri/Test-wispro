import styles from "./style.module.scss";
import Item from "./item";
import { UserInfo } from "components/interface";
import { useState, useEffect } from "react";
import ModalUser from 'components/utils/architecture/modal'
const temporalObject: UserInfo = {
  nombre: "Uriel",
  apellido: "Rivero",
  email: "urielrivps@gmail.com",
  dni: "44699894",
  alta: "Positivo",
  domicilio: "Alvear 5708",
};
function Table(props: { data: any }) {
  const [isOpen, setOpen] = useState<boolean>(false);
  useEffect(() => {
    console.log(isOpen);
  }, [isOpen]);
  const handleModal = () => {
    setOpen((isOpen) => !isOpen);
  };
  return (
    <div className={styles.table}>
      <Item data={temporalObject} designation="identifiers"handleModal={handleModal} />
      <div className={styles.data}>
        <Item
          data={temporalObject}
          designation="field"
          handleModal={handleModal}
        />
      </div>
      <div className={styles.additionalData}>
        <span>Mostrando 5 usuarios de 24</span>
      </div>
      <ModalUser isOpen={isOpen} closeModal={handleModal}/>
    </div>
  );
}
export default Table;
