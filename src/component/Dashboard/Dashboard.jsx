import React from "react";
import TopBar from "./TopBar";
import Grid from "./Grid";

const Dashboard = () => {
  return (
    <div className="bg-white pb-4 rounded-lg shadow flex-1 transition-all duration-300 ease-in-out ml-[50px] sm:ml-[60px] md:m-[10px]">
      <TopBar />
      <Grid />
    </div>
  );
};

export default Dashboard;
