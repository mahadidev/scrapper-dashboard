"use client";

import { ListGroup, Sidebar } from "flowbite-react";
import React from "react";
import {
  HiChartPie,
  HiViewBoards,
  HiInbox,
  HiUser,
  HiShoppingBag,
  HiArrowSmRight,
  HiTable,
} from "react-icons/hi";
import { BiBuoy } from "react-icons/bi";

const SupportTimeline = () => {
  return (
    <>
      <section className="py-5">
        <div className="container">
          <div className="flex gap-8 items-start">
            <ListGroup className="w-full max-w-xs">
              <ListGroup.Item>Introduction</ListGroup.Item>
              <ListGroup.Item>Scrape emails & phones</ListGroup.Item>
              <ListGroup.Item>Export data</ListGroup.Item>
              <ListGroup.Item>Membership</ListGroup.Item>
            </ListGroup>
            <div className="w-full py-4 bg-white rounded-md shadow-box"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SupportTimeline;
