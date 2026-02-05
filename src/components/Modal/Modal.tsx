import { useState } from "react";
import styles from "./Modal.module.css";
import Button from "../Button/Button";

type ModalProps = {
  children: React.ReactNode;
  buttonLabel: string;
  title?: string;
  variant?: "primary" | "secondary";
};

const Modal = ({ children, buttonLabel, title, variant }: ModalProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <Button onClick={openModal} title={title} variant={variant}>
        {buttonLabel}
      </Button>

      {isOpen && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <button
              className={styles.closeBtn}
              onClick={closeModal}
              aria-label="Close Modal"
            >
              +
            </button>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
