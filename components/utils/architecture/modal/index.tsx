import Modal from "react-modal";
import styles from "./style.module.scss";
import Close from "components/SVG/close";
import Button from "components/utils/interactive/inputs/buttons/primary";
import Tarjet from "components/utils/architecture/tarjet";
import FormUser from "components/utils/architecture/formUser";
Modal.setAppElement("#__next");
function ModalUser(props: {
  isOpen: boolean;
  data: any;
  closeModal: Function;
}): JSX.Element {
  const { isOpen, data, closeModal } = props;
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
        <Button background='#EB3232' type="rounded">Eliminar usuario</Button>
      </div>
      <Tarjet>
        <h3>Actividad de usuario</h3>
      </Tarjet>
      <FormUser />
    </Modal>
  );
}
export default ModalUser;
