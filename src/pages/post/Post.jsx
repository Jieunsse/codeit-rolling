import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";

import Header from "@/components/common/Header/Header";
import Dropdown from "@/components/common/Dropdown/Dropdown";
import Input from "@/components/common/Input/Input";
import Button from "@/components/common/Button/base/Button";
import ProfileImage from "@/components/common/ProfileImage/ProfileImage";

import styles from "@/pages/post/Post.module.css";

import purpleProfile from "@/components/assets/profile-image-purple.png";

export default function Post() {
  // -----------------------------
  // 👉 recipient_id 가져오기
  // -----------------------------
  const { id: recipientId } = useParams();
  console.log("받아온 recipient_id:", recipientId);

  // -----------------------------
  // 👉 Input 상태 + 유효성 검사
  // -----------------------------
  const [sender, setSender] = useState("");
  const [senderError, setSenderError] = useState("");
  const [isSenderTouched, setIsSenderTouched] = useState(false);

  function validateSender(name) {
    if (!name.trim()) {
      return "값을 입력해 주세요.";
    }

    const regex = /^[가-힣a-zA-Z]+$/;
    if (!regex.test(name)) {
      return "한글 또는 영문만 입력해주세요.";
    }

    if (name.length < 2) {
      return "최소 2글자 이상 입력해주세요.";
    }

    return "";
  }

  const handleSenderChange = (e) => {
    const value = e.target.value;
    setSender(value);

    const errMsg = validateSender(value);
    setSenderError(errMsg);
  };

  const handleSenderBlur = () => {
    setIsSenderTouched(true);
    const errMsg = validateSender(sender);
    setSenderError(errMsg);
  };

  // -----------------------------
  // 👉 관계 선택
  // -----------------------------
  const [relationship, setRelationship] = useState("지인");

  // -----------------------------
  // 👉 프로필 이미지 상태
  // -----------------------------
  const [profileList, setProfileList] = useState([]);
  const [selectedProfile, setSelectedProfile] = useState(purpleProfile);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const profileListRef = useRef(null);

  // -----------------------------
  // 👉 서버의 프로필 이미지 목록 GET
  // -----------------------------
  useEffect(() => {
    async function fetchProfileImages() {
      try {
        const res = await fetch("https://rolling-api.vercel.app/profile-images/");
        if (res.ok) {
          const data = await res.json();
          setProfileList(data.imageUrls);
        }
      } catch (err) {
        console.log(err);
      }
    }

    fetchProfileImages();
  }, []);

  // -----------------------------
  // 👉 외부 클릭 시 프로필 리스트 닫기
  // -----------------------------
  useEffect(() => {
    function handleClickOutside(e) {
      if (
        profileListRef.current &&
        !profileListRef.current.contains(e.target)
      ) {
        setIsProfileOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // -----------------------------
  // 👉 프로필 이미지 선택기
  // -----------------------------
  const toggleProfileList = () => {
    setIsProfileOpen((prev) => !prev);
  };

  const handleProfileSelect = (url) => {
    setSelectedProfile(url);
    setIsProfileOpen(false);
  };

  return (
    <>
      <Header />

      <div className={styles.page}>
        <div className={styles.main}>
          <div className={styles.inner}>

            {/* From. */}
            <section className={styles.fieldGroup}>
              <h2 className={styles.label}>From.</h2>

              <Input
                placeholder="이름을 입력해 주세요."
                value={sender}
                onChange={handleSenderChange}
                onBlur={handleSenderBlur}
                hasError={isSenderTouched && !!senderError}
                errorMessage={senderError}
              />
            </section>

            {/* 프로필 이미지 */}
            <section className={styles.fieldGroup} ref={profileListRef}>
              <h2 className={styles.label}>프로필 이미지</h2>

              <div className={styles.profileRow}>

                <button
                  className={styles.profileButton}
                  onClick={toggleProfileList}
                >
                  <ProfileImage
                    imageUrl={selectedProfile}
                    className={styles.profileImg}
                  />
                </button>

                <span className={styles.profileGuide}>
                  프로필 이미지를 선택해주세요!
                </span>
              </div>

              {isProfileOpen && (
                <div className={styles.profileList}>
                  {profileList.map((url) => (
                    <button
                      key={url}
                      className={styles.profileItem}
                      onClick={() => handleProfileSelect(url)}
                    >
                      <img src={url} alt="profile" />
                    </button>
                  ))}
                </div>
              )}
            </section>

            {/* 관계 */}
            <section className={styles.fieldGroup}>
              <h2 className={styles.label}>상대와의 관계</h2>

              <Dropdown
                options={[
                  { label: "지인", value: "지인" },
                  { label: "친구", value: "친구" },
                  { label: "가족", value: "가족" },
                  { label: "동료", value: "동료" },
                ]}
                value={relationship}
                onChange={setRelationship}
              />
            </section>

            {/* 내용 */}
            <section className={styles.fieldGroup}>
              <h2 className={styles.label}>내용을 입력해 주세요</h2>

              <div className={styles.editorPlaceholder}>
                {/* TipTap 에디터 자리 */}
              </div>
            </section>

            {/* 폰트 선택 */}
            <section className={styles.fieldGroup}>
              <h2 className={styles.label}>폰트 선택</h2>

              <Dropdown
                options={[
                  { label: "Noto Sans", value: "noto" },
                  { label: "Pretendard", value: "pretendard" },
                  { label: "나눔명조", value: "nanum" },
                  { label: "손글씨", value: "hand" },
                ]}
                value={"pretendard"}
                onChange={() => {}}
              />
            </section>

            {/* 생성하기 버튼 */}
            <div className={styles.submitWrapper}>
              <Button
                title="생성하기"
                variant="primary"
                interactionState="enabled"
                style={{ width: "100%" }}
              />
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
