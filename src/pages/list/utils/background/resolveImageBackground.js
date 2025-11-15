import { backgroundImageMap } from '@pages/list/utils/background/backgroundMap.js';

export function resolveImageBackground(filename) {
  if (!filename) return null;

  const mapped = backgroundImageMap[filename];

  if (!mapped) {
    console.warn(`⚠️ 매핑되지 않은 이미지 파일명: "${filename}"`);
    return null;
  }

  return {
    type: 'image',
    value: mapped,
  };
}
