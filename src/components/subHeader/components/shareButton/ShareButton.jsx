import styles from './shareButton.module.css';
import add_24 from '@components/assets/add-24.svg';

export default function ShareButton({ icon, onClick }) {
  const isAddIcon = icon === add_24;
  const isIconOnly = !isAddIcon;

  return (
    <button
      onClick={onClick}
      className={`${styles.addButton} ${isIconOnly ? styles.iconOnly : ''}`}
    >
      <img src={icon} alt="아이콘" className={styles.icon} />

      {isAddIcon && <span className={styles.label}>추가</span>}
    </button>
  );
}
