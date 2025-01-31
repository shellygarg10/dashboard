import React from "react";

const Plan = ({ collapsed }) => {
  return (
    <div className="flex flex-col h-12 border-t p-2 border-stone-300 justify-end text-xs bg-white">
      {!collapsed && (
        <div className="flex items-center justify-between">
          <div>
            <p className="font-bold">Premium</p>
            <p className="text-stone-500">Pay-as-you-go</p>
          </div>
          <button className="px-2 py-1.5 font-medium bg-stone-200 hover:bg-stone-300 transition-colors rounded">
            Support
          </button>
        </div>
      )}
    </div>
  );
};

export default Plan;