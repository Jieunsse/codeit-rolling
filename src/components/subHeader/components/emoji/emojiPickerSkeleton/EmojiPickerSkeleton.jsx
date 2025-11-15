import styles from './emojiPickerSkeleton.module.css';

export default function EmojiPickerSkeleton() {
  return (
    <div className={styles.container}>
      <div className={styles.searchBar} />

      <div className={styles.bigGrid}>
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className={styles.bigBox} />
        ))}
      </div>
    </div>
  );
}
