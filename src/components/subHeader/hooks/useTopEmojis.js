// hooks/useTopEmojis.js
import { getTopEmojis } from '../utils/getTopEmojis';

export function useTopEmojis(emojiRanking) {
  return getTopEmojis(emojiRanking);
}
