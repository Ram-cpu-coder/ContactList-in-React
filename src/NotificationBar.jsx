import React from "react";
import { IoWifiOutline } from "react-icons/io5";
import { BsReception4 } from "react-icons/bs";
import { PiBatteryHighFill } from "react-icons/pi";

const NotificationBar = () => {
  return (
    <div
      id="notification"
      className="notification shadow-lg flex justify-between items-center p-3 sticky top-0 h-[50px]"
    >
      <span className="Time" id="Time"></span>
      <div className="bg-[black] w-[100px] rounded-lg"></div>
      <div className="flex gap-2">
        <IoWifiOutline />
        <BsReception4 />
        <PiBatteryHighFill />
      </div>
    </div>
  );
};

export default NotificationBar;
