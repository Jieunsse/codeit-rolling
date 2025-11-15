const BASE_URL = 'https://rolling-api.vercel.app/20-3';

// 롤링페이퍼 대상(recipient) 정보를 가져오는 함수
export async function getRecipient(recipientId) {
  // 엔드포인트를 호출
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

export async function createReaction(recipientId, emoji) {
  const response = await fetch(`${BASE_URL}/recipients/${recipientId}/reactions/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      emoji: emoji,
      type: 'increase', // 이모지 개수 증가
    }),
  });
  if (!response.ok) {
    // 400 Bad Request 등의 오류 발생 시 디버깅을 위해 응답 텍스트를 포함
    const errorBody = await response.text();
    console.error("리액션 POST 오류 상세:", errorBody);
    throw new Error(`리액션 추가 실패: ${response.status}`);
  }

  // 201 Created 응답이므로 JSON으로 파싱하여 반환
  return response.json();
}


export async function getReactions(recipientId, limit = 8) {
  // API 명세에 따라 리액션 전용 엔드포인트 호출
  const response = await fetch(`${BASE_URL}/recipients/${recipientId}/reactions/?limit=${limit}`);
  
  if (!response.ok) {
    throw new Error(`리액션 조회 실패: ${response.status}`);
  }

  const data = await response.json();
  return data.results; // results 배열만 반환
}