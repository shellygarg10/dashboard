import React from "react";
import {
  FiDollarSign,
  FiHome,
  FiLink,
  FiPaperclip,
  FiUsers,
} from "react-icons/fi";

const RouteSelect = ({ collapsed }) => {
  return (
    <div className="space-y-1">
      <Route Icon={FiHome} selected={true} title="Dashboard" collapsed={collapsed} />
      <Route Icon={FiUsers} selected={false} title="Team" collapsed={collapsed} />
      <Route Icon={FiPaperclip} selected={false} title="Invoices" collapsed={collapsed} />
      <Route Icon={FiLink} selected={false} title="Integrations" collapsed={collapsed} />
      <Route Icon={FiDollarSign} selected={false} title="Finance" collapsed={collapsed} />
    </div>
  );
};

const Route = ({ selected, Icon, title, collapsed }) => {
  return (
    <button
      className={`flex items-center justify-start gap-2 w-full rounded px-2 py-1.5 text-sm transition-[box-shadow,_background-color,_color] ${
        selected
          ? "bg-white text-stone-950 shadow"
          : "hover:bg-stone-200 bg-transparent text-stone-500 shadow-none"
      }`}
    >
      <Icon className={selected ? "text-violet-500" : ""} />
      {!collapsed && <span>{title}</span>}
    </button>
  );
};

export default RouteSelect;