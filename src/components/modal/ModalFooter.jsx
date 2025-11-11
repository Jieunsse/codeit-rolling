import styles from './ModalFooter.module.css';

function ModalFooter({ onClose }) {
  return (
    <>
      <div className={styles.footer}>
        <button onClick={onClose} className={styles.button}>
          확인
        </button>
      </div>
    </>
  );
}

export default ModalFooter;
