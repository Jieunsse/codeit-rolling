import styles from './ProfileImage.module.css';

function ProfileImage({imageUrl}) {
  // To-do: 기본이미지 추가

  const src = imageUrl;

  return (
    <div className={styles.container}>
      <img 
        src={src} 
        alt='프로필 이미지'
        className={styles.image}
      />
    </div>
  )
}

export default ProfileImage;