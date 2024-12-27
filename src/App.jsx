import { useState } from "react";
import "./App.css";
import NotificationBar from "./NotificationBar";
import LockScreen from "./LockScreen";
import AppScreen from "./AppScreen";

function App() {
  // const[lockOpen, setLockOpen] = useState(false)
  const [rangerValue, setRangerValue] = useState(0);
  return (
    <div className="flex justify-center items-center wrapper">
      <div className="phone rounded-lg border border-4 border-inherit shadow-lg text-white overflow-y-scroll">
        <NotificationBar />
        {rangerValue < 70 ? (
          <LockScreen setRangerValue={setRangerValue} />
        ) : (
          <AppScreen />
        )}
      </div>
    </div>
  );
}

export default App;
