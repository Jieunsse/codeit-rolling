import styles from './ProfileCounter.module.css';

export default function ProfileCounter({ count }) {
  return <div className={styles.counter}>+{count}</div>;
}
