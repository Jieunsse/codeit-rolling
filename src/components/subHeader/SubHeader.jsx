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

/**
 * @typedef {Object} EmojiCount
 * @property {string} emoji - 이모지 문자 (예: "😂")
 * @property {number} count - 해당 이모지의 사용 횟수
 */

/**
 * @typedef {Object} SubHeaderData
 * @property {EmojiCount[]} emojiRanking - 이모지 사용량 배열
 * @property {number} writerCount - 작성자 수 (예: 23)
 * @property {number} profileCount - 프로필 이미지 표시 개수
 * @property {string[]} profileImages - 작성자 프로필 이미지 URL 리스트
 */

/**
 * SubHeader 컴포넌트
 *
 * @param {Object} props - 컴포넌트 props
 * @param {string} props.title - "To. Ashley" 형태의 제목
 * @param {SubHeaderData} props.data - SubHeader에서 필요한 데이터 객체
 * @param {(emoji: string) => void} props.onSelectEmoji - 이모지 선택 시 실행되는 콜백
 * @param {(type: string) => void} props.onShare - 공유 버튼 클릭 시 실행되는 콜백
 */

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
