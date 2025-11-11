import clsx from "clsx";
import styles from "@/components/common/input/Input.module.css";

/**
 * @component
 * @param {string}   [className=""]        추가적인 클래스 이름 (선택적)
 * @param {boolean}  [hasError=false]      에러 표시 여부 (에러 문구와 같이 연관됨)
 * @param {boolean}  [disabled=false]      입력칸 비활성화 여부
 * 
 * clsx를 사용했습니다 npm i clsx 설치 필요
 */

function Input({
  value,
  onChange,
  placeholder = "이름을 입력해주세요",
  className = "",
  hasError = false,
  errorMessage = "유효한 입력이 아닙니다",
  disabled = false,
}) {
  return (
    <>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        className={clsx(styles.input, hasError && styles.error, className)}
      />
      {hasError && <p className={styles.errorMessage}>{errorMessage}</p>}
    </>
  );
}

export default Input;


