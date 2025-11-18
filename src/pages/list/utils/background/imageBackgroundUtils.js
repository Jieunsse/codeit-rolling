export function createImageBackground(raw) {
  if (!raw) return null;

  // 외부 URL이면 매핑 없이 그대로 사용
  if (raw.startsWith('http')) {
    return {
      type: 'image',
      value: raw,
    };
  }

  // (선택) 로컬 자원만 매핑
  const filename = raw.trim().split('/').pop();
  const mapped = backgroundImageMap[filename];

  if (!mapped) {
    console.warn(`⚠️ 로컬 이미지 매핑 실패: "${filename}"`);
    return null;
  }

  return {
    type: 'image',
    value: mapped,
  };
}
