import { useState, useCallback } from 'react';

export function useSearch(cardsInput) {
  const cards = Array.isArray(cardsInput) ? cardsInput : [];

  const [searchTerm, setSearchTerm] = useState('');
  const [appliedTerm, setAppliedTerm] = useState('');
  const [filteredCards, setFilteredCards] = useState([]);

  const handleSearch = useCallback(() => {
    const keyword = searchTerm.trim().toLowerCase();
    setAppliedTerm(keyword);

    if (keyword === '') {
      setFilteredCards([]);
      return;
    }

    const result = cards.filter(card =>
      card.name?.toLowerCase().includes(keyword)
    );

    setFilteredCards(result);
  }, [searchTerm, cards]);

  const handleKeyDown = useCallback(
    e => {
      if (e.key === 'Enter') handleSearch();
    },
    [handleSearch]
  );

  const handleChange = e => setSearchTerm(e.target.value);

  const displayedCards = appliedTerm === '' ? cards : filteredCards;

  return {
    searchTerm,
    displayedCards,
    handleChange,
    handleSearch,
    handleKeyDown,
  };
}
