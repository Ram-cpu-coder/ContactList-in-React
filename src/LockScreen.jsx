import React from "react";

const LockScreen = ({
  setRangerValue,
  rangerValue,
  month,
  date,
  day,
  hour,
  minute,
}) => {
  const handleOnChange = (e) => {
    setRangerValue(e.target.value);
  };

  return (
    <main
      id="lockScreen"
      className={`screen relative h80 ${rangerValue < 80 ? "block" : "hidden"}`}
    >
      <div className="h100 flex flex-col justify-center items-center">
        {/* <!-- time and day --> */}
        <div className="time-css flex flex-col items-center">
          <span className="text-xl ">
            {day}, {month} {date}
          </span>
          <span className="Time time-css-lock">{`${hour % 12}:${minute}`}</span>
        </div>
        <div className="sliderContainer p-3 rounded-2xl relative flex">
          <label className="slider-label text-white absolute">
            Slide to Unlock
          </label>
          <input
            type="range"
            id="slider"
            className="w-full"
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
