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
} from "react-icons/ai";
import { useStateContext } from "@/context";
import { GrFormDown, GrFormUp, GrUserPolice } from "react-icons/gr";
import { BiDownArrow, BiMenuAltRight } from "react-icons/bi";
import { HiShoppingBag } from "react-icons/hi";
import { Interface } from "readline";
import Link from "next/link";
import { SiAirplayvideo } from "react-icons/si";

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
              setSidebarCollapse(true);
            }}
            className="w-full flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100"
          >
            <span className="text-xl text-gray-700">{item.icon}</span>
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
            <span className="text-xl text-gray-700">{item.icon}</span>
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
                className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100"
              >
                {subItem.label}
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
      icon: <MdDashboardCustomize />,
      slug: "/dashboard",
    },
    {
      label: "Scrapper",
      icon: <AiOutlineTool />,
      slug: "/dashboard/scrappers",
      subItems: [
        {
          label: "Email",
          icon: <AiOutlineMail />,
          slug: "/dashboard/scrappers/email",
        },
        {
          label: "Phone",
          icon: <AiOutlinePhone />,
          slug: "/dashboard/scrappers/phone",
        },
      ],
    },
    {
      label: "Membership",
      icon: <GrUserPolice />,
      slug: "/dashboard",
    },
    {
      label: "Tutorials",
      icon: <SiAirplayvideo />,
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
        className={`h-full ${isSidebarCollapse ? "w-64" : "w-max"} px-2`}
        aria-label="Sidebar with multi-level dropdown example"
        ref={sidebarRef}
      >
        <FTSidebar.Items>
          <FTSidebar.ItemGroup>
            <li className="flex justify-end">
              <button
                onClick={() => setSidebarCollapse((prev) => !prev)}
                className="flex items-center p-2 text-gray-700 rounded-lg hover:bg-gray-100 text-xl"
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
