import ProfileImage from '@components/common/profileImage/ProfileImage';
import RelationBadge from '@components/common/badge/relationBadge/RelationBadge';
import trashImage from '@components/card/assets/trash.svg';
import styles from './Card.module.css';

function Card({ data, onClick, onDelete }) {
  const {
    sender, 
    profileImageURL,
    relationship,
    content, 
    createdAt,
  } = data;

  const datePart = createdAt.split('T')[0];

  const myName = localStorage.getItem('my_name');
  const canDelete = myName === data.sender;

  const handleDeleteClick = (e) => {
    e.stopPropagation();
    onDelete(data.id);
  }

  return (
      <div className={styles.container} onClick={onClick}>
        <div className={styles.header}>
          <ProfileImage imageUrl={profileImageURL}/>
          <div className={styles.senderInfo}>
            <p className={styles.sender}>From. <span className={styles.senderName}>{sender}</span></p>
            <RelationBadge title={relationship}/>
          </div>
          {canDelete && (
            <button className={styles.deleteBtn} onClick={handleDeleteClick}>
              <img src={trashImage} alt="삭제 버튼" />
            </button>
          )}
        </div>
        <div className={styles.content}>{content}</div>
        <p className={styles.createdAt}>{datePart}</p>
      </div>
  );
}

export default Card;