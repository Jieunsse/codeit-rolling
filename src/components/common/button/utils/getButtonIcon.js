import add24 from '@components/common/assets/button/add-24.svg';
import add20 from '@components/common/assets/button/add-20.svg';
import outlinedStyle from '@components/common/button/style/outlined.module.css';

const iconSize = {
  small: { src: add20, className: outlinedStyle.icon20 },
  large: { src: add24, className: outlinedStyle.icon24 },
};

export function getButtonIcon({ variant, className, isIcon }) {
  if (variant !== 'outlined' || !isIcon) return null;

  const size = className.includes('size28') ? 'small' : 'large';
  return iconSize[size];
}
