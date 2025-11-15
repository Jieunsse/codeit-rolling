export function parseImageFilename(raw) {
  if (!raw) return null;
  return raw.trim().split('/').pop();
}
