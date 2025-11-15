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

  const {
    isOpen: isShareOpen,
    popoverRef: sharePopoverRef,
    buttonRef: shareButtonRef,
    togglePopover: onToggleSharePopover,
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

    isShareOpen,
    sharePopoverRef,
    shareButtonRef,
    onToggleSharePopover,
  };
}
