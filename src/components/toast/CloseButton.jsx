import closeIcon from '@components/common/assets/close.svg';
import styles from './CloseButton.module.css';

function CloseButton({ onClick }) {
  return(
    <button
      className={styles.button} 
      type='button'
      onClick={onClick}
    >
      <img src={closeIcon}/>
    </button>
  );
}

export default CloseButton;