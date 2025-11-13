export const BASE_URL = 'https://rolling-api.vercel.app';

const defaultHeaders = {
  'Content-Type': 'application/json',
};

export async function request(method, path, data) {
  const options = {
    method,
    headers: { ...defaultHeaders },
  };

  if (data !== undefined) {
    options.body = JSON.stringify(data);
  }

  const res = await fetch(BASE_URL + path, options);

  if (!res.ok) {
    throw new Error(`HTTP 오류! : ${res.status}`);
  }

  const text = await res.text();
  return text ? JSON.parse(text) : null;
}
