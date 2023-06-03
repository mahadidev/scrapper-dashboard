"use client";

import React, { useState, useEffect } from "react";
import { Checkbox, Dropdown, Pagination, Table } from "flowbite-react";
import { CSVLink, CSVDownload } from "react-csv";
import { Button } from "@/components";
import { Dialog } from "@headlessui/react";
import { useStateContext } from "@/context";
import FileUploader from "./fileUploader";
import { Api } from "@/library";
import { ApiResponseType } from "@/types";
import { errorToJSON } from "next/dist/server/render";

interface EmailType {
  id: number;
  value: string;
  url: string;
}

interface SortType {
  label: string;
  id: number;
  value: string;
  dir: string;
}

const EmailsTable = () => {
  // context
  const { authUser } = useStateContext();
  // state
  const [emails, setEmails] = useState<EmailType[] | null>(null);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [selectedEmails, setSelectedEmails] = useState<EmailType[]>([]);
  const [sortItems, setSortItems] = useState<SortType[]>([
    {
      id: 1,
      label: "ID",
      value: "id",
      dir: "asc",
    },
    {
      id: 2,
      label: "ID",
      value: "id",
      dir: "desc",
    },
    {
      id: 3,
      label: "Email",
      value: "value",
      dir: "asc",
    },
    {
      id: 4,
      label: "Email",
      value: "value",
      dir: "desc",
    },
    {
      id: 5,
      label: "Company",
      value: "url",
      dir: "asc",
    },
    {
      id: 6,
      label: "Company",
      value: "url",
      dir: "desc",
    },
  ]);
  const [sortSelected, setSortSelected] = useState<SortType>({
    id: 1,
    label: "ID",
    value: "id",
    dir: "asc",
  });
  const [isShownEmailModal, setEmailModal] = useState<boolean>(false);

  const fetchRow = ({
    page,
    sortBy,
    sortDir,
    query,
  }: {
    page?: number;
    sortBy?: string;
    sortDir?: string;
    query?: string;
  }) => {
    Api({
      path: `/scrapped-data?page=${
        page ? page : currentPage
      }&${query}&orderBy=${sortBy ? sortBy : sortSelected.value}&orderDir=${
        sortDir ? sortDir : sortSelected.dir
      }`,
      token: authUser?.token,
      onSuccess: (response: ApiResponseType) => {
        if (response.data) {
          setEmails(response.data);
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

  useEffect(() => {
    fetchRow({});
  }, []);

  return (
    <>
      <FileUploader />
      <section className="py-5">
        <div className="container">
          <div className="p-3 bg-white rounded-md">
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
                        {sortSelected.label} ({sortSelected.dir})
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
                          fetchRow({
                            sortBy: item.value,
                            sortDir: item.dir,
                          });
                        }}
                        key={index}
                      >
                        {item.label} {item.dir}
                      </Dropdown.Item>
                    ))}
                  </Dropdown>
                </div>
                <div className="flex gap-3 items-center">
                  {emails && (
                    <CSVLink data={emails}>
                      <Button className="!bg-gray-200 !text-gray-700 hover:!bg-gray-300 !outline-none !ring-0 !border-0">
                        Export CSV
                      </Button>
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
                            if (emails) {
                              setSelectedEmails(emails);
                            }
                          } else {
                            setSelectedEmails([]);
                          }
                        }}
                      />
                    </Table.HeadCell>
                    <Table.HeadCell>ID</Table.HeadCell>
                    <Table.HeadCell>Email</Table.HeadCell>
                    <Table.HeadCell>URL</Table.HeadCell>
                    <Table.HeadCell>
                      <span className="sr-only">Edit</span>
                    </Table.HeadCell>
                  </Table.Head>
                  <Table.Body className="divide-y">
                    {emails &&
                      emails.map((item: EmailType, index: number) => (
                        <Table.Row
                          className="bg-white dark:border-gray-700 dark:bg-gray-800"
                          key={index}
                        >
                          <Table.Cell className="!p-4">
                            <Checkbox
                              onClick={() => {
                                const findEmail = selectedEmails.find(
                                  (email) => email === item
                                );
                                const filterEmail = selectedEmails.filter(
                                  (email) => email !== item
                                );

                                if (findEmail) {
                                  setSelectedEmails([...filterEmail]);
                                } else {
                                  setSelectedEmails(
                                    (prevEmails: EmailType[]) => [
                                      ...prevEmails,
                                      item,
                                    ]
                                  );
                                }
                              }}
                              checked={selectedEmails.includes(item)}
                            />
                          </Table.Cell>
                          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            {item.id}
                          </Table.Cell>
                          <Table.Cell>{item.value}</Table.Cell>
                          <Table.Cell>{item.url}</Table.Cell>
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
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={(e) => {
                      fetchRow({ page: e });
                    }}
                  />
                </div>
                <div className="flex justify-between">
                  {selectedEmails.length > 0 && (
                    <Button
                      onClick={() => {
                        console.log(selectedEmails);
                      }}
                    >
                      Delete Selected Item
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

export default EmailsTable;
