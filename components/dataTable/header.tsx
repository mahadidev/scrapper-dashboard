import React from "react";
import Sort from "./sort";
import Search from "./search";
import Export from "./export";

const Header = ({
  sortItems,
  sortBy,
  setSortBy,
  onChangeSort,
  searchText,
  setSearchText,
  onSearch,
  exportItems,
}: {
  sortItems: any;
  sortBy: any;
  setSortBy: any;
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
          setSortBy={setSortBy}
          onChangeSort={(e: any) => {
            console.log("Sort By", e);
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
