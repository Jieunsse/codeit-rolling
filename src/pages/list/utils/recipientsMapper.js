import { backgroundColorMap } from './colorMap.js';

const colorKeys = ['purple', 'beige', 'blue', 'green'];

export function mapRecipientToCard(item) {
  let background;

  if (item.backgroundImageURL) {
    background = {
      type: 'image',
      value: item.backgroundImageURL,
    };
  } else if (item.backgroundColor) {
    const map = backgroundColorMap[item.backgroundColor];

    const id = colorKeys.indexOf(item.backgroundColor);

    background = {
      type: 'color',
      value: map?.color ?? 'var(--gray-200)',
      id: id !== -1 ? id : 0,
    };
  }

  return {
    id: item.id,
    name: item.name,
    messageCount: item.messageCount,
    profileImages: item.recentMessages.map(m => m.profileImageURL).slice(0, 3),
    reactions: item.topReactions,
    background,
  };
}
