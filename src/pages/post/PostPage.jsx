import Button from '@/components/common/button/base/Button';
import Header from '@/components/common/header/Header';
import Input from '@/components/common/input/Input';
import BackgroundOption from '@/components/option/BackgroundOption';
import image01 from '@pages/assets/background-image-01.jpg';
import image02 from '@pages/assets/background-image-02.jpg';
import image03 from '@pages/assets/background-image-03.jpg';
import styles from '@/pages/post/PostPage.module.css';
import { useState } from 'react';
import UploadOption from '@/components/option/UploadOption';

function PostPage() {
  const [name, setName] = useState('');
  const [backgroundType, setBackgroundType] = useState('color');
  const [backgroundColor, setBackgroundColor] = useState('beige');
  const [backgroundImage, setBackgroundImage] = useState('');
  const [uploadfile, setUploadFile] = useState('');
  const [selected, setSelected] = useState(0);
  const [hasError, setHasError] = useState(false);

  const colorArray = [
    { color: 'beige', value: 'var(--beige-200)' },
    { color: 'purple', value: 'var(--purple-20)' },
    { color: 'blue', value: 'var(--blue-200)' },
    { color: 'green', value: 'var(--green-200)' },
  ];

  const imageArray = [
    { image: image01 },
    { image: image02 },
    { image: image03 },
  ];

  return (
    <>
      <Header />
      <div className={styles.Container}>
        <div className={styles.mainContainer}>
          <div className={styles.formContainer}>
            <div className={styles.formText}>To.</div>
            <Input
              className={styles.formBox}
              value={name}
              hasError={hasError}
              onChange={e => {
                setName(e.target.value);
                if (e.target.value.trim() !== '') {
                  setHasError(false);
                }
              }}
              onBlur={() => {
                if (name.trim() === '') {
                  setHasError(true);
                }
              }}
              errorMessage="값을 입력해 주세요"
              placeholder={'받는 사람 이름을 입력해 주세요'}
            />
          </div>
          <div>
            <div className={styles.optionTitle}>배경화면을 선택해 주세요.</div>
            <div className={styles.optionDescription}>
              컬러를 선택하거나, 이미지를 선택할 수 있습니다.
            </div>
            <div>
              <div className={styles.toggleWrapper}>
                <div
                  className={
                    backgroundType === 'color'
                      ? `${styles.indicator} ${styles.left}`
                      : `${styles.indicator} ${styles.right}`
                  }
                ></div>

                <button
                  onClick={() => setBackgroundType('color')}
                  className={
                    backgroundType === 'color'
                      ? styles.activeText
                      : styles.inactiveText
                  }
                >
                  컬러
                </button>

                <button
                  onClick={() => setBackgroundType('image')}
                  className={
                    backgroundType === 'image'
                      ? styles.activeText
                      : styles.inactiveText
                  }
                >
                  이미지
                </button>
              </div>
            </div>
            <div className={styles.optionBox}>
              {backgroundType === 'color' ? (
                colorArray.map((item, index) => (
                  <BackgroundOption
                    key={index}
                    background={item.value}
                    selected={selected === index}
                    onClick={() => {
                      setSelected(index);
                      setBackgroundColor(item.color);
                      console.log(backgroundColor);
                    }}
                  />
                ))
              ) : (
                <>
                  {imageArray.map((item, index) => (
                    <BackgroundOption
                      key={index}
                      background={item.image}
                      selected={selected === index}
                      mode="image"
                      onClick={() => {
                        setSelected(index);
                        setBackgroundImage(item.image);
                        console.log(backgroundImage);
                      }}
                    />
                  ))}
                  <UploadOption
                    onFileSelect={file => {
                      setUploadFile(file);
                      setSelected(false);
                      console.log(uploadfile);
                    }}
                  />
                </>
              )}
            </div>
          </div>
          <div className={styles.buttonBox}>
            <Button
              title="생성하기"
              variant="primary"
              visualState="enabled"
              onClick={() => {
                if (name.trim() === '') {
                  setHasError(true);
                  return;
                }

                // name이 있다면 fetch 요청 실행
              }}
            ></Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default PostPage;
