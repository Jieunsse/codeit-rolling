import logo from '@/components/assets/logo.svg';
import styles from '@components/common/header/header.module.css';
import { Link } from 'react-router-dom';

export default function Header({ isButton }) {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <Link to="/" className={styles.logo}>
          <img src={logo} alt="logo" />
        </Link>
        {isButton && (
          <Link to="/post">
            <button className={styles.button}>롤링 페이퍼 만들기</button>
          </Link>
        )}
      </div>
    </header>
  );
}
