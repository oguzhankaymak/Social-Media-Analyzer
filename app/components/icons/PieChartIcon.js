import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgPieChartIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      width="24"
      height="24"
      className=""
      {...props}>
      <Path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
      <Path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
    </Svg>
  );
}

export default SvgPieChartIcon;
