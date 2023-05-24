import React from "react";
import ChangePassword from "./changePassword";
import Details from "./details";
import EditDetails from "./editDetails";

const Personal = () => {
  return (
    <div className="grid grid-cols-3 gap-8">
      <div className="w-full h-max rounded-md shadow p-3">
        <Details />
      </div>
      <div className="col-span-2 flex flex-col gap-8">
        <div className="w-full h-max rounded-md shadow p-3">
          <EditDetails />
        </div>
        <div className="w-full h-max rounded-md shadow p-3">
          <ChangePassword />
        </div>
      </div>
    </div>
  );
};

export default Personal;
