export function validateButtonSize(size) {
  const allowedSizes = [56, 40, 36, 28];

  if (!size) {
    return 56;
  }

  if (!allowedSizes.includes(size)) {
    throw new Error(
      `잘못된 사이즈 값을 사용함  ${size}. 사용 가능한 값은 ${allowedSizes.join(', ')}`
    );
  }

  return size;
}
