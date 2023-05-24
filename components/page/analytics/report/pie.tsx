"use client";
import React from "react";
import dynamic from "next/dynamic";
const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });

const Pie = () => {
  return (
    <div>
      <ApexCharts
        series={[44, 55, 13, 43, 22]}
        options={{
          labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
          responsive: [
            {
              breakpoint: 480,
              options: {
                chart: {
                  width: 200,
                },
                legend: {
                  position: "bottom",
                },
              },
            },
          ],
        }}
        type="pie"
        height={"400px"}
      />
    </div>
  );
};

export default Pie;
