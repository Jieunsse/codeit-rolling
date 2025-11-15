import Header from '@components/common/header/Header.jsx';
import Button from '@components/common/button/base/Button.jsx';
import { useNavigate } from 'react-router-dom';
import CardListWrapper from '@pages/list/components/wrapper/CardListWrapper.jsx';
import styles from './listPage.module.css';
import { useRecipients } from '@pages/list/hooks/useRecipients.js';

export default function ListPage() {
  const { cards, loading, error } = useRecipients();
  const navigate = useNavigate();

  const handleClick = () => navigate('/');

  if (loading) return <div>로딩 중…</div>;
  if (error) return <div>데이터 불러오기 실패</div>;

  return (
    <div>
      <Header />
      <div className={styles.box}>
        <section className={styles.section}>
          <h2 className={styles.categoryTitle}>인기 롤링 페이퍼 🔥</h2>
          <CardListWrapper cards={cards} />

          <h2 className={styles.categoryTitle}>최근에 만든 롤링 페이퍼 🌟</h2>
          <CardListWrapper cards={cards} />
        </section>
      </div>

      <div className={styles.box}>
        <Button title="나도 만들어보기" onClick={handleClick} />
      </div>
    </div>
  );
}
