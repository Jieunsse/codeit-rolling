import { createPortal } from 'react-dom';
import styles from './Modal.module.css';
import ModalHeader from './ModalHeader';
import ModalContent from './ModalContent';
import ModalFooter from './ModalFooter';

/**
 * 전체 모달 컴포넌트.
 *
 * `isOpen`이 true일 때만 렌더링되며, React Portal을 통해 `#modal-root`에 마운트된다.
 *
 * @component
 * @param {Object} props - 모달 컴포넌트의 props
 * @param {boolean} props.isOpen - 모달 열림 상태
 * @param {Function} props.onClose - 모달 닫기 이벤트 핸들러
 * @param {string} props.profileImg - 사용자 프로필 이미지 URL
 * @param {string} props.name - 사용자 이름
 * @param {string} props.badge - 관계 배지 텍스트 (예: "친구", "동료")
 * @param {string} props.createAt - 생성일자 (예: "2023.07.08")
 * @param {string} props.message - 메시지 내용
 *
 * @example
 * <Modal
 *   isOpen={true}
 *   onClose={() => setIsOpen(false)}
 *   profileImg="/profile.png"
 *   name="김동훈"
 *   badge="동료"
 *   createAt="2023.07.08"
 *   message="프로젝트 고생 많았어요!"
 * />
 *
 * @example
 * index.html의 <div id="root"></div> 밑에 아래 코드가 반드시 작성되어져야 실행됨
 * <div id="modal-root"></div>
 */

function Modal({
  isOpen,
  onClose,
  profileImg,
  name,
  badge,
  createAt,
  message,
}) {
  if (!isOpen) {
    return null;
  }
  return createPortal(
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <ModalHeader
          profileImg={profileImg}
          name={name}
          badge={badge}
          createAt={createAt}
        />
        <ModalContent message={message} />
        <ModalFooter onClose={onClose} />
      </div>
    </div>,
    document.getElementById('modal-root')
  );
}

export default Modal;
