import styles from './profileCounter.module.css';

export default function ProfileCounter({ count }) {
  return <div className={styles.counter}>+{count}</div>;
}
