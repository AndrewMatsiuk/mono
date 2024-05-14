import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
const CreditCardPercentSvg = ({ size = 30, color = '' }) => (
  <Svg
    width={size}
    height={size}
    fill={color}
    viewBox='0 0 24 24'
    xmlns='http://www.w3.org/2000/svg'
  >
    <Path
      d='M12 6H5C3.89543 6 3 6.89543 3 8V14M21 3L16 9M15 3L15 4M22 8L22 9M3 14V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V14H3Z'
      stroke='white'
      strokeWidth={1}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </Svg>
);
export default CreditCardPercentSvg;
