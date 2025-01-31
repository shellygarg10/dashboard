import React from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
const AccountToggle = ({ collapsed }) => {
  return (
    <div className="border-b mb-4 pb-4 border-stone-300">
      <button className="flex p-0.5 hover:bg-stone-200 rounded transition-colors relative gap-2 w-full items-cente">
        <img
          src="https://api.dicebear.com/9.x/notionists/svg"
          alt="avatar"
          className="size-8 rounded shrink-0 bg-violet-500 shadow"
        />
        {!collapsed && (
          <div className="text-start">
            <span className="text-sm font-bold block">Shelly Garg</span>
            <span className="text-xs block text-stone-500">xyz@gmail.dev</span>
          </div>
        )}
        {!collapsed && (
          <>
            <FiChevronDown className="absolute right-2 top-1/2 translate-y-[calc(-50%+4px)] text-xs" />
            <FiChevronUp className="absolute right-2 top-1/2 translate-y-[calc(-50%-4px)] text-xs" />
          </>
        )}
      </button>
    </div>
  );
};

export default AccountToggle;
