const allowedNames = ['친구', '동료', '가족', '지인'];

export function validateBadgeName(badgeName) {
  if (!allowedNames.includes(badgeName)) {
    throw new Error(
      `지정된 값 중 하나를 선택해 주세요: ${allowedNames.join(', ')}.`
    );
  }
}

export { allowedNames };
