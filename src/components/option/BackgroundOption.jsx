import styles from '@/components/option/BackgroundOption.module.css';
import checkIcon from '@/components/assets/Enabled.png';

/**
 *
 * @component
 * @param {string} background - 배경으로 사용할 색상 또는 이미지 url() 문자열
 * @param {boolean} [selected=false] - 카드가 선택된 상태인지 여부
 * @param {string} [mode="color"] - 현재 모드 ("color" | "image")
 * @param {function} onClick - 클릭 이벤트 핸들러
 *
 */
function BackgroundOption({
  background,
  selected = false,
  mode = 'color',
  onClick,
}) {
  // 클래스 조건 분기: 이미지 모드 + 선택 시만 반투명 오버레이 추가
  const cardClass = `
    ${styles.card}
    ${mode === 'image' && selected ? styles.imageSelected : ''}
  `;

  return (
    <button
      type="button"
      className={cardClass}
      style={{
        background: mode === 'image' ? `url(${background})` : background,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
      onClick={onClick}
    >
      {selected && (
        <img className={styles.check} src={checkIcon} alt="선택됨" />
      )}
    </button>
  );
}

export default BackgroundOption;
