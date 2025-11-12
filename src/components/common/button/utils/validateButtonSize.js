export function validateButtonSize(size) {
  const OUTLINED_56 = 56;
  const OUTLINED_40 = 40;
  const OUTLINED_36 = 36;
  const OUTLINED_28 = 28;

  const allowedSizes = [OUTLINED_56, OUTLINED_40, OUTLINED_36, OUTLINED_28];

  if (!size) {
    return OUTLINED_56;
  }

  if (!allowedSizes.includes(size)) {
    throw new Error(
      `잘못된 사이즈 값을 사용함  ${size}. 사용 가능한 값은 ${allowedSizes.join(', ')}`
    );
  }

  return size;
}
