import { BASE_URL, TEAM_ID } from '@shared/api/config.js';
import { httpGet } from '@shared/api/httpClients.js';

export async function getRecipients() {
  return httpGet(`${BASE_URL}/${TEAM_ID}/recipients/`);
}
