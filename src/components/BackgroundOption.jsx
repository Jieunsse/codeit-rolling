// BackgroundOption.jsx
import styles from "@/components/BackgroundOption.module.css";
import checkIcon from "@/assets/Enabled.png";

function BackgroundOption({ color, selected = false, onClick }) {
  return (
    <>
      <button
        type="button"
        className={styles.card}
        style={{ backgroundColor: color }}
        onClick={onClick}
      >
        {selected && <img className={styles.check} src={checkIcon} alt="" />}
      </button>
    </>
  );
}

export default BackgroundOption;
