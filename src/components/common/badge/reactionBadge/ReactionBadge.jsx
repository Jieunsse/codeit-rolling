import styles from './reactionBadge.module.css';

export default function ReactionBadge({ emoji, count }) {
  return (
    <div className={styles.reactionBadge} role="group" aria-label="리액션 배지">
      <span className={styles.wrapper}>
        <span className={styles.emoji}>{emoji}</span>
        <span className={styles.count}>{count}</span>
      </span>
    </div>
  );
}
