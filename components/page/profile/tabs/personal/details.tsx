import React from "react";
import { MdCameraAlt, MdVerifiedUser } from "react-icons/md";
import { RxCounterClockwiseClock } from "react-icons/rx";

const Details = () => {
  return (
    <>
      <div className="w-full h-auto mx-auto relative rounded overflow-hidden">
        <img
          className="w-full h-full object-cover object-top"
          src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
          alt="Extra large avatar"
        />
      </div>
      <div className="w-full mt-4 flex flex-col gap-1 items-center">
        <h2 className="text-base text-gray-600 font-semibold">Mahadi Hasan</h2>
        <h2 className="text-base text-gray-600 font-semibold flex gap-1 items-center">
          mahadi.dev.pm@gmail.com
        </h2>
        <h2 className="text-base text-gray-600 font-semibold flex gap-1 items-center">
          20 Trails left
        </h2>
      </div>
    </>
  );
};

export default Details;
