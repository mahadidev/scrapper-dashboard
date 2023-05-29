"use client";

import React, { useState } from "react";
import { Checkbox, Dropdown, Pagination, Table } from "flowbite-react";
import { CSVLink, CSVDownload } from "react-csv";
import { Button } from "@/components";
import { Dialog } from "@headlessui/react";
import { useStateContext } from "@/context";
import FileUploader from "./fileUploader";

interface EmailType {
  id: number;
  email: string;
  company: string;
}

interface SortType {
  label: string;
  id: number;
}

const EmailsTable = () => {
  // state
  const [emails, setEmails] = useState<EmailType[] | null>([
    {
      id: 1,
      email: "test@example.com",
      company: "msoftex.com",
    },
    {
      id: 2,
      email: "test@example.com",
      company: "msoftex.com",
    },
    {
      id: 3,
      email: "test@example.com",
      company: "msoftex.com",
    },
    {
      id: 3,
      email: "test@example.com",
      company: "msoftex.com",
    },
    {
      id: 3,
      email: "test@example.com",
      company: "msoftex.com",
    },
    {
      id: 3,
      email: "test@example.com",
      company: "msoftex.com",
    },
    {
      id: 3,
      email: "test@example.com",
      company: "msoftex.com",
    },
    {
      id: 3,
      email: "test@example.com",
      company: "msoftex.com",
    },
    {
      id: 3,
      email: "test@example.com",
      company: "msoftex.com",
    },
    {
      id: 3,
      email: "test@example.com",
      company: "msoftex.com",
    },
  ]);
  const [selectedEmails, setSelectedEmails] = useState<EmailType[]>([]);
  const [sortItems, setSortItems] = useState<SortType[]>([
    {
      id: 1,
      label: "ID",
    },
    {
      id: 2,
      label: "Email",
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
  const [isShownEmailModal, setEmailModal] = useState<boolean>(false);

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
                    <Table.HeadCell>Company</Table.HeadCell>
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
                          <Table.Cell>{item.email}</Table.Cell>
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
