import CardMessageInfo from './CardMessageInfo';
import CardReactionBar from './CardReactionBar';
import styles from './CardList.module.css';
import image01 from './assets/pattern_01.png';
import image02 from './assets/pattern_02.png';
import image03 from './assets/pattern_03.png';
import image04 from './assets/pattern_04.png';

/**
 * 카드 리스트 UI 컴포넌트
 *
 * 선택된 배경(색상 or 이미지) 스타일에 따라 다른 카드의 형태를 보여주며
 * 카드 내에 메시지 정보(`CardMessageInfo`)와 리액션 바(`CardReactionBar`)를 표시합니다.
 *
 * @component
 * @param {Object} props - 컴포넌트 props
 * @param {string} props.name - 카드 수신자 이름 (예: "Sowon")
 * @param {string[]} props.profileImages - 표시할 프로필 이미지 URL 배열 (최대 3개)
 * @param {number} props.messageCount - 메시지를 작성한 사람 수
 * @param {{emoji: string, count: number}[]} props.reactions - 이모지 반응 목록
 * @param {{type: 'color' | 'image', value: string, id?: number}} props.background - 선택된 배경 정보
 *
 * @example
 * <CardList
 *   name="Sowon"
 *   profileImages={["/img1.png", "/img2.png"]}
 *   messageCount={30}
 *   reactions={[{emoji: "👍", count: 20}, {emoji: "😍", count: 12}]}
 *   background={{ type: "color", value: "#ECD9FF", id: 0 }}
 * />
 */

function CardList({
  name,
  profileImages,
  messageCount,
  reactions,
  background,
}) {
  const { type, value, id } = background;
  const colorShape = [image01, image02, image03, image04];

  const backgroundStyle =
    type === 'color'
      ? { backgroundColor: value }
      : { backgroundImage: `url(${value})`, backgroundSize: 'cover' };

  const colorShapeStyle =
    type === 'color'
      ? { backgroundImage: `url(${colorShape[id]})`, backgroundSize: 'cover' }
      : {};

  const backgroundValueStyle = `${styles.container} ${type === 'color' ? styles.valueColor : styles.valueImage}`;

  return (
    <div className={backgroundValueStyle} style={backgroundStyle}>
      <div className={styles.containerShape} style={colorShapeStyle}></div>
      <div className={styles.overlay}></div>
      <CardMessageInfo
        name={name}
        profileImages={profileImages}
        messageCount={messageCount}
        isImage={type === 'image'}
      />
      <CardReactionBar reactions={reactions} />
    </div>
  );
}

export default CardList;
