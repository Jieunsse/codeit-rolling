import styles from './reactionBadge.module.css';

/**
 * @param {string} emoji - 표시할 이모지
 * @param {number} count - 카운터에 전달할 값
 */
export default function ReactionBadge({ emoji, count }) {
  return (
<<<<<<< HEAD
    <div className={styles.reactionBadge}>
      <div className={styles.wrapper}>
        <div className={styles.emoji}>{emoji}</div>
        <div className={styles.count}>{count}</div>
      </div>
=======
    <div className={styles.reactionBadge} role="group" aria-label="리액션 배지">
      <span className={styles.wrapper}>
        <span className={styles.emoji}>{emoji}</span>
        <span className={styles.count}>{count}</span>
      </span>
>>>>>>> dev
    </div>
  );
}
