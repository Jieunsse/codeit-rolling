import base from '@/components/common/button/base/button.module.css';
import styles from '@/components/common/button/base/variants/primary/index.module.css';

export default function Button({ label, state = 'enabled', ...props }) {
  const classNames = [base.buttonBase, styles.button];

  if (styles[state]) classNames.push(styles[state]);

  return (
    <button
      className={classNames.join(' ')}
      disabled={state === 'disabled'}
      {...props}
    >
      {label}
    </button>
  );
}
