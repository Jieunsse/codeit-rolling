import { lazy, Suspense } from 'react';
import styles from './subHeader.module.css';
import ShareButton from './components/shareButton/ShareButton.jsx';
import add_24 from '@components/assets/add-24.svg';
import shareButton from '@components/assets/shareButton.svg';
import EmojiPickerSkeleton from '@components/subHeader/components/emojiPickerSkeleton/EmojiPickerSkeleton.jsx';
import BadgeWrapper from '@components/subHeader/components/badgeWrapper/BadgeWrapper.jsx';
import arrowDown from '@components/assets/arrow_down.svg';
import PopoverMenu from '@components/subHeader/components/popoverMenu/PopoverMenu.jsx';

const EmojiPickerLazy = lazy(() => import('emoji-picker-react'));

export default function SubHeader({
  title,
  emojiPicker,
  arrowPopover,
  sharePopover,
  onClick,
}) {
  const { isOpen, onAddEmoji, onEmojiSelect, pickerRef, buttonRef } =
    emojiPicker;

  const { isArrowOpen, onToggleArrowPopover, arrowPopoverRef, arrowButtonRef } =
    arrowPopover;

  const { isShareOpen, onToggleSharePopover, sharePopoverRef, shareButtonRef } =
    sharePopover;

  return (
    <section className={styles.subHeader}>
      <h2 className={styles.title}>To. {title}</h2>

      <div className={styles.rightArea}>
        <div className={styles.profileImage}>프로필</div>
        <span className={styles.count}>n명이 작성했어요!</span>

        <BadgeWrapper />

        <div className={styles.arrowDownWrapper}>
          <ShareButton
            icon={arrowDown}
            onClick={onToggleArrowPopover}
            ref={arrowButtonRef}
          />

          <div
            ref={arrowPopoverRef}
            className={`${styles.popover} ${
              isArrowOpen ? styles.visible : styles.hidden
            }`}
          >
            <PopoverMenu
              items={[
                { label: <BadgeWrapper />, value: 'badge1' },
                { label: <BadgeWrapper />, value: 'badge2' },
              ]}
              onSelect={item => console.log('선택한 옵션:', item)}
            />
          </div>
        </div>

        <div className={styles.addButtonWrapper}>
          <ShareButton icon={add_24} onClick={onAddEmoji} ref={buttonRef} />

          <div
            ref={pickerRef}
            className={`${styles.pickerWrapper} ${
              isOpen ? styles.visible : styles.hidden
            }`}
          >
            <Suspense fallback={<EmojiPickerSkeleton />}>
              <EmojiPickerLazy onEmojiClick={onEmojiSelect} />
            </Suspense>
          </div>
        </div>

        <div className={styles.shareWrapper}>
          <ShareButton
            icon={shareButton}
            onClick={onToggleSharePopover}
            ref={shareButtonRef}
          />

          <div
            ref={sharePopoverRef}
            className={`${styles.popover} ${
              isShareOpen ? styles.visible : styles.hidden
            }`}
          >
            <button className={styles.popoverItem} onClick={onClick}>
              카카오톡 공유
            </button>
            <button className={styles.popoverItem} onClick={onClick}>
              URL 공유
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
