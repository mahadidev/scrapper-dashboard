import { DataTable } from "@/components";
import React from "react";

const EmailsInterface = () => {
  return (
    <>
      <DataTable
        columns={[
          {
            label: "ID",
            value: "id",
          },
          {
            label: "Email",
            value: "value",
          },
          {
            label: "URL",
            value: "url",
          },
          {
            label: "Created",
            value: "created_at",
          },
        ]}
        searchKey="url"
        apiPath="/scrapped-data/fetch/email"
        exportApiPath="/scrapped-data/email"
      />
    </>
  );
};

export default EmailsInterface;
