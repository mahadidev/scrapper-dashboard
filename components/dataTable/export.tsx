import React from "react";
import { CSVLink } from "react-csv";
import { Button } from "@/components";

const Export = ({ exportItems }: { exportItems: any }) => {
  return (
    <>
      <div className="flex gap-3 items-center">
        {exportItems && (
          <CSVLink data={exportItems}>
            <Button className="!bg-gray-200 !text-gray-700 hover:!bg-gray-300 !outline-none !ring-0 !border-0">
              Export CSV
            </Button>
          </CSVLink>
        )}
      </div>
    </>
  );
};

export default Export;
