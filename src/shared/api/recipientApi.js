const BASE_URL = 'https://rolling-api.vercel.app/20-3';

// 롤링페이퍼 대상(recipient) 정보를 가져오는 함수
export async function getRecipient(recipientId) {
  const response = await fetch(`${BASE_URL}/recipients/${recipientId}/`);
  
  if (!response.ok) {
    throw new Error(`대상을 찾을 수 없습니다: ${response.status}`);
  }
  
  return response.json();
}


// 메시지 목록(카드 데이터)을 가져오는 함수
export async function getMessages(recipientId, limit = 12, offset = 0) {
  const response = await fetch(
    `${BASE_URL}/recipients/${recipientId}/messages/?limit=${limit}&offset=${offset}`
  );

  if (!response.ok) {
    throw new Error(`메시지 목록을 불러오는 데 실패했습니다: ${response.status}`);
  }
  
  const data = await response.json();
  return data.results; // results 배열만 반환
}

// 이모지 POST 보내는 함수
export async function createReaction(recipientId, emoji) {
  const response = await fetch(`${BASE_URL}/recipients/${recipientId}/reactions/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      emoji: emoji,
      type: 'increase', 
    }),
  });
  if (!response.ok) {
    const errorBody = await response.text();
    console.error("리액션 POST 오류 상세:", errorBody);
    throw new Error(`리액션 추가 실패: ${response.status}`);
  }
  return response.json();
}

// 이모지 GET해오는 함수
export async function getReactions(recipientId, limit = 8) {
  const response = await fetch(`${BASE_URL}/recipients/${recipientId}/reactions/?limit=${limit}`);
  
  if (!response.ok) {
    throw new Error(`리액션 조회 실패: ${response.status}`);
  }
  const data = await response.json();
  return data.results; 
}

// 롤링페이퍼 카드 삭제 함수
export async function deleteMessage(messageId) {
  const response = await fetch(`${BASE_URL}/messages/${messageId}/`, {
    method: 'DELETE',
  });

  if (response.status !== 204) {
    throw new Error(`메시지 삭제 실패: ${response.status}`);
  }
}

// 전체 롤링페이퍼 페이지 삭제 함수
export async function deleteRecipient(recipientId) {
  const response = await fetch(`${BASE_URL}/recipients/${recipientId}/`, {
    method: 'DELETE',
  });

  if (response.status !== 204) {
    throw new Error(`롤링 페이퍼 삭제 실패: ${response.status}`);
  }
}