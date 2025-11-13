import CardList from '@components/cardlist/CardList.jsx';
import styles from '@pages/list/components/cardListWrapper.module.css';

export default function CardListWrapper({ cards }) {
  return (
    <div className={styles.container}>
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
    </div>
  );
}
