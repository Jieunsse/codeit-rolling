import { selectBackgroundForCard } from '@pages/list/utils/background/selectBackgroundForCard.js';

export function mapRecipientToCard(item) {
  return {
    id: item.id,
    name: item.name,
    createdAt: item.createdAt,
    messageCount: item.messageCount,
    profileImages: item.recentMessages
      .map(msg => msg.profileImageURL)
      .slice(0, 3),
    reactions: item.topReactions,
    background: selectBackgroundForCard(item),
  };
}
