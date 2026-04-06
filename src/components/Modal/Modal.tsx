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

  const handleOpenModal = () => setIsOpen(true);
  const handleCloseModal = () => setIsOpen(false);

  return (
    <>
      <Button onClick={handleOpenModal} title={title} variant={variant}>
        {buttonLabel}
      </Button>

      {isOpen && (
        <div className={styles.modalOverlay} onClick={handleCloseModal}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <button
              className={styles.closeBtn}
              onClick={handleCloseModal}
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
