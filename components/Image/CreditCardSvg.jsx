import * as React from 'react';
import Svg, { Rect, Line } from 'react-native-svg';
const SVGComponent = ({ size = 38, color = '' }) => (
  <Svg
    xmlns='http://www.w3.org/2000/svg'
    width={size}
    height={size}
    viewBox='0 0 24 24'
    fill={color}
    stroke='#2f2f2f'
    strokeWidth={2}
    strokeLinecap='round'
    strokeLinejoin='round'
    className='feather feather-credit-card'
  >
    <Rect x={1} y={4} width={22} height={16} rx={2} ry={2} />
    <Line x1={1} y1={10} x2={23} y2={10} />
  </Svg>
);
export default SVGComponent;
