import styles from './ModalFooter.module.css';
import Button from '@components/common/button/base/Button.jsx';

function ModalFooter({ onClose }) {
  return (
    <>
      <div className={styles.footer}>
        <Button
          onClick={onClose}
          buttonName="확인"
          variant="primary"
          visualState="enabled"
        />
      </div>
    </>
  );
}

export default ModalFooter;
