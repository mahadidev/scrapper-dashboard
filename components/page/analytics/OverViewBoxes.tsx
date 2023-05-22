"use client";
import React, { useState } from "react";
import { AiOutlineTool, AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { SiAiohttp } from "react-icons/si";

const OverViewBox = ({
  icon,
  title,
  value,
}: {
  icon: any;
  title: string;
  value: string;
}) => {
  return (
    <div className="w-full py-4 px-3 rounded-md bg-white shadow-box">
      <div className="px-4 py-2 bg-blue-50 rounded-full flex gap-4 items-center">
        <div>{icon}</div>
        <h1 className="text-lg font-semibold text-center">{title}</h1>
      </div>
      <h1 className="mt-4 text-center text-2xl font-semibold">{value}+</h1>
    </div>
  );
};

const OverViewBoxes = () => {
  // state
  const [boxes, setBoxes] = useState<
    | {
        title: string;
        value: string;
        icon: any;
      }[]
    | null
  >([
    {
      title: "Total Scrapped",
      value: "4500",
      icon: <AiOutlineTool />,
    },
    {
      title: "Email",
      value: "250",
      icon: <AiOutlineMail />,
    },
    {
      title: "Phone",
      value: "152",
      icon: <AiOutlinePhone />,
    },
    {
      title: "Company",
      value: "50",
      icon: <SiAiohttp />,
    },
  ]);

  return (
    <>
      <section className="pt-10">
        <div className="container">
          <div className="grid grid-cols-4 gap-4">
            {boxes?.map(
              (
                item: {
                  title: string;
                  value: string;
                  icon: any;
                },
                index: number
              ) => (
                <OverViewBox {...item} key={index} />
              )
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default OverViewBoxes;
