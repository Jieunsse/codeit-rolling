import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import Header from '@/components/common/header/Header.jsx';
import Dropdown from '@/components/common/Dropdown/Dropdown.jsx';
import Input from '@/components/common/Input/Input.jsx';
import Button from '@/components/common/Button/base/Button.jsx';
import ProfileImage from '@/components/common/ProfileImage/ProfileImage.jsx';
import RichEditor from '@/components/editor/RichEditor.jsx';
import purpleProfile from '@/components/assets/profile-image-purple.png';

import styles from '@/pages/postMessage/PostMessagePage.module.css';

export default function PostMessagePage() {
  const { id: recipientId } = useParams();
  const navigate = useNavigate();

  // -----------------------------
  // From. 입력 + 유효성 검사
  // -----------------------------
  const [sender, setSender] = useState('');
  const [senderError, setSenderError] = useState('');
  const [isSenderTouched, setIsSenderTouched] = useState(false);

  function validateSender(name) {
    if (!name.trim()) return '값을 입력해 주세요.';

    const regex = /^[가-힣a-zA-Z]+$/;
    if (!regex.test(name)) return '한글 또는 영문만 입력해주세요.';

    if (name.length < 2) return '최소 2글자 이상 입력해주세요.';

    return '';
  }

  const handleSenderChange = e => {
    const v = e.target.value;
    setSender(v);
    setSenderError(validateSender(v));
  };

  const handleSenderBlur = () => {
    setIsSenderTouched(true);
    setSenderError(validateSender(sender));
  };

  // -----------------------------
  // 프로필
  // -----------------------------
  const DEFAULT_PROFILE =
    'https://learn-codeit-kr-static.s3.ap-northeast-2.amazonaws.com/sprint-proj-image/default_avatar.png';

  const [profileList, setProfileList] = useState([]);
  const [selectedProfile, setSelectedProfile] = useState(purpleProfile);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const profileListRef = useRef(null);

  useEffect(() => {
    async function fetchProfileImages() {
      try {
        const res = await fetch(
          'https://rolling-api.vercel.app/profile-images/'
        );
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

  // 외부 클릭 시 프로필 닫기
  useEffect(() => {
    const handler = e => {
      if (
        profileListRef.current &&
        !profileListRef.current.contains(e.target)
      ) {
        setIsProfileOpen(false);
      }
    };

    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const toggleProfile = () => setIsProfileOpen(p => !p);

  // -----------------------------
  // 관계 선택
  // -----------------------------
  const [relationship, setRelationship] = useState('지인');

  // -----------------------------
  // 에디터 Content / Font
  // -----------------------------
  const [content, setContent] = useState('');
  const [font, setFont] = useState('Noto Sans');

  function isContentEmpty(html) {
    const cleaned = html
      .replace(/<p>/g, '')
      .replace(/<\/p>/g, '')
      .replace(/&nbsp;/g, '')
      .trim();

    return cleaned.length === 0;
  }

  // -----------------------------
  // 버튼 Disabled 조건
  // -----------------------------
  const isSubmitDisabled =
    sender.trim().length === 0 || senderError || isContentEmpty(content);

  // -----------------------------
  // POST 요청
  // -----------------------------
  const handleSubmit = async () => {
    if (isContentEmpty(content)) {
      alert('내용을 입력해주세요!');
      return;
    }

    const url = `https://rolling-api.vercel.app/20-3/recipients/${recipientId}/messages/`;

    const isLocalImage = !selectedProfile.startsWith('http');
    const safeProfileURL = isLocalImage ? DEFAULT_PROFILE : selectedProfile;

    const payload = {
      team: '20-3',
      recipientId: Number(recipientId),
      sender,
      profileImageURL: safeProfileURL,
      relationship,
      content,
      font,
    };

    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const result = await res.json();
      console.log('POST Result:', result);

      if (res.ok) {
        localStorage.setItem('my_name', sender);
        alert('메시지가 성공적으로 생성되었습니다!');
        navigate(`/post/${recipientId}`); // ← 이동!
      } else {
        alert(result.detail || '요청 실패');
      }
    } catch (err) {
      console.log('POST Error:', err);
      alert('요청 중 문제가 발생했습니다.');
    }
  };

  return (
    <>
      <Header />

      <div className={styles.page}>
        <div className={styles.main}>
          <div className={styles.inner}>
            {/* From */}
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

            {/* 프로필 */}
            <section className={styles.fieldGroup} ref={profileListRef}>
              <h2 className={styles.label}>프로필 이미지</h2>
              <div className={styles.profileRow}>
                <button
                  className={styles.profileButton}
                  onClick={toggleProfile}
                >
                  <ProfileImage
                    imageUrl={selectedProfile || DEFAULT_PROFILE}
                    className={styles.profileImg}
                  />
                </button>
                <span className={styles.profileGuide}>
                  프로필 이미지를 선택해주세요!
                </span>
              </div>

              {isProfileOpen && (
                <div className={styles.profileList}>
                  {profileList.map(url => (
                    <button
                      key={url}
                      className={styles.profileItem}
                      onClick={() => {
                        setSelectedProfile(url);
                        setIsProfileOpen(false);
                      }}
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
                  { label: '지인', value: '지인' },
                  { label: '친구', value: '친구' },
                  { label: '가족', value: '가족' },
                  { label: '동료', value: '동료' },
                ]}
                value={relationship}
                onChange={setRelationship}
              />
            </section>

            {/* 텍스트 에디터 */}
            <section className={styles.fieldGroup}>
              <h2 className={styles.label}>내용을 입력해 주세요</h2>
              <RichEditor
                value={content}
                onChange={setContent}
                font={font}
                onFontChange={setFont}
              />
            </section>

            {/* 버튼 */}
            <div className={styles.submitWrapper}>
              <Button
                title="생성하기"
                variant="primary"
                interactionState={isSubmitDisabled ? 'disabled' : 'enabled'}
                onClick={handleSubmit}
                style={{ width: '100%' }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
