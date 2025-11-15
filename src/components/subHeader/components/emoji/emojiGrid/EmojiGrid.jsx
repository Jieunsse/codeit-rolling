import { chunkArray } from '@/components/subHeader/utils/chunkArray.js';

export default function EmojiGrid({ items = [] }) {
  const chunked = chunkArray(items, 4);

  return (
    <div>
      <div>
        {chunked.map((group, rowIndex) => (
          <div key={rowIndex}>
            {group.map((item, i) => (
              <div key={i}>{item.label}</div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
