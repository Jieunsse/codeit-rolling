import { useState } from "react";
import RichTextEditor from "@/components/common/RichTextEditor";

function RichTextEditorPage() {
  const [content, setContent] = useState(""); // 외부 상태

  return (
    <>
      <main style={{ padding: "40px" }}>
        <h2>Rich Text Editor 테스트 페이지</h2>
        <RichTextEditor value={content} onChange={setContent} />
        <div style={{ marginTop: 20 }}>
          <h4>현재 HTML</h4>
          <pre
            style={{
              background: "#f9f9f9",
              padding: 12,
              borderRadius: 8,
              border: "1px solid #eee",
              overflowX: "auto",
            }}
          >
            {content}
          </pre>
        </div>
      </main>
    </>
  );
}

export default RichTextEditorPage;
