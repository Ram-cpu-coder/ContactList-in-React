"use client";
import React from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

import { Accordion } from "flowbite-react";

const ContactList = ({ dataList }) => {
  const tempDataList = [...dataList];
  return (
    <Accordion collapseAll className="bg-white text-black">
      {tempDataList.map((item) => (
        <Accordion.Panel>
          <Accordion.Title>
            <div className="flex items-center">
              <img
                src={item.picture.medium}
                width="50px"
                height="50px"
                className="rounded-full"
              />
              <div className="flex flex-col">
                <div className="font-bold">
                  {item.name.title} {item.name.first} {item.name.second}
                </div>
                <div>
                  {item.location.city}, {item.location.country}
                </div>
              </div>
            </div>
          </Accordion.Title>
          <Accordion.Content>
            <div className="flex flex-col justify-center items-center">
              <img
                src={item.picture.medium}
                alt=""
                srcset=""
                height="150px"
                width="150px"
                className="rounded-full"
              />
              <div className="flex flex-col mt-2">
                <div className="flex items-center gap-3">
                  <BsFillPersonFill />
                  <span>
                    {item.name.title} {item.name.first} {item.name.second}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <FaPhone />
                  <span>+61 042565666</span>
                </div>

                <div className="flex items-center gap-3">
                  <MdEmail />
                  <span>{item.email}</span>
                </div>

                <div className="flex items-center gap-3">
                  <FaLocationDot />
                  <span>
                    {item.location.city}, {item.location.country}
                  </span>
                </div>
              </div>
            </div>
          </Accordion.Content>
        </Accordion.Panel>
      ))}
    </Accordion>
  );
};

export default ContactList;
