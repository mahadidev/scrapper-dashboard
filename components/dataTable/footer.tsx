import { Pagination } from "flowbite-react";
import React from "react";
import { Button } from "@/components";

const Footer = ({
  currentPage,
  totalPages,
  selectedItems,
  onDelete,
  onChangePagination,
}: {
  currentPage: number;
  totalPages: number;
  selectedItems: any;
  onDelete: CallableFunction;
  onChangePagination: CallableFunction;
}) => {
  return (
    <>
      <div className="py-4">
        <Pagination
          className="w-max mx-auto text-center"
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(e) => {
            onChangePagination(e);
          }}
        />
      </div>
      <div className="flex justify-between">
        {selectedItems?.length > 0 && (
          <Button
            onClick={() => {
              onDelete();
            }}
          >
            Delete Selected Item
          </Button>
        )}
      </div>
    </>
  );
};

export default Footer;
