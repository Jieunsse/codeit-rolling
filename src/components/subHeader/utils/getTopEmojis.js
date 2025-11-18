export function getTopEmojis(data) {
  if (!Array.isArray(data)) return [];

  return data.sort((a, b) => b.count - a.count).slice(0, 8);
}
