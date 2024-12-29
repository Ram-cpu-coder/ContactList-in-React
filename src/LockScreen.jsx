import React from "react";

const LockScreen = ({ setRangerValue, rangerValue }) => {
  const handleOnChange = (e) => {
    setRangerValue(e.target.value);
  };

  return (
    <main
      id="lockScreen"
      className={`screen relative h80 ${rangerValue < 70 ? "block" : "hidden"}`}
    >
      <div className="h100 flex flex-col justify-center items-center">
        {/* <!-- time and day --> */}
        <div className="time-css flex flex-col items-center">
          <span className="day text-xl"></span>

          <span id="Time" className="Time time-css-lock p-1"></span>
        </div>
        <div className="sliderContainer p-3 rounded-2xl relative flex">
          <label className="slider-label text-white absolute">
            Slide to Unlock
          </label>
          <input
            type="range"
            id="slider"
            className="slider w-full"
            min="0"
            max="100"
            value={rangerValue}
            onChange={handleOnChange}
          />
        </div>
      </div>
    </main>
  );
};

export default LockScreen;
