import base from '../base/button.module.css';
import primary from '@components/common/button/variants/primary.module.css';
import secondary from '@components/common/button/variants/secondary.module.css';

const variantStyles = {
  primary,
  secondary,
};

export function getButtonClasses({ variant = 'primary', state = 'enabled' }) {
  const styles = variantStyles[variant];
  if (!styles) return base.buttonBase;

  const classList = [base.buttonBase, styles.button];
  if (styles[state]) classList.push(styles[state]);
  return classList.join(' ');
}
