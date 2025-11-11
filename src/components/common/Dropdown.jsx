import { useState } from "react";
import styles from "@/components/common/Dropdown.module.css";
import arrowDown from "@/components/common/assets/arrow-down.png";
import arrowTop from "@components/common/assets/arrow-top.png";

/**
 * Dropdown Component
 * 
 * - `options`는 반드시 `value`와 `label`을 key로 가지는 객체 배열이어야 합니다.
 *   - ex) [{ value: "friend", label: "친구" }, { value: "co-worker", label: "동료" }]
 *   - 이유: value는 식별자 역할, label은 실제 사용자에게 표시되는 텍스트 역할이기 때문입니다.
 * 
 * @component
 * @param {function} onChange - 옵션 선택 시 호출되는 콜백함수 (선택된 option의 value를 인자로 전달)
 * @param {Array<{value: string|number, label: string}>} options - 표시할 옵션 목록 (필수: value, label)
 * @param {string} [className=""] - 추가적인 클래스 이름 (선택적)
 * @param {boolean} [disabled=false] - 드롭다운 비활성화 여부
 * @param {boolean} [hasError=false] - 오류 상태 여부
 */

function Dropdown({
  value,
  onChange,
  options = [],
  placeholder = "옵션을 선택해주세요",
  className = "",
  disabled = false,
  hasError = false,
  errorMessage = "필수 입력 항목입니다",
}) {

  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    if (disabled) return;
    setIsOpen((prev) => !prev);
  };

  // 선택된 option의 value를 전달, 드롭다운 메뉴를 닫기 위해 isOpen을 false로 변경
  const handleSelect = (optionValue) => {
    onChange(optionValue);
    setIsOpen(false);
  };

  /**
   * 현재 선택된 value에 해당하는 label을 찾아 표시
   * - value와 일치하는 option 객체를 찾아 그 label을 반환
   * - value가 없을 경우 placeholder를 대신 표시
   */
  const currentLabel =
    value ? options.find((opt) => opt.value === value)?.label : "";

  return (
    <>
      <div className={`${styles.container} ${className}`}>
        <button
          type="button"
          onClick={handleToggle}
          disabled={disabled}
          className={`${styles.trigger} ${hasError ? styles.error : ""}`}
        >
          <span className={styles.label}>
            {currentLabel || placeholder}
          </span>

          {/* 열림/닫힘 상태에 따른 화살표 아이콘 변경 */}
          <img
            src={isOpen ? arrowTop : arrowDown}
            alt=""
            className={styles.icon}
          />
        </button>

        {/* 드롭다운 옵션 목록 */}
        {isOpen && (
          <ul className={styles.optionList}>
            {options.map((option) => (
              <li
                key={option.value}
                onClick={() => handleSelect(option.value)}
                className={`${styles.optionItem} ${
                  value === option.value ? styles.active : ""
                }`}
              >
                {option.label}
              </li>
            ))}
          </ul>
        )}
      </div>

      {hasError && <p className={styles.errorMessage}>{errorMessage}</p>}
    </>
  );
}

export default Dropdown;
