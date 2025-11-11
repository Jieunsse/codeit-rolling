import { nameMap } from '@components/common/badge/relationBadge/type/nameMap.js';

export function getBadgeColorClass(title, styles) {
  const key = nameMap[title];
  return styles[key] ?? '';
}
