"use client";
import { useState } from "react";
import { ListGroup } from "flowbite-react";
import Personal from "./tabs/personal";

const ProfileTabs = () => {
  const [selectedTab, setSelectedTab] = useState<string>("personal");

  return (
    <>
      <section className="min-h-screen py-12 bg-white">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <ListGroup className="w-full max-w-xs hidden">
              <ListGroup.Item
                onClick={() => {
                  setSelectedTab("personal");
                }}
              >
                Personal Details
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
            </ListGroup>
            <div className="w-full px-2 sm:px-4 rounded-md">
              {selectedTab === "personal" && <Personal />}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProfileTabs;
