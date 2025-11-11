import ProfileImage from '../common/profileImage/ProfileImage';
import RelationBadge from '../common/badge/relationBadge/RelationBadge';
import trashImage from '../../assets/trash.svg';
import styles from './Card.module.css';

function Card({
  sender, 
  profileImageUrl,
  relationship,
  content, 
  createdAt,
}) {
  return (
      <div className={styles.container}>
        <div className={styles.header}>
          <ProfileImage imageUrl={profileImageUrl}/>
          <div className={styles.senderInfo}>
            <p className={styles.sender}>From. <span className={styles.senderName}>{sender}</span></p>
            <RelationBadge badgeName={relationship}/>
          </div>
          <button className={styles.deleteBtn}>
            <img src={trashImage} alt="삭제 버튼" />
          </button>
        </div>
        <div className={styles.content}>{content}</div>
        <p className={styles.createdAt}>{createdAt}</p>
      </div>
  );
}

export default Card;