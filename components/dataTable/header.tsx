import React from "react";
import Sort from "./sort";
import Search from "./search";
import Export from "./export";
import { TableSortItemType } from "@/types";

const Header = ({
  sortItems,
  sortBy,
  onChangeSort,
  searchText,
  setSearchText,
  onSearch,
  exportItems,
}: {
  sortItems: any;
  sortBy: TableSortItemType | null;
  onChangeSort: CallableFunction;
  searchText: any;
  setSearchText: any;
  onSearch: CallableFunction;
  exportItems: any;
}) => {
  return (
    <>
      <div className="flex gap-6 justify-between pb-4">
        <Sort
          sortItems={sortItems}
          sortBy={sortBy}
          onChangeSort={(sort: TableSortItemType) => {
            onChangeSort(sort);
          }}
        />
        <Search
          searchText={searchText}
          setSearchText={setSearchText}
          onSearch={onSearch}
        />
        <Export exportItems={exportItems} />
      </div>
    </>
  );
};

export default Header;
