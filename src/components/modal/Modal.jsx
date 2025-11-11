import { createPortal } from 'react-dom';
import styles from './Modal.module.css';
import ModalHeader from './ModalHeader';
import ModalContent from './ModalContent';
import ModalFooter from './ModalFooter';

function Modal({
  isOpen,
  onClose,
  profileImg,
  name,
  badge,
  createAt,
  message,
}) {
  if (!isOpen) {
    return null;
  }
  return createPortal(
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <ModalHeader
          profileImg={profileImg}
          name={name}
          badge={badge}
          createAt={createAt}
        />
        <ModalContent message={message} />
        <ModalFooter onClose={onClose} />
      </div>
    </div>,
    document.getElementById('modal-root')
  );
}

export default Modal;
