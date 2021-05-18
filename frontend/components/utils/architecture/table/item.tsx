import styles from "./style.module.scss";
import { UserInfo } from "components/interface";
const identifiers = ["nombre", "apellido", "dni", "domicilio", "alta", "email"];
function Item(props: {
  designation: string;
  data?: UserInfo;
  handleModal: Function;
}): JSX.Element {
  const { designation, data, handleModal } = props;

  return (
    <div
      className={
        designation == "identifiers"
          ? `${styles.row} ${styles.identifiers}`
          : `${styles.row} ${styles.field}`
      }
      onClick={() => handleModal()}
    >
      {designation == "identifiers"
        ? identifiers.map((res) => (
            <Field isIdentifier name={res} key={res} />
          ))
        : Object.values(data).map((res) => (
            <Field name={res} key={res} />
          ))}
    </div>
    
  );
}
function Field(props: { name: string; isIdentifier?: boolean }): JSX.Element {
  const { name, isIdentifier } = props;
  return (
    <div className={styles.info}>
      {isIdentifier ? <h4>{name}</h4> : <span>{name}</span>}
    </div>
  );
}
export default Item;
// name.map((res, index) => <span key={index}>{res}</span>
