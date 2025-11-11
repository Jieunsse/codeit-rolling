// src/pages/BackgroundOptionPage.jsx
import { useState } from "react";
import BackgroundOption from "@/components/BackgroundOption.jsx";

/**
 * BackgroundOptionPage
 * 
 * - 공통 컴포넌트(BackgroundOption)는 UI + onClick만 담당
 * - 이 페이지에서만 state(선택 상태)와 로직을 관리
 */
function BackgroundOptionPage() {
  // 현재 선택된 카드 index
  const [selectedIndex, setSelectedIndex] = useState(null);

  // Figma 기준 색상값 (헥사 코드 직접 사용)
  const BACKGROUND_COLORS = ["#FFE2AD", "#ECD9FF", "#B1E4FF", "#D0F5C3"];

  // 클릭 이벤트 처리 함수
  const handleSelect = (index) => {
    // 같은 카드를 다시 클릭하면 선택 해제
    if (selectedIndex === index) {
      setSelectedIndex(null);
    } else {
      setSelectedIndex(index);
    }
  };

  return (
    <>
      <main style={{ padding: "40px" }}>
        <h1 style={{ marginBottom: "20px" }}>배경화면을 선택해주세요</h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 168px)",
            gap: "16px",
          }}
        >
          {BACKGROUND_COLORS.map((color, idx) => (
            <BackgroundOption
              key={color}
              color={color}
              selected={selectedIndex === idx}
              onClick={() => handleSelect(idx)}
            />
          ))}
        </div>

        <p style={{ marginTop: "20px", fontSize: "14px" }}>
          {selectedIndex !== null
            ? `선택된 배경색: ${BACKGROUND_COLORS[selectedIndex]}`
            : "선택된 배경이 없습니다."}
        </p>
      </main>
    </>
  );
}

export default BackgroundOptionPage;
