import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
const PieChartSvg = ({ size = 30, color = '' }) => (
  <Svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    width={size}
    height={size}
    fill={color}
  >
    <Path d='M11 2.05V13h10.95c-.501 5.053-4.765 9-9.95 9c-5.523 0-10-4.477-10-10c0-5.185 3.947-9.449 9-9.95m2-1.507C18.554 1.02 22.979 5.447 23.457 11H13z' />
  </Svg>
);
export default PieChartSvg;
