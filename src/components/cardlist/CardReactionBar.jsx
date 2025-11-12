import styles from './CardReactionBar.module.css';
import ReactionBadge from '@components/common/badge/reactionBadge/ReactionBadge';

/**
 * 카드 하단의 리액션 바 컴포넌트
 *
 * 각 이모지와 반응 수를 `ReactionBadge` 컴포넌트로 보여줍니다.
 *
 * @component
 * @param {Object} props - 컴포넌트 props
 * @param {{emoji: string, count: number}[]} props.reactions - 이모지와 반응 개수 배열
 *
 * @example
 * <CardReactionBar
 *   reactions={[
 *     { emoji: "👍", count: 20 },
 *     { emoji: "😍", count: 12 },
 *     { emoji: "😢", count: 7 }
 *   ]}
 * />
 */

function CardReactionBar({ reactions }) {
  return (
    <div className={styles.container}>
      {reactions.map((reaction, idx) => (
        <div key={idx}>
          <ReactionBadge emoji={reaction.emoji} count={reaction.count} />
        </div>
      ))}
    </div>
  );
}

export default CardReactionBar;
