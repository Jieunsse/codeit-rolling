import { useState, useRef, useEffect } from 'react';

export function useEmojiPicker(onSelectEmoji) {
  const [isOpen, setIsOpen] = useState(false);
  const pickerRef = useRef(null);

  const closePicker = () => setIsOpen(false);

  const togglePicker = () => setIsOpen(prev => !prev);

  const handleEmojiClick = emojiData => {
    onSelectEmoji(emojiData.emoji);
    closePicker();
  };

  useEffect(() => {
    function handleClickOutside(e) {
      if (pickerRef.current && !pickerRef.current.contains(e.target)) {
        closePicker();
      }
    }
    if (isOpen) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  return {
    isOpen,
    pickerRef,
    togglePicker,
    handleEmojiClick,
  };
}
