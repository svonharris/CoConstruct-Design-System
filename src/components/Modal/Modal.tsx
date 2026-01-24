import { useState } from "react";
import styles from "./Modal.module.css";

type ModalProps = {
  children: React.ReactNode;
  trigger: React.ReactNode;
};

const Modal = ({ children, trigger }: ModalProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <div onClick={openModal}>{trigger}</div>

      {isOpen && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button className={styles.closeBtn} onClick={closeModal}>
              ✕
            </button>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
