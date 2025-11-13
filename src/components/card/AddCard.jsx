import styles from './AddCard.module.css';
import addButton from '@components/card/assets/add_button.svg';
import { Link } from 'react-router-dom';

function AddCard({ recipientId }) {
  const messagePath = `/post/${recipientId}/message`;

  return (
    <Link to={messagePath}>
      <div className={styles.container}>
        <button className={styles.button}>
          <img src={addButton} alt='추가 버튼' />
        </button>
      </div>
    </Link>
      
  );
}

export default AddCard;