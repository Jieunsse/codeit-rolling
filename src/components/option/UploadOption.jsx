import styles from '@/components/option/UploadOption.module.css';
import { useRef } from 'react';

function UploadOption({ onFileSelect }) {
  const handleFileChange = e => {
    const file = e.target.files[0];
    if (!file) return;
    onFileSelect(file);
  };
  return (
    <div className={styles.container}>
      <input className={styles.inner} type="file" onChange={handleFileChange} />
      <div className={styles.innerText}>파일 크기 : 2MB 이하</div>
    </div>
  );
}

export default UploadOption;
