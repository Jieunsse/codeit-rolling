import Button from '@/components/common/button/base/Button';
import Header from '@/components/common/header/Header';
import Input from '@/components/common/input/Input';
import BackgroundOption from '@/components/option/BackgroundOption';
import image01 from '@pages/assets/background-image-01.jpg';
import image02 from '@pages/assets/background-image-02.jpg';
import image03 from '@pages/assets/background-image-03.jpg';
import styles from '@/pages/post/PostPage.module.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function PostPage() {
  const [name, setName] = useState('');
  const [backgroundType, setBackgroundType] = useState('color');
  const [backgroundColor, setBackgroundColor] = useState('beige');
  const [backgroundImage, setBackgroundImage] = useState('');
  const [randomImages, setRandomImages] = useState([]);
  const [randomChange, setRandomChange] = useState(0);
  const [selected, setSelected] = useState(0);
  const [hasError, setHasError] = useState(false);

  const navigate = useNavigate();

  const colorArray = [
    { color: 'beige', value: 'var(--beige-200)' },
    { color: 'purple', value: 'var(--purple-20)' },
    { color: 'blue', value: 'var(--blue-200)' },
    { color: 'green', value: 'var(--green-200)' },
  ];

  const imageArray = [
    {
      image:
        'https://images.unsplash.com/photo-1629654857513-1136aef1b10f?fit=crop&w=300&h=300&q=80&auto=format',
    },
    {
      image:
        'https://images.unsplash.com/photo-1581985283743-abc20b6d8993?fit=crop&w=300&h=300&q=80&auto=format',
    },
    {
      image:
        'https://images.unsplash.com/photo-1595878744852-96a5ea1db51c?fit=crop&w=300&h=300&q=80&auto=format',
    },
    {
      image:
        'https://images.unsplash.com/photo-1761475145944-52df2def23e9?fit=crop&w=300&h=300&q=80&auto=format',
    },
    {
      image:
        'https://images.unsplash.com/vector-1760290326331-b33e0df5168f?fit=crop&w=300&h=300&q=80&auto=format',
    },
    {
      image:
        'https://images.unsplash.com/vector-1761476122827-8c2870c66161?fit=crop&w=300&h=300&q=80&auto=format',
    },
    {
      image:
        'https://images.unsplash.com/vector-1761476122648-b4f8bd2418c7?fit=crop&w=300&h=300&q=80&auto=format',
    },
    {
      image:
        'https://images.unsplash.com/vector-1738323816034-1cb64130a0c8?fit=crop&w=300&h=300&q=80&auto=format',
    },
    {
      image:
        'https://images.unsplash.com/vector-1752059164442-cef3f538ea7a?fit=crop&w=300&h=300&q=80&auto=format',
    },
    {
      image:
        'https://images.unsplash.com/photo-1519751138087-5bf79df62d5b?fit=crop&w=300&h=300&q=80&auto=format',
    },
    {
      image:
        'https://images.unsplash.com/photo-1480422080719-4d25a4c7e22c?fit=crop&w=300&h=300&q=80&auto=format',
    },
    {
      image:
        'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?fit=crop&w=300&h=300&q=80&auto=format',
    },
    {
      image:
        'https://images.unsplash.com/photo-1459478309853-2c33a60058e7?fit=crop&w=300&h=300&q=80&auto=format',
    },
    {
      image:
        'https://images.unsplash.com/vector-1745355565289-4a9fe851351d?fit=crop&w=300&h=300&q=80&auto=format',
    },
    {
      image:
        'https://images.unsplash.com/photo-1609683391153-16eb7b87233b?fit=crop&w=300&h=300&q=80&auto=format',
    },
    {
      image:
        'https://images.unsplash.com/photo-1704477675523-c49a195d0cc7?fit=crop&w=300&h=300&q=80&auto=format',
    },
    {
      image:
        'https://images.unsplash.com/photo-1488477181946-6428a0291777?fit=crop&w=300&h=300&q=80&auto=format',
    },
    {
      image:
        'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?fit=crop&w=300&h=300&q=80&auto=format',
    },
    {
      image:
        'https://images.unsplash.com/photo-1497531551184-06b252e1bee1?fit=crop&w=300&h=300&q=80&auto=format',
    },
    {
      image:
        'https://images.unsplash.com/photo-1575252663512-b25714ec27f9?fit=crop&w=300&h=300&q=80&auto=format',
    },
  ];

  const getRandomImages = (arr, count = 4) => {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  useEffect(() => {
    setRandomImages(getRandomImages(imageArray, 4));
  }, [randomChange]);

  useEffect(() => {
    setSelected(0);
  }, [backgroundType, randomChange]);

  const handleSubmit = async () => {
    if (name.trim() === '') {
      setHasError(true);
      return;
    }

    const bodyObj = {
      name: name,
      backgroundColor: backgroundColor,
      backgroundImageURL: backgroundType === 'image' ? backgroundImage : null,
    };

    try {
      const res = await fetch(
        'https://rolling-api.vercel.app/20-3/recipients/',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(bodyObj),
        }
      );
      const data = await res.json();
      console.log(data);

      navigate(`/`);
    } catch (error) {
      console.error(error);
    }
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
            <div className={styles.buttonContainer}>
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
              <div className={styles.changeButton}>
                <Button
                  title="다른 이미지 보기"
                  variant="outlined"
                  size={28}
                  isIcon
                  visualState="enabled"
                  onClick={() => setRandomChange(prev => prev + 1)}
                />
              </div>
            </div>
            <div className={styles.optionBox}>
              {backgroundType === 'color'
                ? colorArray.map((item, index) => (
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
                : randomImages.map((item, index) => (
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
            </div>
          </div>
          <div className={styles.buttonBox}>
            <Button
              title="생성하기"
              variant="primary"
              visualState="enabled"
              onClick={handleSubmit}
            ></Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default PostPage;
