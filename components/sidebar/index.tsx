"use client";
import React, { useEffect, useRef, useState } from "react";
import { Sidebar as FTSidebar } from "flowbite-react";
import { MdDashboardCustomize } from "react-icons/md";
import {
  AiOutlineArrowDown,
  AiOutlineClose,
  AiOutlineDown,
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineTool,
  AiOutlineDashboard,
} from "react-icons/ai";
import { useStateContext } from "@/context";
import { GrFormDown, GrFormUp, GrUserPolice } from "react-icons/gr";
import { BiDownArrow, BiMenuAltRight } from "react-icons/bi";
import { TbPhone } from "react-icons/tb";
import { HiOutlineMail } from "react-icons/hi";
import Link from "next/link";
import { IoMdHelp } from "react-icons/io";
import { MdOutlineCardMembership } from "react-icons/md";
import { FiTool } from "react-icons/fi";

interface MenuItemType {
  label: string;
  icon: any;
  slug: string;
  subItems?: MenuItemType[];
}

const MenuItem = ({ item }: { item: MenuItemType }) => {
  // state
  const [isCollapse, setCollapse] = useState<boolean>(false);
  // context
  const { isSidebarCollapse, setSidebarCollapse } = useStateContext();

  return (
    <li>
      {item.subItems ? (
        <>
          <button
            onClick={() => {
              setCollapse((prev) => !prev);
            }}
            className="w-full flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100"
          >
            <span className="text-xl sm:text-2xl text-gray-700">
              {item.icon}
            </span>
            {isSidebarCollapse && <span className="ml-3">{item.label}</span>}

            {isSidebarCollapse && (
              <span className="text-xl text-gray-700 ml-auto">
                {isCollapse ? <GrFormDown /> : <GrFormUp />}
              </span>
            )}
          </button>
        </>
      ) : (
        <>
          <Link
            href={`${item.slug}`}
            className="w-full flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100"
          >
            <span className="text-xl sm:text-2xl text-gray-700">
              {item.icon}
            </span>
            {isSidebarCollapse && <span className="ml-3">{item.label}</span>}
          </Link>
        </>
      )}
      {item.subItems && (
        <ul
          id="dropdown-example"
          className={`${isCollapse ? "block" : "hidden"} py-2 space-y-2`}
        >
          {item.subItems?.map((subItem: MenuItemType, subItemIndex: number) => (
            <li key={subItemIndex}>
              <Link
                href={`${subItem.slug}`}
                className={`w-full flex items-center p-2 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 ${
                  isSidebarCollapse ? "pl-11" : ""
                }`}
              >
                <span className="text-xl sm:text-2xl text-gray-700">
                  {subItem.icon}
                </span>

                {isSidebarCollapse && (
                  <span className="ml-3">{subItem.label}</span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

const Sidebar = () => {
  // state
  const [items, setItems] = useState<MenuItemType[]>([
    {
      label: "Dashboard",
      icon: <AiOutlineDashboard />,
      slug: "/dashboard",
    },
    {
      label: "Scrapper",
      icon: <FiTool />,
      slug: "/dashboard/scrappers",
      subItems: [
        {
          label: "Email",
          icon: <HiOutlineMail />,
          slug: "/dashboard/scrappers/email",
        },
        {
          label: "Phone",
          icon: <TbPhone />,
          slug: "/dashboard/scrappers/phone",
        },
      ],
    },
    {
      label: "Membership",
      icon: <MdOutlineCardMembership />,
      slug: "/dashboard/membership",
    },
    {
      label: "Tutorials",
      icon: <IoMdHelp />,
      slug: "/dashboard/tutorials",
    },
  ]);

  // context
  const { isSidebarCollapse, setSidebarCollapse, setSidebarWidth } =
    useStateContext();

  // ref
  const sidebarRef = useRef<any>(null);

  // useEffect
  useEffect(() => {
    if (sidebarRef.current) {
      const sidebarWidth = sidebarRef.current.clientWidth;
      setSidebarWidth(sidebarWidth);
    }
  });

  return (
    <>
      <aside
        className={`h-full ${
          isSidebarCollapse ? "w-64" : "w-max"
        } px-2 border-r`}
        aria-label="Sidebar with multi-level dropdown example"
        ref={sidebarRef}
      >
        <FTSidebar.Items>
          <FTSidebar.ItemGroup>
            <li className="flex items-center justify-between gap-2 mt-2 w-full text-gray-900">
              {isSidebarCollapse && (
                <span className="text-lg font-semibold ml-2">Sidebar</span>
              )}
              <button
                onClick={() => setSidebarCollapse((prev) => !prev)}
                className="flex items-center p-2 text-gray-700 rounded-lg hover:bg-gray-100 text-xl sm:text-2xl"
              >
                {isSidebarCollapse ? <AiOutlineClose /> : <BiMenuAltRight />}
              </button>
            </li>
            {items.map((item: MenuItemType, index: number) => (
              <MenuItem item={item} key={index} />
            ))}
          </FTSidebar.ItemGroup>
        </FTSidebar.Items>
      </aside>
    </>
  );
};

export default Sidebar;
