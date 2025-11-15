// hooks/useShare.js
import { useState } from 'react';

export function useShare(onShare) {
  const [showToast, setShowToast] = useState(false);

  const handleUrlShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setShowToast(true);

      setTimeout(() => setShowToast(false), 2000);
    } catch (err) {
      console.error('URL 복사 실패:', err);
    }
  };

  const handleShare = async type => {
    if (type === 'url') {
      await handleUrlShare();
    } else {
      onShare?.(type);
    }
  };

  return {
    showToast,
    handleShare,
  };
}
