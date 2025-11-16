import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '@/shared/firebase/firebaseConfig.js';
import styles from './googleLoginButton.module.css';

export default function GoogleLoginButton() {
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
    } catch (error) {
      console.error('로그인 실패', error);
    }
  };

  return (
    <button onClick={handleGoogleLogin} className={styles.googleLoginButton}>
      구글로 로그인하기
    </button>
  );
}
