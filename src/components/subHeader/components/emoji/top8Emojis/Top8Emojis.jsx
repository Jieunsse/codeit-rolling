import styles from './top8Emojis.module.css';
import ReactionBadge from '@components/common/badge/reactionBadge/ReactionBadge.jsx';
import arrowDown from '@components/assets/arrow_down.svg';
import IconButton from '@components/subHeader/components/iconButton/IconButton.jsx';

export default function Top8Emojis({
  isOpen,
  popoverRef,
  buttonRef,
  onToggle,
  topEmojis = [],
}) {
  return (
    <div className={styles.wrapper}>
      <IconButton icon={arrowDown} onClick={onToggle} ref={buttonRef} />

      <div
        ref={popoverRef}
        className={`${styles.popover} ${
          isOpen ? styles.visible : styles.hidden
        }`}
      >
        <div className={styles.emojiGrid}>
          {topEmojis.map((item, i) => (
            <ReactionBadge key={i} emoji={item.emoji} count={item.count} />
          ))}
        </div>
      </div>
    </div>
  );
}
