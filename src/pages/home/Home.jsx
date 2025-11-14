import Header from '@components/common/header/Header.jsx';
import styles from '@pages/home/home.module.css';
import homeBanner01 from '@pages/assets/homeBanner01.svg';
import homeBanner02 from '@pages/assets/homeBanner02.svg';
import Button from '@components/common/button/base/Button.jsx';

export default function Home() {
  return (
    <div>
      <Header />
      <section>
        <span className={styles.imgContainer}>
          <img src={homeBanner01} alt="배너01" className={styles.banner} />
          <img src={homeBanner02} alt="배너02" className={styles.banner} />
          <Button title="구경해보기" />
        </span>
      </section>
    </div>
  );
}
