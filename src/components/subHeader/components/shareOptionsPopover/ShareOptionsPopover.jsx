import styles from './sharePopover.module.css';
import ShareButton from '../shareButton/ShareButton.jsx';
import shareIcon from '@components/assets/shareButton.svg';

export default function ShareOptionsPopover({
  isOpen,
  popoverRef,
  buttonRef,
  onToggle,
  onShare,
}) {
  return (
    <div className={styles.shareWrapper}>
      <ShareButton icon={shareIcon} onClick={onToggle} ref={buttonRef} />

      <div
        ref={popoverRef}
        className={`${styles.sharePopover} ${
          isOpen ? styles.visible : styles.hidden
        }`}
      >
        <button className={styles.popoverItem} onClick={() => onShare('kakao')}>
          카카오톡 공유
        </button>

        <button className={styles.popoverItem} onClick={() => onShare('url')}>
          URL 공유
        </button>
      </div>
    </div>
  );
}
