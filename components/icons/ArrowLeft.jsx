import React from "react";
import { colors } from "../../helper/constant";

const ArrowLeft = () => {
  return (
    <svg
      width="13"
      height="20"
      viewBox="0 0 13 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        // opacity="0.5"
        d="M1.00391 8.75391L8.97266 0.785156C9.55859 0.257812 10.4375 0.257812 10.9648 0.785156L12.3125 2.13281C12.8398 2.66016 12.8398 3.59766 12.3125 4.125L6.62891 9.75L12.3125 15.4336C12.8398 15.9609 12.8398 16.8398 12.3125 17.4258L10.9648 18.7148C10.4375 19.3008 9.55859 19.3008 8.97266 18.7148L1.00391 10.7461C0.476562 10.2188 0.476562 9.33984 1.00391 8.75391Z"
        fill={colors.primary}
      />
    </svg>
  );
};

export default ArrowLeft;
