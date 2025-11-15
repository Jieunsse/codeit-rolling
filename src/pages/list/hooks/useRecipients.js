import { useEffect, useState } from 'react';
import { getRecipients } from '@pages/list/apis/getRecipients.js';
import { mapRecipientToCard } from '@pages/list/utils/mapRecipientToCard.js';

export function useRecipients() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const data = await getRecipients();

        const mapped = data.results.map(mapRecipientToCard);
        setCards(mapped);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return { cards, loading, error };
}
