import { forwardRef } from 'react';
import styles from './shareButton.module.css';
import add_24 from '@components/assets/add-24.svg';
import arrowDown from '@components/assets/arrow_down.svg';

const ShareButton = forwardRef(function ShareButton({ icon, onClick }, ref) {
  const isAddIcon = icon === add_24;
  const isArrowDown = icon === arrowDown;
  const showLabel = isAddIcon;

  return (
    <button
      onClick={onClick}
      ref={ref}
      className={`${styles.addButton}
        ${!showLabel ? styles.iconOnly : ''}
        ${isArrowDown ? styles.arrowDown : ''}
      `}
    >
      <img src={icon} alt="아이콘" className={styles.icon} />

      {showLabel && <span className={styles.label}>추가</span>}
    </button>
  );
});

export default ShareButton;
