"use client";
import React from "react";
import ApexChart from "./report/apex";
import Pie from "./report/pie";

const Charts = () => {
  return (
    <section className="py-10">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div className="w-full bg-white rounded-md shadow-box">
            <ApexChart />
          </div>
          <div className="w-full bg-white rounded-md shadow-box">
            <Pie />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Charts;
