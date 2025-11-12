import styles from '@components/common/badge/relationBadge/relationBadge.module.css';
import { validateBadgeName } from '@components/common/badge/util/validateBadgeName.js';
import { getBadgeColorClass } from '@components/common/badge/util/getBadgeColorClass.js';

export default function RelationBadge({ badgeName }) {
  validateBadgeName(badgeName);

  const colorClassName = getBadgeColorClass(badgeName, styles);

  return <div className={`${styles.badge} ${colorClassName}`}>{badgeName}</div>;
}
