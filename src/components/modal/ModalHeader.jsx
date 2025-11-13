import RelationBadge from '../common/badge/relationBadge/RelationBadge';
import ProfileImage from '../common/profileImage/ProfileImage';
import styles from './ModalHeader.module.css';

/**
 * 모달 상단의 사용자 정보 영역 컴포넌트.
 *
 * 프로필 이미지, 이름, 관계 배지, 작성일을 표시한다.
 *
 * @component
 * @param {Object} props - 컴포넌트 props
 * @param {string} props.imageUrl - 프로필 이미지 URL
 * @param {string} props.name - 사용자 이름
 * @param {string} props.badge - 관계 배지 텍스트 (예: "친구", "동료")
 * @param {string} props.createAt - 작성 날짜 (예: "2023.07.08")
 *
 * @example
 * <ModalHeader
 *   imageUrl="/user.png"
 *   name="김동훈"
 *   badge="동료"
 *   createAt="2023.07.08"
 * />
 */

function ModalHeader({ imageUrl, name, badge, createAt }) {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.userInfo}>
          <ProfileImage imageUrl={imageUrl} />
          <div>
            <div className={styles.name}>
              <span className={styles.label}>From.</span>
              <span className={styles.username}>{name}</span>
            </div>
            <RelationBadge badgeName={badge} />
          </div>
        </div>
        <div className={styles.date}>{createAt}</div>
      </div>
    </>
  );
}

export default ModalHeader;
