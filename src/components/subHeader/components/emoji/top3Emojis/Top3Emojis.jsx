import styles from './top3Emojis.module.css';
import ReactionBadge from '@components/common/badge/reactionBadge/ReactionBadge.jsx';

export default function Top3Emojis({ topEmojis = [] }) {
  const sliced = topEmojis.slice(0, 3);

  return (
    <div className={styles.wrapper}>
      {sliced.map((item, idx) => (
        <ReactionBadge key={idx} emoji={item.emoji} count={item.count} />
      ))}
    </div>
  );
}
