import add_24 from '@components/assets/add-24.svg';
import shareButton from '@components/assets/shareButton.svg';
import ShareButton from '@components/subHeader/components/shareButton/ShareButton.jsx';
import styles from '@components/subHeader/subHeader.module.css';

export default function SubHeader() {
  return (
    <section className={styles.subHeader}>
      <h2 className={styles.title}>To. Ashely Kim</h2>

      <div className={styles.rightArea}>
        <div className={styles.profileImage}>프로필</div>
        <span className={styles.count}>n명이 작성했어요!</span>

        <div className={styles.badgeList}>뱃지 목록</div>

        <ShareButton icon={add_24} />
        <ShareButton icon={shareButton} />
      </div>
    </section>
  );
}
