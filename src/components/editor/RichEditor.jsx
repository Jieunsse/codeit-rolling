import { useEffect, useState } from "react";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TextAlign from "@tiptap/extension-text-align";
import { TextStyle } from "@tiptap/extension-text-style";
import { FontFamily } from "@/components/editor/extensions/FontFamily.js";

import FontSelector from "@/components/editor/FontSelector";
import {
  IconBold,
  IconItalic,
  IconUnderline,
  IconStrike,
  IconAlignLeft,
  IconAlignCenter,
  IconAlignRight,
  IconBullet,
  IconNumberList,
} from "@/components/editor/icons";

import styles from "@/components/editor/RichEditor.module.css";

export default function RichEditor({ value, onChange, font, onFontChange }) {
  const [, setRerender] = useState(0);
  const forceUpdate = () => setRerender((n) => n + 1);

  const editor = useEditor({
    extensions: [
      StarterKit,
      TextStyle, // 🔥 폰트 스타일 extension
      FontFamily, // 🔥 글꼴 적용 extension
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
    ],
    content: value,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    editorProps: {
      attributes: {
        style: `font-family: ${font};`, // 🔥 폰트 상태가 바뀌면 전체 스타일에도 반영
      },
    },
  });


  useEffect(() => {
  if (!editor) return;

  editor.setOptions({
    editorProps: {
      attributes: {
        style: `font-family: ${font};`,
      },
    },
  });
}, [font, editor]);


  // 버튼 상태 업데이트 (Bold/Italic 등 활성화)
  useEffect(() => {
    if (!editor) return;

    const handler = () => forceUpdate();

    editor.on("selectionUpdate", handler);
    editor.on("transaction", handler);

    return () => {
      editor.off("selectionUpdate", handler);
      editor.off("transaction", handler);
    };
  }, [editor]);

  if (!editor) return null;

  const currentFont = font || "Noto Sans";

  return (
    <div className={styles.editorWrapper}>
      {/* --- Toolbar --- */}
      <div className={styles.toolbar}>

        {/* 🔥 글꼴 선택기 */}
        <FontSelector
          currentFont={currentFont}
          onChange={(newFont) => {
            onFontChange(newFont); 
          }}
        />
        {/* --- Bold --- */}
        <button
          type="button"
          className={`${styles.btn} ${
            editor.isActive("bold") ? styles.active : ""
          }`}
          onClick={() => editor.chain().focus().toggleBold().run()}
        >
          <IconBold />
        </button>

        {/* --- Italic --- */}
        <button
          type="button"
          className={`${styles.btn} ${
            editor.isActive("italic") ? styles.active : ""
          }`}
          onClick={() => editor.chain().focus().toggleItalic().run()}
        >
          <IconItalic />
        </button>

        {/* --- Underline --- */}
        <button
          type="button"
          className={`${styles.btn} ${
            editor.isActive("underline") ? styles.active : ""
          }`}
          onClick={() => editor.chain().focus().toggleUnderline().run()}
        >
          <IconUnderline />
        </button>

        {/* --- Strike --- */}
        <button
          type="button"
          className={`${styles.btn} ${
            editor.isActive("strike") ? styles.active : ""
          }`}
          onClick={() => editor.chain().focus().toggleStrike().run()}
        >
          <IconStrike />
        </button>

        {/* --- 정렬 Left --- */}
        <button
          type="button"
          className={`${styles.btn} ${
            editor.isActive({ textAlign: "left" }) ? styles.active : ""
          }`}
          onClick={() => editor.chain().focus().setTextAlign("left").run()}
        >
          <IconAlignLeft />
        </button>

        {/* --- 정렬 Center --- */}
        <button
          type="button"
          className={`${styles.btn} ${
            editor.isActive({ textAlign: "center" }) ? styles.active : ""
          }`}
          onClick={() => editor.chain().focus().setTextAlign("center").run()}
        >
          <IconAlignCenter />
        </button>

        {/* --- 정렬 Right --- */}
        <button
          type="button"
          className={`${styles.btn} ${
            editor.isActive({ textAlign: "right" }) ? styles.active : ""
          }`}
          onClick={() => editor.chain().focus().setTextAlign("right").run()}
        >
          <IconAlignRight />
        </button>

        {/* --- Bullet List --- */}
        <button
          type="button"
          className={`${styles.btn} ${
            editor.isActive("bulletList") ? styles.active : ""
          }`}
          onClick={() => editor.chain().focus().toggleBulletList().run()}
        >
          <IconBullet />
        </button>

        {/* --- Number List --- */}
        <button
          type="button"
          className={`${styles.btn} ${
            editor.isActive("orderedList") ? styles.active : ""
          }`}
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
        >
          <IconNumberList />
        </button>
      </div>

      {/* --- Editor Body --- */}
      <EditorContent
        editor={editor}
        className={`${styles.editorContent} font-family-${currentFont.replace(
          /\s+/g,
          "-"
        )}`}
      />
    </div>
  );
}
