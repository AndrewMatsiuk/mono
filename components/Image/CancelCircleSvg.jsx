import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const CancelCircleSvg = ({ size = 30, color = '' }) => (
  <Svg
    width={size}
    height={size}
    fill={color}
    viewBox='0 0 1024 1024'
    className='icon'
    xmlns='http://www.w3.org/2000/svg'
  >
    <Path
      d='M512 128C300.8 128 128 300.8 128 512s172.8 384 384 384 384-172.8 384-384S723.2 128 512 128z m0 85.333333c66.133333 0 128 23.466667 179.2 59.733334L273.066667 691.2C236.8 640 213.333333 578.133333 213.333333 512c0-164.266667 134.4-298.666667 298.666667-298.666667z m0 597.333334c-66.133333 0-128-23.466667-179.2-59.733334l418.133333-418.133333C787.2 384 810.666667 445.866667 810.666667 512c0 164.266667-134.4 298.666667-298.666667 298.666667z'
      fill='white'
    />
  </Svg>
);
export default CancelCircleSvg;
