import CardList from '@components/cardlist/CardList.jsx';
import styles from '@pages/list/components/wrapper/cardListWrapper.module.css';
import ArrowButton from '@pages/list/components/button/ArrowButton.jsx';

export default function CardListWrapper({ cards }) {
  return (
    <div className={styles.container}>
      <ArrowButton direction="left" />
      {cards.map((card, index) => (
        <CardList
          key={index}
          name={card.name}
          profileImages={card.profileImages}
          messageCount={card.messageCount}
          reactions={card.reactions}
          background={card.background}
        />
      ))}
      <ArrowButton direction="right" />
    </div>
  );
}
