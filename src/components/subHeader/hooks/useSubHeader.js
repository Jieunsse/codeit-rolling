// src/components/subHeader/hooks/useSubHeader.js
import { useEmojiPicker } from './useEmojiPicker.js';
import { usePopover } from './usePopover.js';

export function useSubHeader() {
  const {
    isOpen,
    pickerRef,
    buttonRef: emojiButtonRef,
    togglePicker,
    handleEmojiClick,
  } = useEmojiPicker();

  const {
    isOpen: isArrowOpen,
    popoverRef: arrowPopoverRef,
    buttonRef: arrowButtonRef,
    togglePopover: onToggleArrowPopover,
  } = usePopover();

  return {
    isOpen,
    pickerRef,
    emojiButtonRef,
    togglePicker,
    handleEmojiClick,

    isArrowOpen,
    arrowPopoverRef,
    arrowButtonRef,
    onToggleArrowPopover,
  };
}
