export function validateButtonIcon({ variant, size, isIcon }) {
  const OUTLINED_SIZE = 56;
  if (variant === 'outlined' && size === OUTLINED_SIZE && isIcon) {
    throw new Error('outlined 56 사이즈에서는 아이콘을 사용할 수 없습니다.');
  }
}
