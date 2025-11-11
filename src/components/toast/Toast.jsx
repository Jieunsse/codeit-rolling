import { useState } from 'react';
import completedIcon from '@components/common/assets/completed.svg';
import CloseButton from './CloseButton';
import styles from './Toast.module.css';

function Toast() {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className={styles.container}>
      <img src={completedIcon} alt="체크 아이콘" />
      <p>URL이 복사 되었습니다.</p>
      <CloseButton onClick={handleClose}/>
    </div>
  );
}

export default Toast;