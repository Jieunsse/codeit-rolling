import { useRecipients } from '@pages/list/hooks/useRecipients.js';
import { useNavigate } from 'react-router-dom';
import { useSearch } from '@pages/list/hooks/useSearch.js';
import Header from '@components/common/header/Header.jsx';
import CardListWrapper from '@pages/list/components/wrapper/CardListWrapper.jsx';
import Button from '@components/common/button/base/Button.jsx';
import styles from './ListPage.module.css';
import Input from '@components/common/input/Input.jsx';

export default function ListPage() {
  const { cards, loading, error } = useRecipients();
  const navigate = useNavigate();

  const {
    searchTerm,
    displayedCards,
    handleChange,
    handleSearch,
    handleKeyDown,
  } = useSearch(cards || []);

  const handleClick = () => navigate('/post');

  // ✅ 렌더링만 조건 처리
  if (loading) return <div>로딩 중…</div>;
  if (error) return <div>데이터 불러오기 실패</div>;

  const popularCards = [...displayedCards].sort((a, b) => {
    const scoreA = a.messageCount * 2 + a.reactions.length;
    const scoreB = b.messageCount * 2 + b.reactions.length;
    return scoreB - scoreA;
  });

  const recentCards = [...displayedCards].sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );

  return (
    <>
      <Header />
      <section className={styles.inputBox}>
        <div className={styles.inputWrapper}>
          <Input
            type="text"
            placeholder="이름으로 검색..."
            value={searchTerm}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
          <button onClick={handleSearch} className={styles.searchButton}>
            검색
          </button>
        </div>
      </section>

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
    </>
  );
}
