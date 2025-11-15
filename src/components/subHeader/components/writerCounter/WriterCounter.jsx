import styles from './WriterCounter.module.css';

export default function WriterCounter({ writerCount }) {
  return (
    <span className={styles.countWrapper}>
      <div className={styles.numberCount}>{writerCount}</div>
      명이 작성했어요!
    </span>
  );
}
