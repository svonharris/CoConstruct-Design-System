import { useState } from "react";
import styles from "./Modal.module.css";
import Button from "../Button/Button";

type ModalProps = {
  children: React.ReactNode;
  buttonLabel: string;
  ariaLabel: string;
  variant?: "primary" | "secondary";
};

const Modal = ({ children, buttonLabel, ariaLabel, variant }: ModalProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <Button onClick={openModal} ariaLabel={ariaLabel} variant={variant}>
        {buttonLabel}
      </Button>

      {isOpen && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button className={styles.closeBtn} onClick={closeModal}>
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
