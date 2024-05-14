import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
const MessageSquareSearchSvg = ({ size = 22, color = '#2f2f2f' }) => (
  <Svg
    width={size}
    height={size}
    fill={color}
    viewBox='0 0 24 24'
    xmlns='http://www.w3.org/2000/svg'
  >
    <Path
      d='M13.7041 12.704L15.4788 14.4787M21 20L17.6757 18.3378C17.4237 18.2118 17.2977 18.1488 17.1656 18.1044C17.0484 18.065 16.9277 18.0365 16.8052 18.0193C16.6672 18 16.5263 18 16.2446 18H6.2C5.07989 18 4.51984 18 4.09202 17.782C3.71569 17.5903 3.40973 17.2843 3.21799 16.908C3 16.4802 3 15.9201 3 14.8V7.2C3 6.07989 3 5.51984 3.21799 5.09202C3.40973 4.71569 3.71569 4.40973 4.09202 4.21799C4.51984 4 5.0799 4 6.2 4H17.8C18.9201 4 19.4802 4 19.908 4.21799C20.2843 4.40973 20.5903 4.71569 20.782 5.09202C21 5.51984 21 6.0799 21 7.2V20ZM14.5 10.5C14.5 8.84315 13.1569 7.5 11.5 7.5C9.84315 7.5 8.5 8.84315 8.5 10.5C8.5 12.1569 9.84315 13.5 11.5 13.5C13.1569 13.5 14.5 12.1569 14.5 10.5Z'
      stroke='white'
      strokeWidth={1}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </Svg>
);
export default MessageSquareSearchSvg;
