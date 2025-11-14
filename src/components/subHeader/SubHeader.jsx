import { lazy, Suspense } from 'react';
import styles from './subHeader.module.css';
import ShareButton from './components/shareButton/ShareButton.jsx';
import add_24 from '@components/assets/add-24.svg';
import shareButton from '@components/assets/shareButton.svg';
import EmojiPickerSkeleton from '@components/subHeader/components/emojiPickerSkeleton/EmojiPickerSkeleton.jsx';
import BadgeWrapper from '@components/subHeader/components/badgeWrapper/BadgeWrapper.jsx';
import arrowDown from '@components/assets/arrow_down.svg';

const EmojiPickerLazy = lazy(() => import('emoji-picker-react'));

export default function SubHeader({ title, emojiPicker, arrowPopover }) {
  const { isOpen, onAddEmoji, onEmojiSelect, pickerRef, buttonRef } =
    emojiPicker;

  const { isArrowOpen, onToggleArrowPopover, arrowPopoverRef, arrowButtonRef } =
    arrowPopover;

  return (
    <section className={styles.subHeader}>
      <h2 className={styles.title}>To. {title}</h2>

      <div className={styles.rightArea}>
        <div className={styles.profileImage}>프로필</div>
        <span className={styles.count}>n명이 작성했어요!</span>
        <BadgeWrapper />

        {/* 🔽 ArrowDown */}
        <div className={styles.arrowDownWrapper}>
          <ShareButton
            icon={arrowDown}
            onClick={onToggleArrowPopover}
            ref={arrowButtonRef}
          />
          <div
            ref={arrowPopoverRef}
            className={styles.arrowPopover}
            style={{ display: isArrowOpen ? 'block' : 'none' }}
          >
            <div>옵션 1</div>
            <div>옵션 2</div>
            <div>옵션 3</div>
          </div>
        </div>

        {/* 😀 Emoji Picker */}
        <div className={styles.addButtonWrapper}>
          <ShareButton icon={add_24} onClick={onAddEmoji} ref={buttonRef} />
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
