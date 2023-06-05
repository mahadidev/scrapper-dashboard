import React from "react";
import { Table as FBTable, Checkbox } from "flowbite-react";
import { TableColumnType } from "@/types";

const Table = ({
  columns,
  tableItems,
  setSelectedItems,
  selectedItems,
}: {
  columns: TableColumnType[];
  tableItems: any | null;
  setSelectedItems: any;
  selectedItems: any;
}) => {
  return (
    <>
      <FBTable hoverable={true}>
        <FBTable.Head>
          <FBTable.HeadCell className="!p-4">
            <Checkbox
              onChange={(e: any) => {
                if (e.target.checked) {
                  if (tableItems) {
                    setSelectedItems(tableItems);
                  }
                } else {
                  setSelectedItems([]);
                }
              }}
            />
          </FBTable.HeadCell>
          {columns.map((column: TableColumnType, index: number) => (
            <FBTable.HeadCell key={index}>{column.label}</FBTable.HeadCell>
          ))}
          <FBTable.HeadCell>
            <span className="sr-only">Edit</span>
          </FBTable.HeadCell>
        </FBTable.Head>
        <FBTable.Body className="divide-y">
          {tableItems ? (
            tableItems.map((item: any, index: number) => (
              <FBTable.Row
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
                key={index}
              >
                <FBTable.Cell className="!p-4">
                  <Checkbox
                    onClick={() => {
                      const findItem = selectedItems.find(
                        (selectedItem: any) => selectedItem === item
                      );
                      const filterItem = selectedItems.filter(
                        (selectedItem: any) => selectedItem !== item
                      );

                      if (findItem) {
                        setSelectedItems([...filterItem]);
                      } else {
                        setSelectedItems((prevEmails: any) => [
                          ...prevEmails,
                          item,
                        ]);
                      }
                    }}
                    checked={selectedItems?.includes(item)}
                  />
                </FBTable.Cell>
                {columns.map((column: TableColumnType, columnIndex: number) => (
                  <FBTable.Cell key={columnIndex}>
                    {item[column.value]}
                  </FBTable.Cell>
                ))}
                <FBTable.Cell>
                  <a
                    href="/tables"
                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                  >
                    Edit
                  </a>
                </FBTable.Cell>
              </FBTable.Row>
            ))
          ) : (
            <>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item: number) => (
                <FBTable.Row key={item}>
                  <FBTable.Cell colSpan={columns.length + 2}>
                    <div className="animate-pulse">
                      <div className="w-full h-4 bg-gray-200 rounded"></div>
                    </div>
                  </FBTable.Cell>
                </FBTable.Row>
              ))}
            </>
          )}
        </FBTable.Body>
      </FBTable>
    </>
  );
};

export default Table;
