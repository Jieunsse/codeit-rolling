import ProfileImage from '../common/profileImage/ProfileImage';
import styles from './CardMessageInfo.module.css';

/**
 * 카드 상단의 메시지 정보 영역 컴포넌트
 *
 * 수신자 이름(`To. {name}`), 프로필 이미지 리스트,
 * 작성한 사람 수(“n명이 작성했어요!”)를 표시합니다.
 *
 * 이미지 배경(`isImage=true`)일 경우 텍스트 색상을 반전시켜 가독성을 높입니다.
 *
 * @component
 * @param {Object} props - 컴포넌트 props
 * @param {string} props.name - 수신자 이름
 * @param {string[]} props.profileImages - 프로필 이미지 URL 배열
 * @param {number} props.messageCount - 작성한 메시지 개수
 * @param {boolean} props.isImage - 카드 배경이 이미지 모드인지 여부
 *
 * @example
 * <CardMessageInfo
 *   name="Sowon"
 *   profileImages={["/profile1.png", "/profile2.png", "/profile3.png"]}
 *   messageCount={30}
 *   isImage={false}
 * />
 */

function CardMessageInfo({ name, profileImages, messageCount, isImage }) {
  return (
    <div>
      <div>
        <span className={`${styles.name} ${isImage ? styles.imageMode : ''}`}>
          To. {name}
        </span>
      </div>
      <div className={styles.profileWrapper}>
        {profileImages.map((profileImage, idx) => (
          <ProfileImage
            imageUrl={null}
            key={idx}
            alt={`profile-${idx}`}
            className={styles.profileImage}
          />
        ))}
        <div className={styles.profileCount}>+{messageCount - 3}</div>
      </div>
      <div
        className={`${styles.messageCount} ${isImage ? styles.imageMode : ''}`}
      >
        <span className={styles.messageCountNumber}>{messageCount}</span>
        <span className={styles.messageCountText}>명이 작성했어요!</span>
      </div>
    </div>
  );
}

export default CardMessageInfo;
