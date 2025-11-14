import Button from '@/components/common/button/base/Button';
import Header from '@/components/common/header/Header';
import Input from '@/components/common/input/Input';
import BackgroundOption from '@/components/option/BackgroundOption';
import styles from '@/pages/post/PostPage.module.css';
import { useState } from 'react';

function PostPage() {
  const [value, setValue] = useState('color');

  const onToggleHandler = () => {
    setValue(prev => (prev === 'color' ? 'image' : 'color'));
  };

  return (
    <>
      <Header />
      <div className={styles.Container}>
        <div className={styles.mainContainer}>
          <div className={styles.formContainer}>
            <div className={styles.formText}>To.</div>
            <Input
              className={styles.formBox}
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
                    value === 'color'
                      ? `${styles.indicator} ${styles.left}`
                      : `${styles.indicator} ${styles.right}`
                  }
                ></div>

                <button
                  onClick={() => setValue('color')}
                  className={
                    value === 'color' ? styles.activeText : styles.inactiveText
                  }
                >
                  컬러
                </button>

                <button
                  onClick={() => setValue('image')}
                  className={
                    value === 'image' ? styles.activeText : styles.inactiveText
                  }
                >
                  이미지
                </button>
              </div>
            </div>
            <div className={styles.optionBox}>
              <BackgroundOption />
              <BackgroundOption />
              <BackgroundOption />
              <BackgroundOption />
            </div>
          </div>
          <div className={styles.buttonBox}>
            <Button
              title="생성하기"
              variant="primary"
              visualState="enabled"
            ></Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default PostPage;
