import base from '../base/button.module.css';
import primary from '@components/common/button/style/primary.module.css';
import secondary from '@components/common/button/style/secondary.module.css';
import outlined from '@components/common/button/style/outlined.module.css';

const variantStyles = {
  primary,
  secondary,
  outlined,
};

export function getButtonClasses({ variant = 'primary', state = 'enabled' }) {
  const styles = variantStyles[variant];
  if (!styles) return base.buttonBase;

  const classList = [base.buttonBase, styles.button];
  if (styles[state]) classList.push(styles[state]);
  return classList.join(' ');
}
