export function validateButtonIcon({ variant, size, isIcon }) {
  if (variant === 'outlined' && size === 56 && isIcon) {
    throw new Error('outlined 56 사이즈에서는 아이콘을 사용할 수 없습니다.');
  }
}
