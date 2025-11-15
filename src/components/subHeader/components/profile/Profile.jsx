import ProfileImage from '@components/common/profileImage/ProfileImage.jsx';
import ProfileCounter from '@components/subHeader/components/profile/profileCounter/ProfileCounter.jsx';
import styles from './Profile.module.css';

export default function Profile({ profileImages = [], profileCount }) {
  const images = profileImages.slice(0, 3);

  return (
    <div className={styles.profileWrapper}>
      {images.map((url, index) => (
        <ProfileImage key={index} imageUrl={url} />
      ))}

      <ProfileCounter count={profileCount} />
    </div>
  );
}
