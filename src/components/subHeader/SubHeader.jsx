import { lazy, Suspense } from 'react';
import styles from './subHeader.module.css';
import ShareButton from './components/shareButton/ShareButton.jsx';
import add_24 from '@components/assets/add-24.svg';
import shareButton from '@components/assets/shareButton.svg';
import EmojiPickerSkeleton from '@components/subHeader/components/emojiPickerSkeleton/EmojiPickerSkeleton.jsx';

const EmojiPickerLazy = lazy(() => import('emoji-picker-react')); // Lazy Load

export default function SubHeader({
  title,
  isOpen,
  onAddEmoji,
  onEmojiSelect,
  pickerRef,
}) {
  return (
    <section className={styles.subHeader}>
      <h2 className={styles.title}>To. {title}</h2>

      <div className={styles.rightArea}>
        <div className={styles.profileImage}>프로필</div>
        <span className={styles.count}>n명이 작성했어요!</span>
        <div className={styles.badgeList}>뱃지 목록</div>

        <div className={styles.addButtonWrapper}>
          <ShareButton icon={add_24} onClick={onAddEmoji} />

          <div
            ref={pickerRef}
            className={styles.pickerWrapper}
            style={{ display: isOpen ? 'block' : 'none' }}
          >
            <Suspense fallback={<EmojiPickerSkeleton />}>
              <EmojiPickerLazy onEmojiClick={onEmojiSelect} />
            </Suspense>
          </div>
        </div>

        <ShareButton icon={shareButton} />
      </div>
    </section>
  );
}
