import styles from "./style.module.scss";
import { UserInfo } from "components/interface";
function Item(props: {
  designation: string;
  data: UserInfo;
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
        ? Object.keys(data).map((res, index) => (
            <Field isIdentifier name={res} key={index} />
          ))
        : Object.values(data).map((res, index) => (
            <Field name={res} key={index} />
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
