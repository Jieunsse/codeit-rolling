import styles from './shareMenuButton.module.css';
import IconButton from '@components/subHeader/components/iconButton/IconButton.jsx';
import shareIcon from '@components/assets/shareButton.svg';

export default function ShareMenuButton({
  isOpen,
  popoverRef,
  buttonRef,
  onToggle,
  onShare,
}) {
  return (
    <div className={styles.shareWrapper}>
      <IconButton icon={shareIcon} onClick={onToggle} ref={buttonRef} />

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
