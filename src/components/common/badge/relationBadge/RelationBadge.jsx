import styles from '@components/common/badge/relationBadge/relationBadge.module.css';
import { validateBadgeName } from '@components/common/badge/util/validateBadgeName.js';
import { nameMap } from '@components/common/badge/relationBadge/type/nameMap.js';

<<<<<<< HEAD
<<<<<<< HEAD
export default function RelationBadge({ badgeName }) {
  validateBadgeName(badgeName);

  const key = nameMap[badgeName];
  const colorClass = styles[key];

  return <div className={`${styles.badge} ${colorClass}`}>{badgeName}</div>;
=======
=======
/**
 * @param {string} title - 뱃지 이름(색상 매핑에 사용됨)
 */
>>>>>>> origin/dev
export default function RelationBadge({ title }) {
  validateBadgeName(title);

  const key = nameMap[title];
  const colorClass = styles[key];

  return <div className={`${styles.badge} ${colorClass}`}>{title}</div>;
>>>>>>> dev
}
