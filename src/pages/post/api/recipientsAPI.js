export async function createRecipient(bodyObj) {
  const res = await fetch('https://rolling-api.vercel.app/20-3/recipients/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(bodyObj),
  });

  return res.json();
}
