import Button from '@components/common/button/base/Button.jsx';

export default function Test() {
  const outlinedSizes = [56, 40, 36, 28];
  const interactionStates = [
    'enabled',
    'hover',
    'pressed',
    'focus',
    'disabled',
  ];

  return (
    <main
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '60px',
        padding: '40px',
        fontFamily: 'Pretendard, sans-serif',
        backgroundColor: '#fafafa',
      }}
    >
      {/* ✅ Outlined Buttons */}
      <section>
        <h2
          style={{
            fontSize: '28px',
            fontWeight: 700,
            marginBottom: '24px',
            borderBottom: '2px solid #000',
            paddingBottom: '8px',
          }}
        >
          Outlined Buttons
        </h2>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '32px',
          }}
        >
          {outlinedSizes.map(size => (
            <div
              key={`outlined-${size}`}
              style={{
                backgroundColor: '#fff',
                border: '1px solid #e6e6e6',
                borderRadius: '12px',
                padding: '20px 24px',
                flex: '1 1 280px',
                minWidth: '280px',
                boxShadow: '0 2px 6px rgba(0,0,0,0.04)',
              }}
            >
              <h3
                style={{
                  fontSize: '18px',
                  fontWeight: 600,
                  marginBottom: '16px',
                  color: '#222',
                }}
              >
                size = {size}
              </h3>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'flex-start',
                  gap: '32px',
                }}
              >
                {/* 아이콘 없는 버튼 */}
                <div style={{ marginBottom: '20px' }}>
                  <h4
                    style={{
                      fontSize: '14px',
                      fontWeight: 500,
                      color: '#555',
                      marginBottom: '8px',
                    }}
                  >
                    아이콘 없음
                  </h4>
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '8px',
                      flexDirection: 'column',
                    }}
                  >
                    {interactionStates.map(interactionState => (
                      <Button
                        key={`outlined-${size}-${interactionState}-noicon`}
                        variant="outlined"
                        size={size}
                        isIcon={false}
                        title={capitalize(interactionState)}
                        interactionState={interactionState}
                      />
                    ))}
                  </div>
                </div>

                {/* 아이콘 있는 버튼 */}
                {size !== 56 && (
                  <div>
                    <h4
                      style={{
                        fontSize: '14px',
                        fontWeight: 500,
                        color: '#555',
                        marginBottom: '8px',
                      }}
                    >
                      아이콘 포함
                    </h4>
                    <div
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '8px',
                        flexDirection: 'column',
                      }}
                    >
                      {interactionStates.map(interactionState => (
                        <Button
                          key={`outlined-${size}-${interactionState}-icon`}
                          variant="outlined"
                          size={size}
                          isIcon={true}
                          title={capitalize(interactionState)}
                          interactionState={interactionState}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
        }}
      >
        {/* ✅ Primary Buttons */}
        <SectionBlock title="Primary Buttons">
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '12px',
              flexDirection: 'column',
            }}
          >
            {interactionStates.map(interactionState => (
              <Button
                key={`primary-${interactionState}`}
                variant="primary"
                title={capitalize(interactionState)}
                interactionState={interactionState}
              />
            ))}
          </div>
        </SectionBlock>

        {/* ✅ Secondary Buttons */}
        <SectionBlock title="Secondary Buttons">
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '12px',
              flexDirection: 'column',
            }}
          >
            {interactionStates.map(interactionState => (
              <Button
                key={`secondary-${interactionState}`}
                variant="secondary"
                title={capitalize(interactionState)}
                interactionState={interactionState}
              />
            ))}
          </div>
        </SectionBlock>
      </div>
    </main>
  );
}

/* ✅ 구역 타이틀용 공통 래퍼 */
function SectionBlock({ title, children }) {
  return (
    <section
      style={{
        backgroundColor: '#fff',
        border: '1px solid #e6e6e6',
        borderRadius: '12px',
        padding: '24px 28px',
        boxShadow: '0 2px 6px rgba(0,0,0,0.04)',
      }}
    >
      <h2
        style={{
          fontSize: '24px',
          fontWeight: 700,
          marginBottom: '20px',
          borderBottom: '2px solid #000',
          paddingBottom: '6px',
        }}
      >
        {title}
      </h2>
      {children}
    </section>
  );
}

/* ✅ 첫 글자 대문자 유틸 */
function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}
