import { parseImageFilename } from './parseImageFilename.js';
import { resolveImageBackground } from './resolveImageBackground.js';
import { resolveColorBackground } from './resolveColorBackground.js';

export function selectBackgroundForCard(item) {
  if (item.backgroundImageURL) {
    const filename = parseImageFilename(item.backgroundImageURL);
    const imageBackground = resolveImageBackground(filename);
    if (imageBackground) return imageBackground;
  }

  return resolveColorBackground(item.backgroundColor);
}
