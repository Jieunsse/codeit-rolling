import { getButtonClassName } from '@components/common/button/utils/getButtonClassName.js';
import { getButtonIcon } from '@components/common/button/utils/getButtonIcon.js';

export default function Button({
  buttonName,
  variant = 'primary',
  state = 'enabled',
  isIcon = false,
  ...props
}) {
  const className = getButtonClassName({ variant, state, isIcon });
  const icon = getButtonIcon({ variant, className, isIcon });

  return (
    <button className={className} disabled={state === 'disabled'} {...props}>
      {icon && <img src={icon.src} alt="icon" className={icon.className} />}
      <span>{buttonName}</span>
    </button>
  );
}
