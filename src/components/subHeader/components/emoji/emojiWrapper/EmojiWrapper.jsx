import styles from './emojiWrapper.module.css';
import ReactionBadge from '@components/common/badge/reactionBadge/ReactionBadge.jsx';

export default function EmojiWrapper({ topEmojis = [] }) {
  const sliced = topEmojis.slice(0, 4);

  return (
    <div className={styles.wrapper}>
      {sliced.map((item, idx) => (
        <ReactionBadge key={idx} emoji={item.emoji} count={item.count} />
      ))}
    </div>
  );
}
