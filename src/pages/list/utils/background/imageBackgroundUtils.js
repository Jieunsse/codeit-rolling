import { backgroundImageMap } from './backgroundRegistry.js';

export function extractFilename(raw) {
  if (!raw) return null;
  return raw.trim().split('/').pop();
}

export function createImageBackground(raw) {
  if (!raw) return null;

  const filename = extractFilename(raw);
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
