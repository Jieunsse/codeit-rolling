import styles from '@components/common/badge/relationBadge/relationBadge.module.css';
import nameMap from '@components/common/badge/relationBadge/type/relationBadgeMap.json';
import { validateBadgeName } from '@components/common/badge/util/validateBadgeName.js';

export default function RelationBadge({ badgeName }) {
  validateBadgeName(badgeName);

  const key = nameMap[badgeName];
  const colorClass = styles[key];

  return <div className={`${styles.badge} ${colorClass}`}>{badgeName}</div>;
}
