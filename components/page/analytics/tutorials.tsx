"use client";
import React, { useState } from "react";
import { BiVideoRecording, BiKey } from "react-icons/bi";
import { AiOutlineInfoCircle, AiOutlinePhone } from "react-icons/ai";
import { TbPhone } from "react-icons/tb";
import { Player } from "video-react";
import "node_modules/video-react/dist/video-react.css";

const Tutorial = ({
  icon,
  title,
  content,
}: {
  icon: any;
  title: string;
  content: any;
}) => {
  return (
    <div className="w-full rounded-md overflow-hidden bg-white shadow-box">
      {content}
    </div>
  );
};

const Tutorials = () => {
  // state
  const [tutorialsData, setTutorialsData] = useState<any>([
    {
      icon: <BiVideoRecording />,
      title: "How to scrape email addresses?",
      content: (
        <>
          <Player
            playsInline
            poster="https://i.ytimg.com/vi/JTxsNm9IdYU/maxresdefault.jpg"
            src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          />
        </>
      ),
    },
    {
      icon: <TbPhone />,
      title: "How to scrape phone number?",
      content: (
        <>
          <Player
            playsInline
            poster="https://i.ytimg.com/vi/hSL5NyyDfak/maxresdefault.jpg"
            src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
          />
        </>
      ),
    },
    {
      icon: <BiKey />,
      title: "How key works?",
      content: (
        <>
          <Player
            playsInline
            poster="https://i.ytimg.com/vi/vrgR47YKsjc/maxresdefault.jpg"
            src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
          />
        </>
      ),
    },
  ]);

  return (
    <section className="mt-10">
      <div className="container">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-600">How it's work</h1>
          <AiOutlineInfoCircle className="text-2xl text-blue-700" />
        </div>
        <div className="py-4">
          <hr />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {tutorialsData?.map((item: any, index: number) => (
            <Tutorial {...item} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tutorials;
