import CountUp from '@components/countUp/CountUp.jsx';
import styles from './counter.module.css';
import { useRecipients } from '@pages/list/hooks/useRecipients.js';

export default function Counter() {
  const { count, loading } = useRecipients();

  console.log(count);

  return (
    <div className={styles.wrapper}>
      <CountUp
        from={0}
        to={count}
        separator=","
        direction="up"
        duration={1}
        className={styles.countUp}
      />
      <p className={styles.p}>개의 페이퍼</p>
    </div>
  );
}
