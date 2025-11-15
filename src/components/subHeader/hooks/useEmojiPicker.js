import { useState, useRef, useEffect } from 'react';

export function useEmojiPicker(onSelectEmoji) {
  const [isOpen, setIsOpen] = useState(false);

  const pickerRef = useRef(null);
  const buttonRef = useRef(null);

  const closePicker = () => setIsOpen(false);
  const togglePicker = () => setIsOpen(prev => !prev);

  const handleEmojiClick = emojiData => {
    onSelectEmoji(emojiData.emoji);
    closePicker();
  };

  useEffect(() => {
    function handleClickOutside(e) {
      const pickerEl = pickerRef.current;
      const buttonEl = buttonRef.current;

      const isClickInsidePicker = pickerEl && pickerEl.contains(e.target);
      const isClickOnButton = buttonEl && buttonEl.contains(e.target);

      if (isClickInsidePicker || isClickOnButton) return;

      closePicker();
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return {
    isOpen,
    pickerRef,
    buttonRef,
    togglePicker,
    handleEmojiClick,
  };
}
