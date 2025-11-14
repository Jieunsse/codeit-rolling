import ReactionBadge from '@components/common/badge/reactionBadge/ReactionBadge.jsx';
import styles from './badgeWrapper.module.css';

export default function BadgeWrapper() {
  return (
    <div className={styles.wrapper}>
      <ReactionBadge emoji="🙌" count={24} />
      <ReactionBadge emoji="😊" count={16} />
      <ReactionBadge emoji="👍" count={10} />
    </div>
  );
}
