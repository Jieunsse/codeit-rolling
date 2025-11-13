import Header from '@components/common/header/Header.jsx';
import Button from '@components/common/button/base/Button.jsx';

export default function ListPage() {
  return (
    <div>
      <Header />
      <section>
        <h2>인기 롤링 페이퍼 🔥</h2>
        <h2>최근에 만든 롤링 페이퍼 🌟</h2>
        <Button title="나도 만들어보기" />
      </section>
    </div>
  );
}
