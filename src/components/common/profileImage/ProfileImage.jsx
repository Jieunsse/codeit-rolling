import styles from './ProfileImage.module.css';
import defaultProfile from '../../../assets/default_profile.svg';

function ProfileImage({imageUrl}) {
  const src = imageUrl ? imageUrl : defaultProfile;

  return (
    <div className={styles.container}>
      <img 
        className={styles.image}
        src={src} 
        alt='프로필 이미지'
      />
    </div>
  )
}

export default ProfileImage;