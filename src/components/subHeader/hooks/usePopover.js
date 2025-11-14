import { useState, useRef, useEffect } from 'react';

export function usePopover() {
  const [isOpen, setIsOpen] = useState(false);

  const popoverRef = useRef(null);
  const buttonRef = useRef(null);

  const togglePopover = () => setIsOpen(prev => !prev);
  const closePopover = () => setIsOpen(false);

  useEffect(() => {
    function handleClickOutside(e) {
      const popEl = popoverRef.current;
      const btnEl = buttonRef.current;

      if (popEl?.contains(e.target) || btnEl?.contains(e.target)) return;

      closePopover();
    }

    if (isOpen) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  return {
    isOpen,
    popoverRef,
    buttonRef,
    togglePopover,
    closePopover,
  };
}
