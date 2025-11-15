export async function httpGet(path) {
  const res = await fetch(`${path}`);

  if (!res.ok) {
    throw new Error(`API 요청 실패: ${res.status}`);
  }

  try {
    return await res.json();
  } catch {
    throw new Error('JSON 파싱 오류');
  }
}
