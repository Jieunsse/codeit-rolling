import styles from './reactionBadge.module.css';

export default function ReactionBadge({ emoji, count }) {
  return (
    <div className={styles.reactionBadge}>
      <div className={styles.wrapper}>
        <div className={styles.emoji}>{emoji}</div>
        <div className={styles.count}>{count}</div>
      </div>
    </div>
  );
}
