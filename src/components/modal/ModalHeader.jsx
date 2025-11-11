import styles from './ModalHeader.module.css';

function ModalHeader({ profileImg, name, badge, createAt }) {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.userInfo}>
          <div className={styles.profileImg}>{profileImg}</div>
          <div>
            <div className={styles.name}>
              <span className={styles.label}>From.</span>
              <span className={styles.username}>{name}</span>
            </div>
            <div className={styles.badge}>{badge}</div>
          </div>
        </div>
        <div className={styles.date}>{createAt}</div>
      </div>
    </>
  );
}

export default ModalHeader;
