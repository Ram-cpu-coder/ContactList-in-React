import React, { useState } from "react";
import { IoLockClosedOutline } from "react-icons/io5";
import { BsSearch } from "react-icons/bs";

import ContactList from "./ContactList";

const ContactScreen = ({ displayContact }) => {
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
          className="rounded-lg w-full h-[50px]"
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
        <div className="accordion" id="contactAccordion">
          <ContactList />
          {/* <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        <img src="./ram.jpg" width="50px" height="50px" className="rounded-circle">
                        <div className="ms-2">
                            <div className="fw-bolder">Ram Kumar Dhimal</div>
                            <div className="">
                                Sydney, Australia
                            </div>
                        </div>

                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show"
                    data-bs-parent="#contactAccordion">
                    <div
                        className="accordion-body d-flex flex-column justify-content-center align-items-center">
                        <img src="./ram.jpg" alt="" srcset="" height="150px" width="150px"
                            className="rounded-circle">
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
                </div>
            </div>  */}
        </div>

        {/* <!-- <div className="accordion" id="contactAccordion">
            <div className="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseOne">
                        <img src="./ram.jpg" width="50px" height="50px" class="rounded-circle">
                        <div class="ms-2">
                            <div class="fw-bolder">Ram Kumar Dhimal</div>
                            <div class="">
                                Sydney, Australia
                            </div>
                        </div>

                    </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse"
                    data-bs-parent="#contactAccordion">
                    <div
                        class="accordion-body d-flex flex-column justify-content-center align-items-center">
                        <img src="./ram.jpg" alt="" srcset="" height="150px" width="150px"
                            class="rounded-circle">
                        <div class="d-flex flex-column mt-2">

                            <div class="">
                                <i class="bi bi-person-fill fs-5"></i>
                                <span>Ram Kumar Dhimal</span>
                            </div>

                            <div class="">
                                <i class="bi bi-phone-fill fs-5"></i>
                                <span>+61 042565666</span>
                            </div>

                            <div class="">
                                <i class="bi bi-envelope-fill"></i>
                                <span>ram@gmail.com</span>
                            </div>

                            <div class="">
                                <i class="bi bi-geo-alt-fill"></i>
                                <span>Sydney, Australia</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> --> */}
      </div>
    </main>
  );
};

export default ContactScreen;
