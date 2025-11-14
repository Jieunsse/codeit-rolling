import arrowLeft from '@/pages/assets/arrowLeft.svg';
import arrowRight from '@/pages/assets/arrowRight.svg';
import styles from './arrowButton.module.css';

/**
 * @param { 'left' | 'right' } direction - 화살표 방향
 */
export default function ArrowButton({ direction, ...props }) {
  return (
    <button type="button" className={styles.ArrowButton} {...props}>
      <img
        src={direction === 'left' ? arrowLeft : arrowRight}
        alt="arrowButton"
      />
    </button>
  );
}
