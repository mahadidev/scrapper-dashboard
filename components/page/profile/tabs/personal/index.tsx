import React from "react";
import ChangePassword from "./changePassword";
import Details from "./details";
import EditDetails from "./editDetails";

const Personal = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div className="w-full h-max rounded-md p-3 bg-gray-100">
        <Details />
      </div>
      <div className="md:col-span-2 flex flex-col gap-8">
        <div className="w-full h-max rounded-md p-3 bg-gray-100">
          <EditDetails />
        </div>
        <div className="w-full h-max rounded-md p-3 bg-gray-100">
          <ChangePassword />
        </div>
      </div>
    </div>
  );
};

export default Personal;
