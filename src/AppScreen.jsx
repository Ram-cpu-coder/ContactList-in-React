import React from "react";

const AppScreen = () => {
  return (
    <main id="appScreen" className="screen h100">
      <div className="contact d-flex flex-column justify-content-center align-items-center m-auto">
        <div className="bg-white px-3 rounded-3 text-danger mt-4">
          <i
            className="bi bi-person-lines-fill fs-1"
            onclick="displayContactListScreen()"
          ></i>
        </div>
        <span>Contact</span>
      </div>
    </main>
  );
};

export default AppScreen;
