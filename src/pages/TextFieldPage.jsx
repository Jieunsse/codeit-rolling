
import { useState } from "react";
import Input from "@/components/common/Input";

export default function TextFieldPage() {
  const [name, setName] = useState("");
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // ✅ 입력 이벤트 핸들러 (검증 포함)
  const handleNameChange = (e) => {
    const value = e.target.value;
    setName(value);

    // 이름은 한글/영문만, 최소 2글자 이상
    if (/[^A-Za-z가-힣]/.test(value)) {
      setHasError(true);
      setErrorMessage("한글과 영문만 입력 가능합니다.");
    } else if (value.trim().length > 0 && value.trim().length < 2) {
      setHasError(true);
      setErrorMessage("이름은 최소 2글자 이상 입력해주세요.");
    } else {
      setHasError(false);
      setErrorMessage("");
    }
  };

  // ✅ 제출 핸들러 (3초 API 요청 시뮬레이션)
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || hasError) {
      alert("입력값을 확인해주세요.");
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      alert("제출 완료!");
      console.log("제출된 값:", name);
    }, 3000); // 3초 지연
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        width: 320,
        margin: "60px auto",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
      }}
    >
      <Input
        value={name}
        onChange={handleNameChange} // ✅ 부모가 제어하는 onChange
        hasError={hasError}
        errorMessage={errorMessage}
        placeholder="이름을 입력하세요"
        disabled={isSubmitting || isSubmitted} // ✅ 비활성화 조건
      />

      <button
        type="submit"
        disabled={isSubmitting || isSubmitted}
        style={{
          height: 44,
          borderRadius: 8,
          backgroundColor: isSubmitted
            ? "#aaa"
            : isSubmitting
            ? "#ccc"
            : "#555",
          color: "#fff",
          border: "none",
          cursor: isSubmitting || isSubmitted ? "not-allowed" : "pointer",
          transition: "background 0.2s ease",
        }}
      >
        {isSubmitted ? "제출 완료" : isSubmitting ? "전송 중..." : "제출"}
      </button>
    </form>
  );
}



