"use client";
import { useStateContext } from "@/context";
import { Dropdown, Pagination } from "flowbite-react";
import React, { useState, useEffect } from "react";
import { CSVLink } from "react-csv";
import { Button } from "@/components";
import Table from "./table";
import Footer from "./footer";
import Header from "./header";
import { Api } from "@/library";
import { ApiResponseType, TableColumnType, TableSortItemType } from "@/types";

const DataTable = ({
  columns,
  searchKey,
  apiPath,
  exportApiPath,
}: {
  columns: TableColumnType[];
  searchKey: string;
  apiPath: string;
  exportApiPath: string;
}) => {
  // context
  const { authUser } = useStateContext();
  // state
  const [tableItems, setTableItems] = useState<TableColumnType[] | null>(null);
  const [exportItems, setExportItems] = useState<TableColumnType[] | null>(
    null
  );
  const [selectedItems, setSelectedItems] = useState<
    TableColumnType[] | null | null
  >(null);
  const [sortItems, setSortItems] = useState<TableSortItemType[]>([]);
  const [sortBy, setSortBy] = useState<TableSortItemType>();
  const [searchText, setSearchText] = useState<any | null>(null);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(0);

  // fetch data from api
  const fetchData = ({
    page,
    sort,
    sortDir,
    query,
  }: {
    page?: number;
    sort?: string;
    sortDir?: string;
    query?: string;
  }) => {
    Api({
      path: `${apiPath}?page=${page ? page : currentPage}&${
        query ? query : `${searchKey ? searchKey : "id"}=${searchText}`
      }&orderBy=${sort ? sort : sortBy?.value ? sortBy.value : "id"}&orderDir=${
        sortDir ? sortDir : sortBy?.dir ? sortBy.dir : "asc"
      }`,
      token: authUser?.token,
      onSuccess: (response: ApiResponseType) => {
        if (response.data) {
          setTableItems(response.data);
        }
        if (response.meta) {
          setTotalPages(response.meta?.last_page ? response.meta.last_page : 0);
        }
        if (response.meta) {
          setCurrentPage(
            response.meta?.current_page ? response.meta.current_page : 0
          );
        }
      },
    });
  };

  // set export data
  const fetchExportData = () => {
    Api({
      path: `${exportApiPath}`,
      token: authUser?.token,
      onSuccess: (response: ApiResponseType) => {
        if (response.data) {
          setExportItems(response.data);
        }
      },
    });
  };

  const onChangeSort = () => {};

  useEffect(() => {
    // set sort items
    setSortItems([]);
    columns.map((column: TableColumnType, index: number) => {
      setSortItems((prevItems: TableSortItemType[]) => [
        ...prevItems,
        {
          ...column,
          dir: "asc",
        },
        {
          ...column,
          dir: "desc",
        },
      ]);
    });
    // set default sort items
    setSortBy({
      ...columns[0],
      dir: "asc",
    });

    fetchData({});
    fetchExportData();
  }, []);
  return (
    <>
      <section className="py-5">
        <div className="container">
          <div className="p-3 bg-white rounded-md">
            <div className="overflow-x-auto">
              <Header
                sortItems={sortItems}
                sortBy={sortBy}
                setSortBy={setSortBy}
                onChangeSort={onChangeSort}
                searchText={searchText}
                setSearchText={setSearchText}
                onSearch={(text?: string) => {
                  fetchData({
                    query: `url=${text ? text : searchText}`,
                  });
                }}
                exportItems={selectedItems ? selectedItems : exportItems}
              />
              <Table
                columns={columns}
                tableItems={tableItems}
                selectedItems={selectedItems}
                setSelectedItems={setSelectedItems}
              />
              <Footer
                totalPages={totalPages}
                currentPage={currentPage}
                selectedItems={selectedItems}
                onDelete={() => {}}
                onChangePagination={(page: number) => {
                  fetchData({ page: page });
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DataTable;
