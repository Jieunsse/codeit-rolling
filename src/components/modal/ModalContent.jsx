import styles from './ModalContent.module.css';

/**
 * 모달 본문 메시지 영역 컴포넌트.
 *
 * 긴 메시지도 스크롤 가능하도록 감싸준다.
 *
 * @component
 * @param {Object} props - 컴포넌트 props
 * @param {string} props.message - 표시할 메시지 내용
 *
 * @example
 * <ModalContent message="정말 수고 많았어요! 내일 봬요 😊" />
 */

function ModalContent({ message }) {
  return (
    <>
      <div className={styles.messageBox}>
        <div className={styles.scrollArea}>
          <p className={styles.message}>{message}</p>
        </div>
      </div>
    </>
  );
}

export default ModalContent;
