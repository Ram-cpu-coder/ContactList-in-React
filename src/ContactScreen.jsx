import React, { useRef, useState } from "react";
import { IoLockClosedOutline } from "react-icons/io5";
import { BsSearch } from "react-icons/bs";

import ContactList from "./ContactList";
import LockScreen from "./LockScreen";

const ContactScreen = ({ displayContact, dataList, setRangerValue }) => {
  const [searchValue, setSearchValue] = useState("");
  const [locked, setLocked] = useState(false);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState("hidden");
  // const [filteredItems, setFilteredItems] = useState([]);

  const handleOnSearchInput = (e) => {
    setSearchValue(e.target.value);
  };
  const handleSearch = () => {
    const filteredItem = dataList.filter((item) => {
      return item.name.first.toLowerCase().includes(searchValue.toLowerCase());
    });
    // console.log("after search", filteredItem);
    setSearchValue("");
    setFiltered(filteredItem);
  };
  console.log(filtered);
  return locked ? (
    <LockScreen />
  ) : (
    <main id="contactListScreen" className={`screen ${displayContact}`}>
      {/* <!-- header --> */}
      <div className="p-2 mt-1 text-white">
        <div className="lock">
          <IoLockClosedOutline
            className="text-2xl"
            onClick={() => {
              setLocked(!locked);
              setRangerValue(0);
            }}
          />
        </div>
        <h2 className="text-center text-4xl font-bold">Contacts</h2>
      </div>
      <div className="relative p-1 m-1">
        {/* <!-- search form --> */}
        <input
          type=""
          name="Search"
          id="search"
          placeholder="Search Contact"
          className="rounded-lg w-full h-[50px] text-[black] px-3"
          onChange={handleOnSearchInput}
          value={searchValue}
        />
        <BsSearch
          className="absolute searchIcon text-2xl text-[black]"
          onClick={handleSearch}
        />
      </div>
      {/* <!-- spinner --> */}
      <div className="text-center">
        <div
          className="spinner-border text-danger m-5"
          role="status"
          id="spinner"
        >
          <span className={`${loading}`}>Loading...</span>
        </div>
      </div>

      {/* <!-- contact-list --> */}
      {filtered == "" ? (
        <div className="bg-light text-dark" id="contact-list">
          <div className="p-3">
            <span id="userCount">{dataList.length}</span> Contacts
          </div>
          <div className="">
            <ContactList dataList={dataList} filtered={filtered} />
          </div>
        </div>
      ) : (
        <div className="bg-light text-dark" id="contact-list">
          <div className="p-3">
            <span id="userCount">{filtered.length}</span> Contacts
          </div>
          <div className="">
            <ContactList dataList={filtered} />
          </div>
        </div>
      )}
    </main>
  );
};

export default ContactScreen;
