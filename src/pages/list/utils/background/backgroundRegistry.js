import image01 from '@/components/cardlist/assets/image_01.png';
import image02 from '@/components/cardlist/assets/image_02.png';

import pattern01 from '@/components/cardlist/assets/pattern_01.png';
import pattern02 from '@/components/cardlist/assets/pattern_02.png';
import pattern03 from '@/components/cardlist/assets/pattern_03.png';
import pattern04 from '@/components/cardlist/assets/pattern_04.png';

export const backgroundImageMap = {
  'image_01.png': image01,
  'image_02.png': image02,
};

export const backgroundColorMap = {
  purple: {
    color: 'var(--purple-200)',
    pattern: pattern01,
  },
  beige: {
    color: 'var(--beige-200)',
    pattern: pattern02,
  },
  blue: {
    color: 'var(--blue-200)',
    pattern: pattern03,
  },
  green: {
    color: 'var(--green-200)',
    pattern: pattern04,
  },
};

export const COLOR_KEYS = ['purple', 'beige', 'blue', 'green'];
