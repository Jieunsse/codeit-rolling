import { createPortal } from 'react-dom';

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
    <div>
      <div>
        <div>{profileImg}</div>
        <div>{name}</div>
        <div>{badge}</div>
        <div>{createAt}</div>
        <div>{message}</div>
        <button onClick={onClose}>확인</button>
      </div>
    </div>,
    document.getElementById('modal-root')
  );
}

export default Modal;
