"use client";

import { ListGroup, Sidebar } from "flowbite-react";
import React, { useState } from "react";
import { BiBuoy } from "react-icons/bi";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";
import { Player } from "video-react";
import "node_modules/video-react/dist/video-react.css";
import { TextInput, Textarea, Button, SelectInput } from "@/components";

const Introduction = () => {
  return (
    <>
      <h2 className="text-2xl text-gray-800">Introduction</h2>
      <div className="py-2">
        <hr />
      </div>
      <p className="text-gray-600">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      <div className="w-full rounded-md overflow-hidden bg-white shadow-box my-6">
        <Player
          playsInline
          poster="https://i.ytimg.com/vi/vrgR47YKsjc/maxresdefault.jpg"
          src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
        />
      </div>

      <h2 className="text-2xl text-gray-800">Scrapper</h2>
      <div className="py-2">
        <hr />
      </div>
      <p className="text-gray-600">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      <h2 className="text-2xl text-gray-800 mt-8">Need more support?</h2>

      <p className="text-gray-600">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
        <a href="#" className="ml-1 underline text-blue-600">
          Contact US
        </a>
      </p>
    </>
  );
};
const ScrapeEmailPhone = () => {
  return (
    <>
      <h2 className="text-2xl text-gray-800">How to Scrape Email & Phone</h2>
      <div className="py-2">
        <hr />
      </div>
      <p className="text-gray-600">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <div className="py-6">
        <div className="grid lg:grid-cols-2 gap-5">
          <div className="w-full rounded-md overflow-hidden bg-white shadow-box my-6">
            <Player
              playsInline
              poster="https://i.ytimg.com/vi/vrgR47YKsjc/maxresdefault.jpg"
              src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
            />
          </div>
          <div className="w-full rounded-md overflow-hidden bg-white shadow-box my-6">
            <Player
              playsInline
              poster="https://i.ytimg.com/vi/vrgR47YKsjc/maxresdefault.jpg"
              src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
            />
          </div>
        </div>
      </div>
    </>
  );
};
const ExportData = () => {
  return (
    <>
      <h2 className="text-2xl text-gray-800">How to Export Data</h2>
      <div className="py-2">
        <hr />
      </div>
      <p className="text-gray-600">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </>
  );
};
const Membership = () => {
  return (
    <>
      {" "}
      <h2 className="text-2xl text-gray-800">How membership works?</h2>
      <div className="py-2">
        <hr />
      </div>
      <p className="text-gray-600">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </>
  );
};
const ContactTab = () => {
  return (
    <>
      <h2 className="text-2xl text-gray-800">
        Help us to improve. Report your need and give a feedback.
      </h2>
      <div className="py-2">
        <hr />
      </div>
      <p className="text-gray-600">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <form className="mt-4 border p-3 rounded-md bg-white shadow-md">
        <SelectInput label="Subject">
          <option>Repport a bug</option>
          <option>Request new feature</option>
          <option>Others</option>
        </SelectInput>
        <Textarea label="Your message:" value="" />
        <Button className="!w-full mt-2">Submit</Button>
      </form>
    </>
  );
};
const TutorialTimeline = () => {
  const [selectedTab, setSelectedTab] = useState<string>("intro");

  return (
    <>
      <section className="min-h-screen py-12 bg-white">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <ListGroup className="w-full max-w-xs">
              <ListGroup.Item
                onClick={() => {
                  setSelectedTab("intro");
                }}
              >
                Introduction
              </ListGroup.Item>
              <ListGroup.Item
                onClick={() => {
                  setSelectedTab("scrapeEmailPhone");
                }}
              >
                Scrape emails & phones
              </ListGroup.Item>
              <ListGroup.Item
                onClick={() => {
                  setSelectedTab("exportData");
                }}
              >
                Export data
              </ListGroup.Item>
              <ListGroup.Item
                onClick={() => {
                  setSelectedTab("membership");
                }}
              >
                Membership
              </ListGroup.Item>
              <ListGroup.Item
                onClick={() => {
                  setSelectedTab("contact");
                }}
              >
                Contact US
              </ListGroup.Item>
            </ListGroup>
            <div className="w-full px-4 bg-white rounded-md shadow-box">
              {selectedTab === "intro" && <Introduction />}
              {selectedTab === "scrapeEmailPhone" && <ScrapeEmailPhone />}
              {selectedTab === "exportData" && <ExportData />}
              {selectedTab === "membership" && <Membership />}
              {selectedTab === "contact" && <ContactTab />}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TutorialTimeline;
