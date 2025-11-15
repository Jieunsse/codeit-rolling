import { useState, useRef, useEffect } from 'react';

export function useEmojiPicker(onSelectEmoji) {
  const [isOpen, setIsOpen] = useState(false);
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> dev

  const pickerRef = useRef(null);
  const buttonRef = useRef(null);

  const closePicker = () => setIsOpen(false);
<<<<<<< HEAD
=======
  const pickerRef = useRef(null);

  const closePicker = () => setIsOpen(false);

>>>>>>> 392d9da (Feat : 이모지 피커 로직 추가 #88)
=======
>>>>>>> dev
  const togglePicker = () => setIsOpen(prev => !prev);

  const handleEmojiClick = emojiData => {
    onSelectEmoji(emojiData.emoji);
    closePicker();
  };

  useEffect(() => {
    function handleClickOutside(e) {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> dev
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
<<<<<<< HEAD
=======
      if (pickerRef.current && !pickerRef.current.contains(e.target)) {
        closePicker();
      }
    }
    if (isOpen) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
>>>>>>> 392d9da (Feat : 이모지 피커 로직 추가 #88)
=======
>>>>>>> dev
  }, [isOpen]);

  return {
    isOpen,
    pickerRef,
<<<<<<< HEAD
<<<<<<< HEAD
    buttonRef,
=======
>>>>>>> 392d9da (Feat : 이모지 피커 로직 추가 #88)
=======
    buttonRef,
>>>>>>> dev
    togglePicker,
    handleEmojiClick,
  };
}
