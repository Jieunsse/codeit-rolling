import styles from './popoverMenu.module.css';

export default function PopoverMenu({ items, onSelect }) {
  return (
    <div>
      {items.map((item, index) => (
        <div key={index} className={styles.item} onClick={() => onSelect(item)}>
          {item.label}
        </div>
      ))}
    </div>
  );
}
