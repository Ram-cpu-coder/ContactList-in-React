import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { IoLockClosedOutline } from "react-icons/io5";
import { BsSearch } from "react-icons/bs";

import ContactList from "./ContactList";
import LockScreen from "./LockScreen";

const ContactScreen = ({ displayContact, setRangerValue }) => {
  const [searchValue, setSearchValue] = useState("");
  const [locked, setLocked] = useState(setRangerValue(100));
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);

  const [dataList, setDataList] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://randomuser.me/api?results=50")
      .then((response) => {
        setDataList(response.data.results);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);
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

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      setFiltered(
        dataList.filter((item) => {
          return item.name.first
            .toLowerCase()
            .includes(searchValue.toLowerCase());
        })
      );
      setSearchValue("");
    } else {
      ("");
    }
  };

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
              setLocked(setRangerValue(0));
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
          onKeyUp={handleEnter}
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
          {loading ? <span>Loading...</span> : ""}
        </div>
        {error ? <span>Error Loading</span> : ""}
      </div>

      {/* <!-- contact-list --> */}
      {filtered == "" ? (
        <div className="bg-light text-dark" id="contact-list">
          <div className="p-3">
            <span id="userCount">{dataList.length}</span> Contacts
          </div>
          <div className="">
            <ContactList dataList={dataList} />
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
