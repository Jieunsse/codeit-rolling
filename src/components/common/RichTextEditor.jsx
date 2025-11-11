// src/components/common/RichTextEditor.jsx
import { useRef, useEffect } from "react";
import styles from "@/components/common/RichTextEditor.module.css";

function RichTextEditor({
  value = "",
  onChange,
  placeholder = "내용을 입력하세요...",
}) {
  const editorRef = useRef(null);
  const isComposingRef = useRef(false);

  // 외부 value 동기화 (에디터에 포커스가 없을 때만)
  useEffect(() => {
    const el = editorRef.current;
    if (!el) return;
    if (document.activeElement === el) return;
    if (el.innerHTML !== value) el.innerHTML = value || "";
  }, [value]);

  const emit = () => {
    const el = editorRef.current;
    if (onChange && el) onChange(el.innerHTML);
  };

  const handleInput = () => {
    if (isComposingRef.current) return;
    emit();
  };
  const handleCompositionStart = () => { isComposingRef.current = true; };
  const handleCompositionEnd = () => { isComposingRef.current = false; emit(); };

  // ✅ 핵심: 버튼이 포커스를 훔치지 못하게 onMouseDown에서 처리
  const runCmd = (command, val = null) => {
    const el = editorRef.current;
    if (!el) return;
    // 에디터가 포커스가 아니면 포커스 보장
    if (document.activeElement !== el) el.focus();
    document.execCommand(command, false, val);
    emit();
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.toolbar}>
          <button
            type="button"
            onMouseDown={(e) => { e.preventDefault(); runCmd("bold"); }}
          >
            <b>B</b>
          </button>
          <button
            type="button"
            onMouseDown={(e) => { e.preventDefault(); runCmd("italic"); }}
          >
            <i>I</i>
          </button>
          <button
            type="button"
            onMouseDown={(e) => { e.preventDefault(); runCmd("underline"); }}
          >
            <u>U</u>
          </button>

          <span className={styles.divider}></span>

          <button
            type="button"
            onMouseDown={(e) => { e.preventDefault(); runCmd("justifyLeft"); }}
          >☰</button>
          <button
            type="button"
            onMouseDown={(e) => { e.preventDefault(); runCmd("justifyCenter"); }}
          >≡</button>
          <button
            type="button"
            onMouseDown={(e) => { e.preventDefault(); runCmd("justifyRight"); }}
          >☷</button>

          <span className={styles.divider}></span>

          <button
            type="button"
            onMouseDown={(e) => { e.preventDefault(); runCmd("insertOrderedList"); }}
          >1.</button>
          <button
            type="button"
            onMouseDown={(e) => { e.preventDefault(); runCmd("insertUnorderedList"); }}
          >•</button>

          <span className={styles.divider}></span>

          <button
            type="button"
            onMouseDown={(e) => { e.preventDefault(); runCmd("removeFormat"); }}
          >↺</button>
        </div>

        <div
          ref={editorRef}
          className={styles.editor}
          contentEditable
          role="textbox"
          aria-multiline="true"
          data-placeholder={placeholder}
          onInput={handleInput}
          onCompositionStart={handleCompositionStart}
          onCompositionEnd={handleCompositionEnd}
        />
      </div>
    </>
  );
}

export default RichTextEditor;
