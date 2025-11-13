import Header from '@components/common/header/Header.jsx';
import Button from '@components/common/button/base/Button.jsx';
import { useNavigate } from 'react-router-dom';
import CardListWrapper from '@pages/list/components/CardListWrapper.jsx';
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
  );
}
