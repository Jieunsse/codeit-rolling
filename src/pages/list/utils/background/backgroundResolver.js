import { createImageBackground } from './imageBackgroundUtils.js';
import { backgroundColorMap, COLOR_KEYS } from './backgroundRegistry.js';

export function backgroundResolver(item) {
  if (item.backgroundImageURL) {
    const imageResult = createImageBackground(item.backgroundImageURL);
    if (imageResult) return imageResult;
  }

  const colorKey = item.backgroundColor;
  const colorData = backgroundColorMap[colorKey];
  const id = COLOR_KEYS.indexOf(colorKey);

  return {
    type: 'color',
    value: colorData?.color ?? 'var(--gray-200)',
    id: id !== -1 ? id : 0,
  };
}
