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