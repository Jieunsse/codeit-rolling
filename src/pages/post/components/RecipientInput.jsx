import Input from '@/components/common/input/Input';
import clsx from 'clsx';

function RecipientInput({ name, setName, hasError, setHasError, styles }) {
  return (
    <div className={styles.formContainer}>
      <div className={styles.formText}>To.</div>
      <Input
        className={clsx(styles.formBox, styles.inputOverride)}
        value={name}
        hasError={hasError}
        onChange={e => {
          setName(e.target.value);
          if (e.target.value.trim() !== '') {
            setHasError(false);
          }
        }}
        onBlur={() => {
          if (name.trim() === '') setHasError(true);
        }}
        errorMessage="값을 입력해 주세요"
        placeholder="받는 사람 이름을 입력해 주세요"
      />
    </div>
  );
}

export default RecipientInput;
