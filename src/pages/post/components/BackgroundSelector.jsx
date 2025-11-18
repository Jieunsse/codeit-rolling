import Button from '@/components/common/button/base/Button';
import BackgroundOption from '@/components/option/BackgroundOption';
import updateIcon from 'src/components/assets/update.svg';

function BackgroundSelector({
  background: { type },
  setBackground,
  interactionState,
  setInteractionState,
  colorArray,
  randomImages,
  selected,
  setSelected,
  setRandomChange,
  styles,
}) {
  return (
    <div>
      <div className={styles.optionTitle}>배경화면을 선택해 주세요.</div>
      <div className={styles.optionDescription}>
        컬러를 선택하거나, 이미지를 선택할 수 있습니다.
      </div>

      {/* toggle - 토글 버튼 */}
      <div className={styles.buttonContainer}>
        <div className={styles.toggleWrapper}>
          <div
            className={
              type === 'color'
                ? `${styles.indicator} ${styles.left}`
                : `${styles.indicator} ${styles.right}`
            }
          />

          <button
            onClick={() => setBackground(prev => ({ ...prev, type: 'color' }))}
            className={
              type === 'color' ? styles.activeText : styles.inactiveText
            }
          >
            컬러
          </button>

          <button
            onClick={() => setBackground(prev => ({ ...prev, type: 'image' }))}
            className={
              type === 'image' ? styles.activeText : styles.inactiveText
            }
          >
            이미지
          </button>
        </div>

        {/* random button - 랜덤 버튼 */}
        <div className={styles.changeButton}>
          <Button
            title="랜덤 이미지"
            variant="outlined"
            size={28}
            isIcon
            icon={{ src: updateIcon, className: styles.updateIcon }}
            interactionState={interactionState}
            onMouseEnter={() => setInteractionState('hover')}
            onMouseLeave={() => setInteractionState('enabled')}
            onMouseDown={() => setInteractionState('pressed')}
            onMouseUp={() => setInteractionState('hover')}
            onFocus={() => setInteractionState('focus')}
            onBlur={() => setInteractionState('enabled')}
            className={`${styles.randomButton} ${
              type === 'color' ? styles.randomButtonHidden : ''
            }`}
            onClick={() => setRandomChange(prev => prev + 1)}
          />
        </div>
      </div>

      {/* options - 배경 옵션 */}
      <div className={styles.optionBox}>
        {type === 'color'
          ? colorArray.map((item, index) => (
              <BackgroundOption
                key={index}
                background={item.value}
                selected={selected === index}
                onClick={() => {
                  setSelected(index);
                  setBackground(prev => ({ ...prev, color: item.color }));
                }}
              />
            ))
          : randomImages.map((item, index) => (
              <BackgroundOption
                key={index}
                background={item.image}
                selected={selected === index}
                mode="image"
                onClick={() => {
                  setSelected(index);
                  setBackground(prev => ({ ...prev, image: item.image }));
                }}
              />
            ))}
      </div>
    </div>
  );
}

export default BackgroundSelector;
