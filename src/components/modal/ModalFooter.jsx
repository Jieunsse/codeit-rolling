import { useState } from 'react';
import styles from './ModalFooter.module.css';
import Button from '@components/common/button/base/Button.jsx';

/**
 * 모달 하단의 버튼 영역 컴포넌트.
 *
 * 확인 버튼 클릭 시 `onClose` 콜백을 호출한다.
 * 버튼 컴포넌트의 visualState 값을 state로 변경해 버튼과 마우스의 상호작용에 대한 디자인 설정
 *
 * @component
 * @param {Object} props - 컴포넌트 props
 * @param {Function} props.onClose - 버튼 클릭 시 실행되는 닫기 핸들러
 *
 * @example
 * <ModalFooter onClose={() => setIsOpen(false)} />
 */

function ModalFooter({ onClose }) {
  const [visualState, setVisualState] = useState('enabled');

  return (
    <>
      <div className={styles.footer}>
        <Button
          onClick={onClose}
          buttonName="확인"
          variant="primary"
          visualState={visualState}
          onMouseEnter={() => setVisualState('hover')}
          onMouseLeave={() => setVisualState('enabled')}
          onMouseDown={() => setVisualState('pressed')}
          onMouseUp={() => setVisualState('hover')}
          onFocus={() => setVisualState('focus')}
          onBlur={() => setVisualState('enabled')}
        />
      </div>
    </>
  );
}

export default ModalFooter;
