import { useState } from "react";
import Dropdown from "@/components/common/Dropdown";

function DropdownPage() {
  const [selectedFruit, setSelectedFruit] = useState("");  // ✅ 현재 선택된 과일 상태
  const [hasError, setHasError] = useState(false);          // ✅ 에러 상태
  const [errorMessage, setErrorMessage] = useState("");     // ✅ 에러 문구
  const [isDisabled, setIsDisabled] = useState(false);      // ✅ 비활성화 여부

  // 예시 옵션 리스트
  const fruitOptions = [
    { value: "apple", label: "사과" },
    { value: "banana", label: "바나나" },
    { value: "orange", label: "오렌지" },
  ];

  // ✅ 옵션 선택 시 실행
  const handleFruitChange = (value) => {
    setSelectedFruit(value);
    setHasError(false);        // 선택되면 에러 해제
    setErrorMessage("");       // 메시지 초기화
  };

  // ✅ 제출 버튼 클릭 시 유효성 검사
  const handleSubmit = () => {
    if (!selectedFruit) {
      setHasError(true);
      setErrorMessage("필수 선택 항목입니다");
      return;
    }

    console.log("선택한 과일:", selectedFruit);
    alert(`선택한 과일: ${selectedFruit}`);
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1 style={{ marginBottom: "16px" }}>Dropdown 테스트 페이지</h1>

      {/* ✅ 공통 컴포넌트 적용 */}
      <Dropdown
        value={selectedFruit}
        onChange={handleFruitChange}
        options={fruitOptions}
        placeholder="과일을 선택해주세요"
        disabled={isDisabled}
        hasError={hasError}
        errorMessage={errorMessage}
      />

      <div style={{ marginTop: "20px" }}>
        <button
          onClick={handleSubmit}
          style={{
            padding: "10px 20px",
            backgroundColor: "#181818",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          제출하기
        </button>

        <button
          onClick={() => setIsDisabled((prev) => !prev)}
          style={{
            marginLeft: "10px",
            padding: "10px 20px",
            backgroundColor: isDisabled ? "#999999" : "#555555",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          {isDisabled ? "활성화하기" : "비활성화하기"}
        </button>
      </div>
    </div>
  );
}

export default DropdownPage;
