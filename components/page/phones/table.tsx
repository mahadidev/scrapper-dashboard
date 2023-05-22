"use client";

import React, { useState } from "react";
import { Checkbox, Dropdown, Pagination, Table } from "flowbite-react";
import { CSVLink } from "react-csv";
import { Button } from "@/components";
import FileUploader from "./fileUploader";

interface ItemType {
  id: number;
  phone: string;
  company: string;
}

interface SortType {
  label: string;
  id: number;
}

const PhonesTable = () => {
  // state
  const [items, setItems] = useState<ItemType[] | null>([
    {
      id: 1,
      phone: "+881408094722",
      company: "msoftex.com",
    },
    {
      id: 2,
      phone: "+881408094722",
      company: "msoftex.com",
    },
    {
      id: 3,
      phone: "+881408094722",
      company: "msoftex.com",
    },
    {
      id: 3,
      phone: "+881408094722",
      company: "msoftex.com",
    },
    {
      id: 3,
      phone: "+881408094722",
      company: "msoftex.com",
    },
    {
      id: 3,
      phone: "+881408094722",
      company: "msoftex.com",
    },
    {
      id: 3,
      phone: "+881408094722",
      company: "msoftex.com",
    },
    {
      id: 3,
      phone: "+881408094722",
      company: "msoftex.com",
    },
    {
      id: 3,
      phone: "+881408094722",
      company: "msoftex.com",
    },
    {
      id: 3,
      phone: "+881408094722",
      company: "msoftex.com",
    },
  ]);
  const [selectedItems, setSelectedItems] = useState<ItemType[]>([]);
  const [sortItems, setSortItems] = useState<SortType[]>([
    {
      id: 1,
      label: "ID",
    },
    {
      id: 2,
      label: "Phone",
    },
    {
      id: 3,
      label: "Company",
    },
  ]);
  const [sortSelected, setSortSelected] = useState<SortType>({
    id: 1,
    label: "ID",
  });

  return (
    <>
      <FileUploader />
      <section className="py-5">
        <div className="container">
          <div className="p-3 bg-white rounded-md shadow-box">
            <div className="overflow-x-auto">
              <div className="flex gap-6 justify-between pb-4">
                <div className="w-full flex gap-2 items-center">
                  <p className="text-sm text-gray-600 whitespace-nowrap">
                    Sort By:
                  </p>
                  <Dropdown
                    label={
                      <div
                        data-dropdown-toggle="language-dropdown-menu"
                        className="inline-flex items-center font-medium justify-center px-4 py-2 text-sm text-gray-900 rounded-lg cursor-pointer "
                      >
                        {sortSelected.label}
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
                          setSortSelected(item);
                        }}
                        key={index}
                      >
                        {item.label}
                      </Dropdown.Item>
                    ))}
                  </Dropdown>
                </div>
                <div className="flex gap-3 items-center">
                  {items && (
                    <CSVLink data={items}>
                      <Button>Export CSV</Button>
                    </CSVLink>
                  )}
                </div>
              </div>
              <div>
                <Table hoverable={true}>
                  <Table.Head>
                    <Table.HeadCell className="!p-4">
                      <Checkbox
                        onChange={(e) => {
                          if (e.target.checked) {
                            if (items) {
                              setSelectedItems(items);
                            }
                          } else {
                            setSelectedItems([]);
                          }
                        }}
                      />
                    </Table.HeadCell>
                    <Table.HeadCell>ID</Table.HeadCell>
                    <Table.HeadCell>Phone</Table.HeadCell>
                    <Table.HeadCell>Company</Table.HeadCell>
                    <Table.HeadCell>
                      <span className="sr-only">Edit</span>
                    </Table.HeadCell>
                  </Table.Head>
                  <Table.Body className="divide-y">
                    {items &&
                      items.map((item: ItemType, index: number) => (
                        <Table.Row
                          className="bg-white dark:border-gray-700 dark:bg-gray-800"
                          key={index}
                        >
                          <Table.Cell className="!p-4">
                            <Checkbox
                              onClick={() => {
                                const findItem = selectedItems.find(
                                  (selectedItem) => selectedItem === item
                                );
                                const filterItem = selectedItems.filter(
                                  (selectedItem) => selectedItem !== item
                                );

                                if (findItem) {
                                  setSelectedItems([...filterItem]);
                                } else {
                                  setSelectedItems((prevItems: ItemType[]) => [
                                    ...prevItems,
                                    item,
                                  ]);
                                }
                              }}
                              checked={selectedItems.includes(item)}
                            />
                          </Table.Cell>
                          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            {item.id}
                          </Table.Cell>
                          <Table.Cell>{item.phone}</Table.Cell>
                          <Table.Cell>{item.company}</Table.Cell>
                          <Table.Cell>
                            <a
                              href="/tables"
                              className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                            >
                              Edit
                            </a>
                          </Table.Cell>
                        </Table.Row>
                      ))}
                  </Table.Body>
                </Table>
                <div className="py-4">
                  <Pagination
                    className="w-max mx-auto text-center"
                    currentPage={1}
                    totalPages={100}
                    onPageChange={(e) => {
                      console.log(e);
                    }}
                  />
                </div>
                <div className="flex justify-between">
                  {selectedItems.length > 0 && (
                    <Button
                      onClick={() => {
                        console.log(selectedItems);
                      }}
                    >
                      {selectedItems.length} Delete Selected Item
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PhonesTable;
