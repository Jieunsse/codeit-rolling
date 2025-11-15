import { useRecipients } from '@pages/list/hooks/useRecipients.js';
import { useNavigate } from 'react-router-dom';
import Header from '@components/common/header/Header.jsx';
import CardListWrapper from '@pages/list/components/wrapper/CardListWrapper.jsx';
import Button from '@components/common/button/base/Button.jsx';
import styles from './ListPage.module.css';

export default function ListPage() {
  const { cards, loading, error } = useRecipients();
  const navigate = useNavigate();

  const handleClick = () => navigate('/post');

  if (loading) return <div>로딩 중…</div>;
  if (error) return <div>데이터 불러오기 실패</div>;

  const popularCards = [...cards].sort((a, b) => {
    const scoreA = a.messageCount * 2 + a.reactions.length;
    const scoreB = b.messageCount * 2 + b.reactions.length;
    return scoreB - scoreA;
  });

  const recentCards = [...cards].sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );

  return (
    <div>
      <Header />

      <div className={styles.box}>
        <section className={styles.section}>
          <h2 className={styles.categoryTitle}>인기 롤링 페이퍼 🔥</h2>
          <CardListWrapper cards={popularCards} />

          <h2 className={styles.categoryTitle}>최근에 만든 롤링 페이퍼 🌟</h2>
          <CardListWrapper cards={recentCards} />
        </section>
      </div>

      <div className={styles.box}>
        <Button title="나도 만들어보기" onClick={handleClick} />
      </div>
    </div>
  );
}
