import React from "react";
import { colors } from "../../helper/constant";

const ArrowRight = () => {
  return (
    <svg
      width="13"
      height="20"
      viewBox="0 0 13 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.3125 10.7461L4.34375 18.7148C3.75781 19.3008 2.87891 19.3008 2.35156 18.7148L1.00391 17.4258C0.476562 16.8398 0.476562 15.9609 1.00391 15.4336L6.6875 9.80859L1.00391 4.125C0.476562 3.59766 0.476562 2.71875 1.00391 2.13281L2.35156 0.785156C2.87891 0.257812 3.75781 0.257812 4.34375 0.785156L12.3125 8.75391C12.8398 9.33984 12.8398 10.2188 12.3125 10.7461Z"
        fill={colors.primary}
      />
    </svg>
  );
};

export default ArrowRight;
