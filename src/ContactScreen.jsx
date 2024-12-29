import React, { useState } from "react";
import { IoLockClosedOutline } from "react-icons/io5";
import { BsSearch } from "react-icons/bs";

import ContactList from "./ContactList";

const ContactScreen = ({ displayContact, dataList }) => {
  const [loading, setLoading] = useState("hidden");
  const backToLock = () => {};
  return (
    <main id="contactListScreen" className={`screen ${displayContact}`}>
      {/* <!-- header --> */}
      <div className="p-2 mt-1 text-white">
        <div className="lock">
          <IoLockClosedOutline onClick={backToLock} className="text-2xl" />
        </div>
        <h2 className="text-center text-4xl font-bold">Contacts</h2>
      </div>
      <div className="relative p-1 m-1">
        {/* <!-- search form --> */}
        <input
          type="search"
          name="Search"
          id="search"
          placeholder="Search Contact"
          className="rounded-lg w-full h-[50px] text-[black]"
        />
        <BsSearch className="absolute searchIcon text-2xl text-[black]" />
      </div>
      {/* <!-- spinner --> */}
      <div className="text-center">
        <div
          className="spinner-border text-danger  m-5"
          role="status"
          id="spinner"
        >
          <span className={`${loading}`}>Loading...</span>
        </div>
      </div>

      {/* <!-- contact-list --> */}
      <div className="bg-light text-dark" id="contact-list">
        <div className="p-3">
          <span id="userCount">0</span> Contacts
        </div>
        <div className="">
          <ContactList dataList={dataList} />
        </div>
      </div>
    </main>
  );
};

export default ContactScreen;
