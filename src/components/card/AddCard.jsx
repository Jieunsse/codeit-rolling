import styles from './AddCard.module.css';
import addButton from '@components/card/assets/add_button.svg';

function AddCard() {
  return (
      <div className={styles.container}>
        <button className={styles.button}>
          <img src={addButton} alt='추가 버튼' />
        </button>
      </div>
  );
}

export default AddCard;