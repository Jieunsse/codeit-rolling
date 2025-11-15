import React, { Suspense } from 'react';
import styles from './emojiPicker.module.css';

import EmojiPickerSkeleton from '../emojiPickerSkeleton/EmojiPickerSkeleton.jsx';
import addIcon from '@components/assets/add-24.svg';
import IconButton from '@components/subHeader/components/iconButton/IconButton.jsx';

const EmojiPickerLazy = React.lazy(() => import('emoji-picker-react'));

export default function EmojiPicker({
  isOpen,
  pickerRef,
  buttonRef,
  onToggle,
  onSelectEmoji,
}) {
  return (
    <div className={styles.wrapper}>
      <IconButton icon={addIcon} onClick={onToggle} ref={buttonRef} />

      <div
        ref={pickerRef}
        className={`${styles.pickerWrapper} ${
          isOpen ? styles.visible : styles.hidden
        }`}
      >
        <Suspense fallback={<EmojiPickerSkeleton />}>
          <EmojiPickerLazy onEmojiClick={e => onSelectEmoji?.(e.emoji)} />
        </Suspense>
      </div>
    </div>
  );
}
