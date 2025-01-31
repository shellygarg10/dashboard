import React from "react";
import StatCards from "./StatCards";
import ActivityGraph from "./ActivityGraph";
import UsageRadar from "./UsageRadar";
import RecentTransactions from "./RecentTransactions";

const Grid = () => {
  return (
    <div className="px-4 grid grid-cols-1 sm:grid-cols-12 gap-3">
      <StatCards />
      <ActivityGraph />
      <UsageRadar />
      <RecentTransactions/>
    </div>
  );
};

export default Grid;
