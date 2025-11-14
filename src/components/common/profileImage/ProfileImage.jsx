import styles from './ProfileImage.module.css';
import defaultProfile from '@components/card/assets/default_profile.svg';

/**
 * @typedef {object} ProfileImageProps
 * @property {string | undefined} [imageUrl] - 표시할 프로필 이미지의 URL
 * 값이 없으면 기본 프로필 이미지가 사용됩니다.
 */

/**
 * 사용자 프로필 이미지를 표시하는 컴포넌트입니다.
 * `imageUrl` prop이 제공되면 해당 이미지를 사용하고, 제공되지 않거나 undefined이면
 * 기본 프로필 이미지를 사용합니다. 이미지는 CSS 모듈을 사용하여 스타일링됩니다.
 *
 * @param {ProfileImageProps} props - 컴포넌트 속성
 * @returns {JSX.Element} 프로필 이미지를 담고 있는 JSX 요소
 */

function ProfileImage({ imageUrl, className = '', style = {}, alt }) {
  const src = imageUrl ? imageUrl : defaultProfile;

  return (
    <div className={`${styles.container} ${className}`} style={style}>
      <img className={styles.image} src={src} alt={alt || '프로필 이미지'} />
    </div>
  );
}

<<<<<<< HEAD
export default ProfileImage;
=======
export default ProfileImage;
>>>>>>> dev
