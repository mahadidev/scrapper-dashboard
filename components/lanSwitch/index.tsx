"use client";
import { useStateContext } from "@/context";
import { LanType } from "@/types";
import { Dropdown } from "flowbite-react";
import React, { useState } from "react";

const LanSwitch = ({ className }: { className?: string }) => {
  const { selectedLan, selectLan } = useStateContext();
  const [lanList] = useState<{
    en: LanType;
    fr: LanType;
    bn: LanType;
  }>({
    en: {
      tag: "en",
      label: "English",
      icon: (
        <svg
          className="w-5 h-5 mr-2 rounded-full"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          xlinkHref="http://www.w3.org/1999/xlink"
          viewBox="0 0 3900 3900"
        >
          <path fill="#b22234" d="M0 0h7410v3900H0z" />
          <path
            d="M0 450h7410m0 600H0m0 600h7410m0 600H0m0 600h7410m0 600H0"
            stroke="#fff"
            strokeWidth="300"
          />
          <path fill="#3c3b6e" d="M0 0h2964v2100H0z" />
          <g fill="#fff">
            <g id="d">
              <g id="c">
                <g id="e">
                  <g id="b">
                    <path
                      id="a"
                      d="M247 90l70.534 217.082-184.66-134.164h228.253L176.466 307.082z"
                    />
                    <use xlinkHref="#a" y="420" />
                    <use xlinkHref="#a" y="840" />
                    <use xlinkHref="#a" y="1260" />
                  </g>
                  <use xlinkHref="#a" y="1680" />
                </g>
                <use xlinkHref="#b" x="247" y="210" />
              </g>
              <use xlinkHref="#c" x="494" />
            </g>
            <use xlinkHref="#d" x="988" />
            <use xlinkHref="#c" x="1976" />
            <use xlinkHref="#e" x="2470" />
          </g>
        </svg>
      ),
    },
    fr: {
      tag: "fr",
      label: "Français",
      icon: (
        <svg
          className="w-5 h-5 rounded-full mr-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          id="flag-icon-css-de"
          viewBox="0 0 512 512"
        >
          <path fill="#ffce00" d="M0 341.3h512V512H0z" />
          <path d="M0 0h512v170.7H0z" />
          <path fill="#d00" d="M0 170.7h512v170.6H0z" />
        </svg>
      ),
    },
    bn: {
      tag: "bn",
      label: "বাংলা",
      icon: (
        <svg
          className="w-5 h-5 rounded-full mr-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 12"
        >
          <path fill="#006a4e" d="M0 0h20v12H0z" />
          <circle cx="9" cy="6" r="4" fill="#f42a41" />
        </svg>
      ),
    },
  });

  return (
    <div className={`w-max ${className}`}>
      <Dropdown
        arrowIcon={false}
        inline={true}
        label={
          <div
            data-dropdown-toggle="language-dropdown-menu"
            className="inline-flex items-center font-medium justify-center px-4 py-2 text-sm text-gray-900 dark:text-white rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            {lanList[selectedLan.tag].icon}
            {lanList[selectedLan.tag].label}
          </div>
        }
        onChange={(e) => {
          console.log(e);
        }}
      >
        <Dropdown.Item onClick={() => selectLan(lanList.en)}>
          <div
            className="block px-4 py-0 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
            role="menuitem"
          >
            <div className="inline-flex items-center">
              {lanList.en.icon}
              {lanList.en.label}
            </div>
          </div>
        </Dropdown.Item>
        <Dropdown.Item onClick={() => selectLan(lanList.fr)}>
          <div
            className="block px-4 py-0 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
            role="menuitem"
          >
            <div className="inline-flex items-center">
              {lanList.fr.icon}
              {lanList.fr.label}
            </div>
          </div>
        </Dropdown.Item>
        <Dropdown.Item onClick={() => selectLan(lanList.bn)}>
          <div
            className="block px-4 py-0 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
            role="menuitem"
          >
            <div className="inline-flex items-center">
              {lanList.bn.icon}
              {lanList.bn.label}
            </div>
          </div>
        </Dropdown.Item>
      </Dropdown>
    </div>
  );
};

export default LanSwitch;
