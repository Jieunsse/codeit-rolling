import ProfileImage from '../common/ProfileImage';
import RelationBadge from '../common/badge/relationBadge/RelationBadge';
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
            <p className={styles.sender}>From. <span>{sender}</span></p>
            <RelationBadge relationship={relationship}/>
          </div>
        </div>
        <div className={styles.content}>{content}</div>
        <p className={styles.createdAt}>{createdAt}</p>
      </div>
  );
}

export default Card;