import styles from '@components/common/badge/relationBadge/relationBadge.module.css';
import { validateBadgeName } from '@components/common/badge/util/validateBadgeName.js';
import { nameMap } from '@components/common/badge/relationBadge/type/nameMap.js';

export default function RelationBadge({ title }) {
  validateBadgeName(title);

  const key = nameMap[title];
  const colorClass = styles[key];

  return <div className={`${styles.badge} ${colorClass}`}>{title}</div>;
}
