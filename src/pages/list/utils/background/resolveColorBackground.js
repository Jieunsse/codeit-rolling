import { backgroundColorMap } from '@pages/list/utils/background/colorMap.js';

const colorKeys = ['purple', 'beige', 'blue', 'green'];

export function resolveColorBackground(colorKey) {
  if (!colorKey) return null;

  const map = backgroundColorMap[colorKey];
  const id = colorKeys.indexOf(colorKey);

  return {
    type: 'color',
    value: map?.color ?? 'var(--gray-200)',
    id: id !== -1 ? id : 0,
  };
}
