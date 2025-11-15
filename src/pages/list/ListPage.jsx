<<<<<<< HEAD
import Header from '@components/common/header/Header.jsx';
import Button from '@components/common/button/base/Button.jsx';
import { useNavigate } from 'react-router-dom';
import CardListWrapper from '@pages/list/components/wrapper/CardListWrapper.jsx';
import { cardListMock } from '@pages/list/mock/cardListMock.js';
import { RollingPaperMock } from '@pages/list/mock/cardListMock.js';
import styles from './listPage.module.css';

export default function ListPage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <div>
      <Header />
      <span className={styles.box}>
        <section className={styles.section}>
          <h2 className={styles.categoryTitle}>인기 롤링 페이퍼 🔥</h2>
          <CardListWrapper cards={cardListMock} />
          <h2 className={styles.categoryTitle}>최근에 만든 롤링 페이퍼 🌟</h2>
          <CardListWrapper cards={RollingPaperMock} />
        </section>
      </span>
      <div className={styles.box}>
        <Button title="나도 만들어보기" onClick={handleClick} />
      </div>
    </div>
=======
import { useRecipients } from '@pages/list/hooks/useRecipients.js';
import { useNavigate } from 'react-router-dom';
import { useSearch } from '@pages/list/hooks/useSearch.js';
import Header from '@components/common/header/Header.jsx';
import CardListWrapper from '@pages/list/components/wrapper/CardListWrapper.jsx';
import Button from '@components/common/button/base/Button.jsx';
import styles from './ListPage.module.css';
import ListInput from '@pages/list/components/input/ListInput.jsx';

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

  if (loading) return <div></div>;
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
      <Header isButton />
      <div className={styles.pageWrapper}>
        <ListInput
          searchTerm={searchTerm}
          onSearch={handleSearch}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />

        <div className={styles.box}>
          <section className={styles.section}>
            <h2 className={styles.categoryTitle}>인기 롤링 페이퍼 🔥</h2>
            <CardListWrapper cards={popularCards} />

            <h2 className={styles.categorySubTitle}>
              최근에 만든 롤링 페이퍼 🌟
            </h2>
            <CardListWrapper cards={recentCards} />
          </section>
        </div>

        <div className={styles.box}>
          <Button title="나도 만들어보기" onClick={handleClick} />
        </div>
      </div>
    </>
>>>>>>> dev
  );
}
