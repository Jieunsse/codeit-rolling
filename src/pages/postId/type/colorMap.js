const COLOR_MAP = {
  "beige": 'var(--beige-200)',  
  "purple": 'var(--purple-200)', 
  "blue": 'var(--blue-200)',     
  "green": 'var(--green-200)',

  "default": 'var(--White)'   
};

export const getMappedColor = (key) => {
  return COLOR_MAP[key] || COLOR_MAP.default;
};