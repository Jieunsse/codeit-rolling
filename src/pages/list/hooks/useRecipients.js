import { useEffect, useState } from 'react';
import { getRecipients } from '@pages/list/apis/getRecipients.js';
import { recipientMapper } from '@pages/list/utils/recipientMapper.js';

/**
 * @hook useRecipients
 * @description
 * 팀의 전체 롤링페이퍼(수신자 목록)를 불러오고
 * UI 카드 구조에 맞게 변환하여 반환합니다.
 */
export function useRecipients() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchRecipients() {
      try {
        const data = await getRecipients();

        const results = Array.isArray(data?.results) ? data.results : [];

        const mapped = results.map(recipientMapper);
        setCards(mapped);
      } catch (err) {
        console.error('❌ useRecipients fetchRecipients error:', err);
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    fetchRecipients();
  }, []);

  const count = cards.length;
  return { cards, count, loading, error };
}
