import React from "react";
import { FiTrendingDown, FiTrendingUp } from "react-icons/fi";

const StatCards = () => {
  return (
    <>
      <Card
        title="Gross Revenue"
        value="$12,054.24"
        pillText="2.75%"
        trend="up"
        period="From Jan 1st - Jun 31st"
      />
      <Card
        title="Avg Order"
        value="$27.97"
        pillText="1.01%"
        trend="down"
        period="From Jan 1st - Jun 31st"
      />
      <Card
        title="Trailing Year"
        value="$27,054.24"
        pillText="60.75%"
        trend="up"
        period="Previous 365 days"
      />
    </>
  );
};

const Card = ({ title, value, pillText, trend, period }) => {
  return (
    <div className="p-4 rounded border border-stone-300 col-span-12 sm:col-span-12 lg:col-span-4">
      <div className="flex mb-8 items-start justify-between">
        <div>
          <h3 className="text-stone-500 mb-2 text-sm">{title}</h3>
          <p className="text-3xl font-semibold">{value}</p>
        </div>

        <span
          className={`text-xs flex items-center gap-1 font-medium px-2 py-1 rounded ${
            trend === "up"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {trend === "up" ? <FiTrendingUp /> : <FiTrendingDown />} {pillText}
        </span>
      </div>

      <p className="text-xs text-stone-500">{period}</p>
    </div>
  );
};

export default StatCards;
