"use client";
import React from "react";

import { Accordion } from "flowbite-react";

const ContactList = () => {
  return (
    <Accordion collapseAll className="bg-white text-black">
      <Accordion.Panel>
        <Accordion.Title>
          <div className="flex items-center">
            <img
              src="./images/ram.png"
              width="50px"
              height="50px"
              className="rounded-full"
            />
            <div className="flex flex-col">
              <div className="font-bold">Ram Kumar Dhimal</div>
              <div>Sydney, Australia</div>
            </div>
          </div>
        </Accordion.Title>
        <Accordion.Content>
          <div className="flex flex-col justify-center items-center">
            <img
              src="./images/ram.png"
              alt=""
              srcset=""
              height="150px"
              width="150px"
              className="rounded-full"
            />
            <div className="d-flex flex-column mt-2">
              <div className="">
                <i className="bi bi-person-fill fs-5"></i>
                <span>Ram Kumar Dhimal</span>
              </div>

              <div className="">
                <i className="bi bi-phone-fill fs-5"></i>
                <span>+61 042565666</span>
              </div>

              <div className="">
                <i className="bi bi-envelope-fill"></i>
                <span>ram@gmail.com</span>
              </div>

              <div className="">
                <i className="bi bi-geo-alt-fill"></i>
                <span>Sydney, Australia</span>
              </div>
            </div>
          </div>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
};

export default ContactList;
