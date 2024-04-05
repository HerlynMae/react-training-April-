import React from "react";

const Header = ({avatar}) => {
  return (
    <header className="p-2 flex justify-between border-b border-gray-200">
      <a href="#">Logo</a>
      {/* for avatar */}
      <div className="h-[30px] w-[30px] bg-red-300 rounded-full grid place-content-center">
        {avatar}
      </div>
    </header>
  );
};

export default Header;
