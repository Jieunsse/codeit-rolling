import { useState, useEffect, useRef } from 'react';
import CardList from '@components/cardlist/CardList.jsx';
import styles from './cardListWrapper.module.css';
import ArrowButton from '../button/ArrowButton.jsx';

export default function CardListWrapper({ cards = [] }) {
  const [slideIndex, setSlideIndex] = useState(0);
  const sliderWindowRef = useRef(null);
  const cardRef = useRef(null);

  const cardsPerPage = 5;
  const totalSlides = Math.ceil(cards.length / cardsPerPage);

  useEffect(() => {
    if (sliderWindowRef.current && cardRef.current) {
      const cardWidth = cardRef.current.offsetWidth;
      const gap = 24;
      const totalWidth = cardWidth * cardsPerPage + gap * (cardsPerPage - 1);
      sliderWindowRef.current.style.width = `${totalWidth}px`;
    }
  }, [cards]);

  const handleNext = () => {
    if (slideIndex < totalSlides - 1) {
      setSlideIndex(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (slideIndex > 0) {
      setSlideIndex(prev => prev - 1);
    }
  };

  const translateX = () => {
    if (!cardRef.current) return 'translateX(0)';
    const cardWidth = cardRef.current.offsetWidth;
    const gap = 24;
    return `translateX(-${slideIndex * (cardWidth * cardsPerPage + gap * cardsPerPage)}px)`;
  };

  const startIndex = slideIndex * cardsPerPage;
  const visibleCards = cards.slice(startIndex, startIndex + cardsPerPage);
  const hasNextSlide = cards.length > startIndex + visibleCards.length;

  return (
    <div className={styles.wrapper}>
      {slideIndex > 0 && (
        <ArrowButton
          direction="left"
          className={styles.leftArrow}
          onClick={handlePrev}
        />
      )}

      <div ref={sliderWindowRef} className={styles.sliderWindow}>
        <div
          className={styles.cardContainer}
          style={{ transform: translateX() }}
        >
          {cards.map((card, index) => (
            <div key={index} ref={index === 0 ? cardRef : null}>
              <CardList
                name={card.name}
                profileImages={card.profileImages}
                messageCount={card.messageCount}
                reactions={card.reactions}
                background={card.background}
                recipientId={card.id}
              />
            </div>
          ))}
        </div>
      </div>

      {hasNextSlide && (
        <ArrowButton
          direction="right"
          className={styles.rightArrow}
          onClick={handleNext}
        />
      )}
    </div>
  );
}
