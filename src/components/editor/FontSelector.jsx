import { useState, useEffect, useRef } from "react";
import styles from "@/components/editor/RichEditor.module.css";

const FONT_LIST = [
  { label: "Noto Sans", value: "Noto Sans" },
  { label: "프리텐다드", value: "Pretendard" },
  { label: "나눔 명조", value: "나눔명조" },
  { label: "손 글씨", value: "나눔손글씨 손편지체" },
];

export default function FontSelector({ currentFont, onChange }) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    function handleOutside(e) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, []);

  return (
    <div className={styles.fontSelector} ref={wrapperRef}>
      <button
        type="button"
        className={styles.fontSelectorButton}
        onClick={() => setOpen((prev) => !prev)}
      >
        {FONT_LIST.find((f) => f.value === currentFont)?.label ||
          currentFont}
        <span className={styles.caret} />
      </button>

      {open && (
        <div className={styles.fontDropdown}>
          {FONT_LIST.map((font) => (
            <button
              key={font.value}
              className={styles.fontOption}
              onClick={() => {
                onChange(font.value);
                setOpen(false);
              }}
            >
              {font.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
