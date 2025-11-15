import styles from './subHeader.module.css';
import Toast from '@components/toast/Toast.jsx';
import { useSubHeader } from './hooks/useSubHeader.js';
import { useShare } from './hooks/useShare.js';
import { useTopEmojis } from './hooks/useTopEmojis.js';
import ShareMenuButton from '@components/subHeader/components/shareMenuButton/ShareMenuButton.jsx';
import Top8Emojis from '@components/subHeader/components/emoji/top8Emojis/Top8Emojis.jsx';
import Top3Emojis from '@components/subHeader/components/emoji/top3Emojis/Top3Emojis.jsx';
import EmojiPicker from '@components/subHeader/components/emoji/emojiPicker/EmojiPicker.jsx';
import WriterCounter from '@components/subHeader/components/writerCounter/WriterCounter.jsx';
import Profile from '@components/subHeader/components/profile/Profile.jsx';

export default function SubHeader({ title, data, onSelectEmoji, onShare }) {
  const {
    isOpen,
    pickerRef,
    emojiButtonRef,
    togglePicker,

    isArrowOpen,
    arrowPopoverRef,
    arrowButtonRef,
    onToggleArrowPopover,

    isShareOpen,
    sharePopoverRef,
    shareButtonRef,
    onToggleSharePopover,
  } = useSubHeader();

  const { showToast, handleShare } = useShare(onShare);
  const { emojiRanking, writerCount, profileCount, profileImages } = data;
  const topEmojis = useTopEmojis(emojiRanking);

  return (
    <>
      <section className={styles.subHeader}>
        <h2 className={styles.title}>To. {title}</h2>

        <span className={styles.rightArea}>
          <Profile profileCount={profileCount} profileImages={profileImages} />
          <WriterCounter writerCount={writerCount} />
          <Top3Emojis topEmojis={topEmojis} />

          <Top8Emojis
            isOpen={isArrowOpen}
            popoverRef={arrowPopoverRef}
            buttonRef={arrowButtonRef}
            onToggle={onToggleArrowPopover}
            topEmojis={topEmojis}
          />

          <EmojiPicker
            isOpen={isOpen}
            pickerRef={pickerRef}
            buttonRef={emojiButtonRef}
            onToggle={togglePicker}
            onSelectEmoji={onSelectEmoji}
          />

          <ShareMenuButton
            isOpen={isShareOpen}
            popoverRef={sharePopoverRef}
            buttonRef={shareButtonRef}
            onToggle={onToggleSharePopover}
            onShare={handleShare}
          />
        </span>
      </section>

      {showToast && <Toast />}
    </>
  );
}
