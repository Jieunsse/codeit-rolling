import Button from '@/components/common/button/base/Button';
import Header from '@/components/common/header/Header';
import styles from '@/pages/post/PostPage.module.css';
import RecipientInput from './components/RecipientInput';
import BackgroundSelector from './components/BackgroundSelector';
import { imageArray } from '@/pages/post/constants/imageArray';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createRecipient } from '@/pages/post/api/recipientsAPI';

function PostPage() {
  const [name, setName] = useState('');
  const [randomImages, setRandomImages] = useState([]);
  const [randomChange, setRandomChange] = useState(0);
  const [selected, setSelected] = useState(0);
  const [hasError, setHasError] = useState(false);
  const [interactionState, setInteractionState] = useState('enabled');
  const [interactionStateSubmit, setInteractionStateSubmit] =
    useState('enabled');

  const [background, setBackground] = useState({
    type: 'color',
    color: 'beige',
    image: '',
  });

  const navigate = useNavigate();

  const colorArray = [
    { color: 'beige', value: 'var(--beige-200)' },
    { color: 'purple', value: 'var(--purple-200)' },
    { color: 'blue', value: 'var(--blue-200)' },
    { color: 'green', value: 'var(--green-200)' },
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
  }, [background.type, randomChange]);

  const handleSubmit = async () => {
    if (name.trim() === '') {
      setHasError(true);
      return;
    }

    const bodyObj = {
      name: name,
      backgroundColor: background.color,
      backgroundImageURL: background.type === 'image' ? background.image : null,
    };

    try {
      const data = await createRecipient(bodyObj);

      const id = data?.id || data?.data?.id || data?.recipientId;

      if (!id) throw new Error('ID not found in API response');

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
            background={background}
            setBackground={setBackground}
            interactionState={interactionState}
            setInteractionState={setInteractionState}
            colorArray={colorArray}
            selected={selected}
            setSelected={setSelected}
            randomImages={randomImages}
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
