"use client";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import React, { useEffect, useRef } from "react";
import { LanSwitch } from "@/components";
import Link from "next/link";
import { useStateContext } from "@/context";

const Navigation = () => {
  // content
  const { setNavbarHeight } = useStateContext();

  // ref
  const navRef = useRef<any>(null);

  // use effect
  useEffect(() => {
    if (navRef.current) {
      const navHeight = navRef.current.clientHeight;
      setNavbarHeight(navHeight);
      console.log(navHeight);
    }
  });

  return (
    <header
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-30 bg-white shadow-box transition-all`}
    >
      <Navbar fluid={true} rounded={true}>
        <Navbar.Brand href="/dashboard">
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
          <LanSwitch className="hidden sm:block" />
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
            <li>
              <Link
                href="/dashboard/profile"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 "
              >
                Profile
              </Link>
            </li>
            <Dropdown.Item>Membership</Dropdown.Item>
            <Dropdown.Item>Support</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
        </div>
      </Navbar>
    </header>
  );
};

export default Navigation;
