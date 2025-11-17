import Button from '@/components/common/button/base/Button';
import Header from '@/components/common/header/Header';
import styles from '@/pages/post/PostPage.module.css';
import RecipientInput from './components/RecipientInput';
import BackgroundSelector from './components/BackgroundSelector';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createRecipient } from '@/pages/post/api/recipientsAPI';

function PostPage() {
  const [name, setName] = useState('');
  const [backgroundType, setBackgroundType] = useState('color');
  const [backgroundColor, setBackgroundColor] = useState('beige');
  const [backgroundImage, setBackgroundImage] = useState('');
  const [randomImages, setRandomImages] = useState([]);
  const [randomChange, setRandomChange] = useState(0);
  const [selected, setSelected] = useState(0);
  const [hasError, setHasError] = useState(false);
  const [interactionState, setInteractionState] = useState('enabled');
  const [interactionStateSubmit, setInteractionStateSubmit] =
    useState('enabled');

  const navigate = useNavigate();

  const colorArray = [
    { color: 'beige', value: 'var(--beige-200)' },
    { color: 'purple', value: 'var(--purple-200)' },
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
        'https://images.pexels.com/photos/163390/baseball-ball-box-sports-163390.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    },
    {
      image:
        'https://images.unsplash.com/photo-1544235653-a313b8a430d9?fit=crop&w=300&h=300&q=80&auto=format',
    },
    {
      image:
        'https://images.unsplash.com/photo-1572859704906-ab0716da285f?fit=crop&w=300&h=300&q=80&auto=format',
    },
    {
      image:
        'https://images.unsplash.com/photo-1499195333224-3ce974eecb47?fit=crop&w=300&h=300&q=80&auto=format',
    },
    {
      image:
        'https://images.unsplash.com/photo-1532135468830-e51699205b70?fit=crop&w=300&h=300&q=80&auto=format',
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
      const data = await createRecipient(bodyObj);
      console.log(data);
      navigate(`/post/${id}`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Header />
      <div className={styles.Container}>
        <div className={styles.mainContainer}>
          <RecipientInput
            name={name}
            setName={setName}
            hasError={hasError}
            setHasError={setHasError}
            styles={styles}
          />
          <BackgroundSelector
            backgroundType={backgroundType}
            setBackgroundType={setBackgroundType}
            interactionState={interactionState}
            setInteractionState={setInteractionState}
            colorArray={colorArray}
            randomImages={randomImages}
            selected={selected}
            setSelected={setSelected}
            setBackgroundColor={setBackgroundColor}
            setBackgroundImage={setBackgroundImage}
            setRandomChange={setRandomChange}
            styles={styles}
          />
          <div className={styles.buttonBox}>
            <Button
              title="생성하기"
              variant="primary"
              interactionState={interactionStateSubmit}
              onMouseEnter={() => setInteractionStateSubmit('hover')}
              onMouseLeave={() => setInteractionStateSubmit('enabled')}
              onMouseDown={() => setInteractionStateSubmit('pressed')}
              onMouseUp={() => setInteractionStateSubmit('hover')}
              onFocus={() => setInteractionStateSubmit('focus')}
              onBlur={() => setInteractionStateSubmit('enabled')}
              onClick={handleSubmit}
              className={styles.submitButton}
            ></Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default PostPage;
