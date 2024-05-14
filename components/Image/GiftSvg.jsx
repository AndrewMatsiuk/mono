import * as React from 'react';
import Svg, { Polyline, Rect, Line, Path } from 'react-native-svg';
const GiftSvg = ({ size = 30, color = '' }) => (
  <Svg
    xmlns='http://www.w3.org/2000/svg'
    width={size}
    height={size}
    fill={color}
    viewBox='0 0 24 24'
    stroke='#2f2f2f'
    strokeWidth={2}
    strokeLinecap='round'
    strokeLinejoin='round'
    className='feather feather-gift'
  >
    <Polyline points='20 12 20 22 4 22 4 12' />
    <Rect x={2} y={7} width={20} height={5} />
    <Line x1={12} y1={22} x2={12} y2={7} />
    <Path d='M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z' />
    <Path d='M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z' />
  </Svg>
);
export default GiftSvg;
