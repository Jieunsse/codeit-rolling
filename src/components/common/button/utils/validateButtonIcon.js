export function validateButtonIcon({ variant, size, isIcon }) {
  if (variant === 'outlined' && (size === 50) & isIcon) {
    throw new Error('outlined 50 사이즈에서는 아이콘을 사용할 수 없습니다.');
  }
}
