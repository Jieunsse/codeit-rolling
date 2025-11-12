/** @type {import("stylelint").Config} */
export default {
  extends: ['stylelint-config-standard', 'stylelint-config-css-modules'],
  plugins: ['stylelint-order'],
  rules: {
    // ✅ 속성 순서 정렬 규칙 추가
    'order/properties-order': [
      [
        // 🔹 1. 박스 모델 관련
        'display',
        'position',
        'top',
        'right',
        'bottom',
        'left',
        'z-index',

        // 🔹 2. 박스 사이즈 관련
        'width',
        'height',
        'min-width',
        'min-height',
        'max-width',
        'max-height',

        // 🔹 3. 여백 및 패딩
        'margin',
        'margin-top',
        'margin-right',
        'margin-bottom',
        'margin-left',
        'padding',
        'padding-top',
        'padding-right',
        'padding-bottom',
        'padding-left',

        // 🔹 4. 테두리 / 모서리
        'border',
        'border-radius',

        // 🔹 5. 타이포그래피
        'font-family',
        'font-size',
        'font-weight',
        'line-height',
        'letter-spacing',
        'text-align',
        'color',

        // 🔹 6. 기타
        'background',
        'background-color',
        'gap',
        'cursor',
        'transition',
      ],
      { unspecified: 'bottomAlphabetical' },
    ],

    // ✅ CSS Modules 문법 허용
    'property-no-unknown': [true, { ignoreProperties: ['composes'] }],

    // ✅ 기타 스타일 규칙
    'selector-class-pattern': '^[a-zA-Z0-9_-]+$',
    'color-hex-length': 'long',
    'declaration-block-no-duplicate-properties': true,
    'color-no-invalid-hex': true,
  },
};
