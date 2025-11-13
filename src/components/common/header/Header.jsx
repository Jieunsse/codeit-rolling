import logo from '@components/assets/logo.svg';
import styles from '@components/common/header/header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <a href="/" className={styles.logo}>
          <img src={logo} alt="logo" />
        </a>
        <button className={styles.button}>롤링 페이퍼 만들기</button>
      </div>
    </header>
  );
}
