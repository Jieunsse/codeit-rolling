import { backgroundResolver } from '@/pages/list/utils/background/backgroundResolver.js';

export function recipientMapper(item) {
  return {
    id: item.id,
    name: item.name,
    createdAt: item.createdAt,
    messageCount: item.messageCount,

    profileImages:
      item.recentMessages?.map(msg => msg.profileImageURL).slice(0, 3) ?? [],

    reactions: item.topReactions ?? [],

    background: backgroundResolver(item),
  };
}
