import React, { useState, useEffect } from "react";
import { RiContactsBook3Line } from "react-icons/ri";

import ContactScreen from "./ContactScreen";

const AppScreen = ({ rangerValue, dataList }) => {
  const [displayContact, setDisplayContact] = useState("hidden");
  const [displayApp, setDisplayApp] = useState("hidden");

  useEffect(() => {
    rangerValue > 70 ? setDisplayApp("block") : setDisplayApp("hidden");
  }, [rangerValue]);

  const handleClickContact = () => {
    setDisplayContact("block");
    setDisplayApp("hidden");
  };
  return (
    <div>
      <main id="appScreen" className={`screen h-[100vh] ${displayApp}`}>
        <div className="contact flex flex-col justify-center items-center m-[auto]">
          <div
            className="bg-white rounded-3 text-[red] mt-4"
            onClick={handleClickContact}
          >
            <RiContactsBook3Line className="text-5xl p-1" />
          </div>
          <span>Contact</span>
        </div>
      </main>
      <ContactScreen displayContact={displayContact} dataList={dataList} />
    </div>
  );
};

export default AppScreen;
