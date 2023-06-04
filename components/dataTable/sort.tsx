import { Dropdown } from "flowbite-react";
import React from "react";

const Sort = ({
  sortItems,
  sortBy,
  setSortBy,
  onChangeSort,
}: {
  sortItems: any;
  sortBy: any;
  setSortBy: any;
  onChangeSort: CallableFunction;
}) => {
  return (
    <>
      <div className="w-full flex gap-2 items-center">
        <p className="text-sm text-gray-600 whitespace-nowrap">Sort By:</p>
        <Dropdown
          label={
            <div
              data-dropdown-toggle="language-dropdown-menu"
              className="inline-flex items-center font-medium justify-center px-4 py-2 text-sm text-gray-900 rounded-lg cursor-pointer "
            >
              {sortBy?.label} ({sortBy?.dir})
            </div>
          }
          onChange={(e) => {
            console.log(e);
          }}
          arrowIcon={true}
          inline={true}
        >
          {sortItems?.map((item: any, index: number) => (
            <Dropdown.Item
              onClick={() => {
                setSortBy(item);
              }}
              key={index}
            >
              {item.label} {item.dir}
            </Dropdown.Item>
          ))}
        </Dropdown>
      </div>
    </>
  );
};

export default Sort;
