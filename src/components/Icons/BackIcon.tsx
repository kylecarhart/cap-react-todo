import { SVGProps } from "react";

const BackIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={17}
    height={17}
    fill="none"
    {...props}
  >
    <path
      fill="#747474"
      d="m2.833 7.083-.707.707-.707-.707.707-.707.707.707Zm12.334 5.667a1 1 0 1 1-2 0h2Zm-9.5-1.418L2.128 7.79 3.54 6.376l3.542 3.542-1.414 1.414Zm-3.54-4.956 3.54-3.541 1.415 1.414L3.54 7.79 2.126 6.376Zm.706-.293H8.5v2H2.833v-2Zm5.667 0a6.667 6.667 0 0 1 6.667 6.667h-2A4.667 4.667 0 0 0 8.5 8.083v-2Z"
    />
  </svg>
);
export default BackIcon;
