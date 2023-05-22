"use client";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import React from "react";
import { LanSwitch } from "@/components";

const Navigation = () => {
  return (
    <Navbar
      fluid={false}
      rounded={true}
      className={`relative top-0 left-0 right-0 z-30 bg-white shadow-box transition-all`}
    >
      <Navbar.Brand href="https://flowbite.com/">
        <img
          className="w-8 h-8 mr-2"
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
          alt="logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          MDEVI
        </span>
      </Navbar.Brand>
      <div className="flex gap-4 md:order-2 items-center">
        <LanSwitch />
        <Dropdown
          arrowIcon={false}
          inline={true}
          label={
            <Avatar
              alt="User settings"
              img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              rounded={true}
            />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">
              name@flowbite.com
            </span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/dashboard">Analytics</Navbar.Link>
        <Navbar.Link href="/dashboard/email">Email</Navbar.Link>
        <Navbar.Link href="/dashboard/phone">Phone</Navbar.Link>
        <Navbar.Link href="/dashboard/support">Support</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
