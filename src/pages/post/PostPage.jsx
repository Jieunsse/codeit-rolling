import Button from '@/components/common/button/base/Button';
import Header from '@/components/common/header/Header';
import Input from '@/components/common/input/Input';
import BackgroundOption from '@/components/option/BackgroundOption';

function PostPage() {
  return (
    <>
      <Header />
      <div>
        <div>To.</div>
        <Input placeholder={'받는 사람 이름을 입력해 주세요'} />
      </div>
      <div>
        <div>배경화면을 선택해 주세요.</div>
        <div>컬러를 선택하거나, 이미지를 선택할 수 있습니다.</div>
        <BackgroundOption />
      </div>
      <div>
        <Button
          title="생성하기"
          variant="primary"
          visualState="enabled"
        ></Button>
      </div>
    </>
  );
}

export default PostPage;
