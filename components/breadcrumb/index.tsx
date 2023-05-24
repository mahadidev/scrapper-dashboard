"use client";

import React from "react";
import { Breadcrumb as FTBreadcrumb } from "flowbite-react";
import { HiChevronRight } from "react-icons/hi";
import Link from "next/link";

interface ItemType {
  label: string;
  icon?: any;
  slug: string;
}

const Breadcrumb = ({ items }: { items: ItemType[] }) => {
  return (
    <div className="bg-white border-b px-4">
      <FTBreadcrumb
        aria-label="Solid background breadcrumb example"
        className="bg-transparent py-3 px-5"
      >
        {items.map((item: ItemType, index: number) => (
          <li className={`group flex items-center`} key={index}>
            {item.icon ? (
              <span className="block mx-1 text-xl text-gray-700 md:mx-2">
                {item.icon}
              </span>
            ) : (
              <span className="block mx-1 text-xl text-gray-700 group-first:hidden md:mx-2">
                <HiChevronRight />
              </span>
            )}
            <Link
              className={`flex items-center text-sm font-medium group-last:text-gray-500 ${
                item.icon
                  ? "text-gray-700 hover:text-blue-600"
                  : "text-gray-700 hover:text-blue-600"
              }`}
              data-testid="flowbite-breadcrumb-item"
              href={item.slug}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </FTBreadcrumb>
    </div>
  );
};

export default Breadcrumb;
