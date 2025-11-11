import styles from './ModalContent.module.css';

function ModalContent({ message }) {
  return (
    <>
      <div className={styles.messageBox}>
        <div className={styles.scrollArea}>
          <p className={styles.message}>{message}</p>
        </div>
      </div>
    </>
  );
}

export default ModalContent;
