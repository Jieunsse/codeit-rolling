import { getButtonClassName } from '@components/common/button/utils/getButtonClassName.js';
import { getButtonIcon } from '@components/common/button/utils/getButtonIcon.js';
import { validateButtonSize } from '@components/common/button/utils/validateButtonSize.js';
import { validateButtonIcon } from '@components/common/button/utils/validateButtonIcon.js';

/**
 *
 * @param title
 * @param variant
 * @param interactionState
 * @param isIcon
 * @param props
 */

export default function Button({
  title,
  variant = 'primary',
  interactionState = 'enabled',
  isIcon = false,
  ...props
}) {
  if (variant === 'outlined') {
    props.size = validateButtonSize(props.size);
    validateButtonIcon({ variant, size: props.size, isIcon });
  }

  const className = getButtonClassName({
    variant,
    interactionState,
    isIcon,
    size: props.size,
  });
  const icon = getButtonIcon({ variant, className, isIcon });

  return (
    <button
      {...props}
      className={`${className} ${props.className || ''}`}
      disabled={interactionState === 'disabled'}
    >
      {icon && <img src={icon.src} alt="icon" className={icon.className} />}
      <span>{title}</span>
    </button>
  );
}
