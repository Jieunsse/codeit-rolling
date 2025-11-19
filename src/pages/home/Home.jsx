import Header from '@components/common/header/Header.jsx';
import styles from '@pages/home/home.module.css';
import homeBanner01 from '@pages/assets/homeBanner01.svg';
import homeBanner01Mobile from '@pages/assets/homeBanner01-mobile.svg';
import homeBanner02 from '@pages/assets/homeBanner02.svg';
import homeBanner02Mobile from '@pages/assets/homeBanner02-mobile.png';
import Button from '@components/common/button/base/Button.jsx';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <Header isButton />
      <section className={styles.section}>
        <div className={styles.imgContainer}>
          <picture>
            <source srcSet={homeBanner01Mobile} media="(max-width: 768px)" />
            <img
              src={homeBanner01}
              alt="롤링 서비스 소개 배너 1"
              className={styles.banner}
            />
          </picture>

          <picture>
            <source srcSet={homeBanner02Mobile} media="(max-width: 768px)" />
            <img
              src={homeBanner02}
              alt="롤링 서비스 소개 배너 2"
              className={styles.banner}
            />
          </picture>

          <Link to="/list">
            <Button title="구경해보기" />
          </Link>
        </div>
      </section>
    </div>
  );
}
