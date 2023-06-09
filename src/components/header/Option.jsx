import React from "react";
import "./theme.css";

const Option = () => {
  return (
    // className="flex relative left-8 md:left-0 mb-1 top-1 border--header__justify h-10 bg-blue-transparent rounded-3xl sm:space-x-4 text-white"
    <div className="relative left-4 flex h-8 border--header__justify  rounded-3xl sm:space-x-4 text-white bg-blue-transparent ">
      <div className="w-14 md:w-12 mb-6 font-medium text-center">...</div>
      <p className="border--header__option font-extralight"></p>
      <div className="w-10 md:w-12 ml-3 mt-1 font-thin text-center">
        {/* divide-x-8 */}x
      </div>
    </div>
  );
};

export default Option;
