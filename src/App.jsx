import { useState, useEffect } from "react";
import "./App.css";
import NotificationBar from "./NotificationBar";
import LockScreen from "./LockScreen";
import AppScreen from "./AppScreen";
import { data } from "autoprefixer";

function App() {
  const [rangerValue, setRangerValue] = useState(0);
  const dataList = [
    {
      gender: "male",
      name: {
        title: "Monsieur",
        first: "Fernando",
        last: "Morin",
      },
      location: {
        street: {
          number: 8811,
          name: "Rue de la Baleine",
        },
        city: "Tavannes",
        state: "Uri",
        country: "Switzerland",
        postcode: 8042,
        coordinates: {
          latitude: "-62.7547",
          longitude: "-3.1454",
        },
        timezone: {
          offset: "+1:00",
          description: "Brussels, Copenhagen, Madrid, Paris",
        },
      },
      email: "fernando.morin@example.com",
      login: {
        uuid: "4b7e9dd5-c629-4f6f-bc03-54a9cb584951",
        username: "angryduck395",
        password: "sidney",
        salt: "UxhL7A70",
        md5: "98709a33ed3c9a169fc43588386e5194",
        sha1: "d7e81057d342574bf34dce8a3a9149096b33af9a",
        sha256:
          "08b90a10d805e5306a20e8264f2d02e330896581fc497c339b696261171207d3",
      },
      dob: {
        date: "1960-09-21T03:38:21.913Z",
        age: 64,
      },
      registered: {
        date: "2015-03-27T16:11:43.159Z",
        age: 9,
      },
      phone: "078 352 53 07",
      cell: "075 129 35 74",
      id: {
        name: "AVS",
        value: "756.9220.5348.35",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/58.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/58.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/58.jpg",
      },
      nat: "CH",

      info: {
        seed: "416bdb690efa200d",
        results: 1,
        page: 1,
        version: "1.4",
      },
    },
    {
      gender: "male",
      name: {
        title: "Monsieur",
        first: "Fernando",
        last: "Morin",
      },
      location: {
        street: {
          number: 8811,
          name: "Rue de la Baleine",
        },
        city: "Tavannes",
        state: "Uri",
        country: "Switzerland",
        postcode: 8042,
        coordinates: {
          latitude: "-62.7547",
          longitude: "-3.1454",
        },
        timezone: {
          offset: "+1:00",
          description: "Brussels, Copenhagen, Madrid, Paris",
        },
      },
      email: "fernando.morin@example.com",
      login: {
        uuid: "4b7e9dd5-c629-4f6f-bc03-54a9cb584951",
        username: "angryduck395",
        password: "sidney",
        salt: "UxhL7A70",
        md5: "98709a33ed3c9a169fc43588386e5194",
        sha1: "d7e81057d342574bf34dce8a3a9149096b33af9a",
        sha256:
          "08b90a10d805e5306a20e8264f2d02e330896581fc497c339b696261171207d3",
      },
      dob: {
        date: "1960-09-21T03:38:21.913Z",
        age: 64,
      },
      registered: {
        date: "2015-03-27T16:11:43.159Z",
        age: 9,
      },
      phone: "078 352 53 07",
      cell: "075 129 35 74",
      id: {
        name: "AVS",
        value: "756.9220.5348.35",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/58.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/58.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/58.jpg",
      },
      nat: "CH",

      info: {
        seed: "416bdb690efa200d",
        results: 1,
        page: 1,
        version: "1.4",
      },
    },
  ];

  return (
    <div className="flex justify-center items-center wrapper">
      <div className="phone rounded-lg border border-4 border-inherit shadow-lg text-white overflow-y-scroll">
        <NotificationBar />

        <LockScreen setRangerValue={setRangerValue} rangerValue={rangerValue} />
        <AppScreen rangerValue={rangerValue} dataList={dataList} />
      </div>
    </div>
  );
}

export default App;
