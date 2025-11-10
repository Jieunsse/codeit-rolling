import base from '../base/button.module.css';
import primary from '@components/common/button/style/primary.module.css';
import secondary from '@components/common/button/style/secondary.module.css';
import outlined from '@components/common/button/style/outlined.module.css';

const variantStyles = {
  primary,
  secondary,
  outlined,
};

function resolveOutlinedSizeClass(styles, size, isIcon) {
  const isFluid = isIcon && size !== 56;
  const classKey = `size${size}${isFluid ? 'Fluid' : ''}`;
  const sizeClass = styles[classKey];

  if (!sizeClass) {
    throw new Error(`지정되지 않은 사이즈: ${classKey}`);
  }

  return sizeClass;
}

export function getButtonClassName({
  variant,
  visualState,
  size,
  isIcon = false,
}) {
  const styles = variantStyles[variant];
  if (!styles) throw new Error(`지정되지 않은 스타일 variant: ${variant}`);
  if (!styles[visualState])
    throw new Error(`지정되지 않은 타입 visualState: ${visualState}`);

  const designedClassName =
    variant === 'outlined'
      ? resolveOutlinedSizeClass(styles, size, isIcon)
      : styles.button;

  return [base.buttonBase, designedClassName, styles[visualState]].join(' ');
}
