import Input from '@components/common/input/Input.jsx';
import styles from './listInput.module.css';

/**
 * @component SearchInput
 * @description
 * 검색 인풋 + 검색 버튼을 묶은 공통 컴포넌트
 * - Enter 입력 및 버튼 클릭 시 검색 실행
 */
export default function SearchInput({
  searchTerm,
  onChange,
  onSearch,
  onKeyDown,
}) {
  return (
    <section className={styles.inputBox}>
      <div className={styles.inputWrapper}>
        <Input
          type="text"
          placeholder="이름으로 검색..."
          value={searchTerm}
          onChange={onChange}
          onKeyDown={onKeyDown}
        />
        <button onClick={onSearch} className={styles.searchButton}>
          검색
        </button>
      </div>
    </section>
  );
}
