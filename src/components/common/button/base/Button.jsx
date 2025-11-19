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
  icon,
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
  const defaultIcon = getButtonIcon({ variant, className, isIcon });

  // 부모에서 받은 아이콘이 우선 사용되도록 하는 코드
  const finalIcon = icon || defaultIcon;

  return (
    <button
      {...props}
      className={`${className} ${props.className || ''}`}
      disabled={interactionState === 'disabled'}
    >
      {icon && (
        <img src={finalIcon.src} alt="icon" className={finalIcon.className} />
      )}
      <span>{title}</span>
    </button>
  );
}
