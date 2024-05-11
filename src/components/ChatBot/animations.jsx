// React chatbot loading animation from github
// https://github.com/LucasBassetti/react-simple-chatbot/tree/master/lib/common

import { keyframes } from 'styled-components';

const hexToRgb = hex => {
    // http://stackoverflow.com/a/5624139
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b);
  
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16)
        }
      : null;
};
  
/**
 * Transform hex+alpha to rgba
 * @param {string} hex hex color code
 * @param {number} [alpha=1]
 * @returns {string} the rgba as string
 */
const rgba = (hex, alpha = 1) => {
    const color = hexToRgb(hex);
    return `rgba(${color.r}, ${color.g}, ${color.b}, ${alpha})`;
};

const loading = keyframes`
  0% { opacity: .2; }
  20% { opacity: 1; }
  100% { opacity: .2; }
`;

const scale = keyframes`
  100% { transform: scale(1); }
`;

const invalidInput = keyframes`
  25% { transform: rotate(-1deg); }
  100% { transform: rotate(1deg); }
`;

const pulse = color => keyframes`
  0% { box-shadow: 0 0 0 0 ${rgba(color, 0.4)}; }
  70% { box-shadow: 0 0 0 10px ${rgba(color, 0)}; }
  100% { box-shadow: 0 0 0 0 ${rgba(color, 0)}; }
`;

export { loading, scale, invalidInput, pulse };