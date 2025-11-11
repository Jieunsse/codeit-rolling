import RelationBadge from '../common/badge/relationBadge/RelationBadge';
import ProfileImage from '../common/profileImage/ProfileImage';
import styles from './ModalHeader.module.css';

function ModalHeader({ imageUrl, name, badge, createAt }) {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.userInfo}>
          <ProfileImage imageUrl={imageUrl} />
          {/* <div className={styles.profileImg}>{profileImg}</div> */}
          <div>
            <div className={styles.name}>
              <span className={styles.label}>From.</span>
              <span className={styles.username}>{name}</span>
            </div>
            <RelationBadge badgeName={'동료'} />
            {/* <div className={styles.badge}>{badge}</div> */}
          </div>
        </div>
        <div className={styles.date}>{createAt}</div>
      </div>
    </>
  );
}

export default ModalHeader;
