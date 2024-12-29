import { useState, useEffect } from "react";
import "./App.css";
import NotificationBar from "./NotificationBar";
import LockScreen from "./LockScreen";
import AppScreen from "./AppScreen";

function App() {
  const [rangerValue, setRangerValue] = useState(0);
  const dataList = [
    {
      gender: "female",
      name: {
        title: "Mrs",
        first: "Rebecca",
        last: "Martens",
      },
      location: {
        street: {
          number: 1545,
          name: "Tårnveien",
        },
        city: "Kvaløysletta",
        state: "Akershus",
        country: "Norway",
        postcode: "5805",
        coordinates: {
          latitude: "40.0635",
          longitude: "147.2703",
        },
        timezone: {
          offset: "+2:00",
          description: "Kaliningrad, South Africa",
        },
      },
      email: "rebecca.martens@example.com",
      login: {
        uuid: "c8682e60-bd0e-427b-a566-488c2133eb6c",
        username: "happyfish558",
        password: "goblue",
        salt: "1d5hEUAw",
        md5: "508018696c392d9e82264845ef4455e3",
        sha1: "72163e85d83252a74de9a301822c6a99f54b5117",
        sha256:
          "98cdff573de253477609005397fc06a9a943f56d0f991650af76620621d179e7",
      },
      dob: {
        date: "1974-07-22T11:01:41.683Z",
        age: 50,
      },
      registered: {
        date: "2017-06-19T15:40:45.215Z",
        age: 7,
      },
      phone: "22296371",
      cell: "45082153",
      id: {
        name: "FN",
        value: "22077426675",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/13.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/13.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/13.jpg",
      },
      nat: "NO",
    },
    {
      gender: "male",
      name: {
        title: "Monsieur",
        first: "Ismet",
        last: "Perrin",
      },
      location: {
        street: {
          number: 2358,
          name: "Rue du Moulin",
        },
        city: "Scuol",
        state: "Vaud",
        country: "Switzerland",
        postcode: 2357,
        coordinates: {
          latitude: "-58.7874",
          longitude: "-146.7466",
        },
        timezone: {
          offset: "+3:30",
          description: "Tehran",
        },
      },
      email: "ismet.perrin@example.com",
      login: {
        uuid: "81d32857-a346-4c93-9cec-aa9319446d91",
        username: "smallmeercat203",
        password: "harbor",
        salt: "QPKmgJsq",
        md5: "5ca8fc4723d6b2432f19939801cbcd88",
        sha1: "9450a61ed4ab00d3fa5e62fbd8458087772b0182",
        sha256:
          "f93cb08d7f2d3aa1b5988e78336a6aa734c45481892693fd23cf0901ef72c855",
      },
      dob: {
        date: "1947-01-30T16:41:55.456Z",
        age: 77,
      },
      registered: {
        date: "2015-04-24T05:31:43.609Z",
        age: 9,
      },
      phone: "076 089 18 62",
      cell: "079 022 47 57",
      id: {
        name: "AVS",
        value: "756.0455.9008.19",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/52.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/52.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/52.jpg",
      },
      nat: "CH",
    },
    {
      gender: "female",
      name: {
        title: "Mrs",
        first: "Aimê",
        last: "Ferreira",
      },
      location: {
        street: {
          number: 2026,
          name: "Rua Piauí ",
        },
        city: "Angra dos Reis",
        state: "Rio Grande do Norte",
        country: "Brazil",
        postcode: 40030,
        coordinates: {
          latitude: "-82.2899",
          longitude: "53.6261",
        },
        timezone: {
          offset: "-10:00",
          description: "Hawaii",
        },
      },
      email: "aime.ferreira@example.com",
      login: {
        uuid: "8231ce3d-93e0-4346-b8b1-789f01d2e0f0",
        username: "heavypeacock105",
        password: "jimmys",
        salt: "cLgvSdzN",
        md5: "3f51b172b0666d252de16e3a7101f6ab",
        sha1: "949d4cef874142e3b57c9ad81adeeea2bf8ce719",
        sha256:
          "c721424d8daa82af6fd703fa7e67b3d4ba527ffca8a08b2db9a61fd73a9d2da4",
      },
      dob: {
        date: "1953-03-28T07:48:05.045Z",
        age: 71,
      },
      registered: {
        date: "2015-05-09T01:23:16.615Z",
        age: 9,
      },
      phone: "(90) 0630-2917",
      cell: "(98) 4784-2488",
      id: {
        name: "CPF",
        value: "266.127.051-36",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/43.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/43.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/43.jpg",
      },
      nat: "BR",
    },
    {
      gender: "male",
      name: {
        title: "Mr",
        first: "رضا",
        last: "کوتی",
      },
      location: {
        street: {
          number: 9455,
          name: "آفریقا",
        },
        city: "زاهدان",
        state: "آذربایجان شرقی",
        country: "Iran",
        postcode: 62020,
        coordinates: {
          latitude: "-9.5405",
          longitude: "-48.7005",
        },
        timezone: {
          offset: "+7:00",
          description: "Bangkok, Hanoi, Jakarta",
        },
      },
      email: "rd.khwty@example.com",
      login: {
        uuid: "1380b509-15b1-46a7-bc02-a7f00a503e1c",
        username: "ticklishmouse214",
        password: "roberta",
        salt: "Cvmw0JBG",
        md5: "85cd1edb6dc26b7a02883f287b9a8f96",
        sha1: "92f39632fc09dc50be3e8861335c11e0be76d652",
        sha256:
          "410dbad5b7e879f131b7af02d7a0935cd292477850298279ccc93b069378f582",
      },
      dob: {
        date: "1956-03-08T17:59:44.624Z",
        age: 68,
      },
      registered: {
        date: "2014-12-03T11:24:12.584Z",
        age: 10,
      },
      phone: "044-32696642",
      cell: "0987-859-0461",
      id: {
        name: "",
        value: null,
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/92.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/92.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/92.jpg",
      },
      nat: "IR",
    },
    {
      gender: "male",
      name: {
        title: "Mr",
        first: "Ethan",
        last: "Ross",
      },
      location: {
        street: {
          number: 4145,
          name: "Locust Rd",
        },
        city: "Anchorage",
        state: "Missouri",
        country: "United States",
        postcode: 13038,
        coordinates: {
          latitude: "80.3614",
          longitude: "114.5779",
        },
        timezone: {
          offset: "+4:30",
          description: "Kabul",
        },
      },
      email: "ethan.ross@example.com",
      login: {
        uuid: "6bd736ed-3ab3-43c0-815a-946edf070975",
        username: "ticklishgorilla261",
        password: "thumbs",
        salt: "122aUbKa",
        md5: "f9c1ba60d015af7a878aa83062635d6e",
        sha1: "c08a94d64f08515d4a2e96cbcd3842f2871cd987",
        sha256:
          "daa1f81dc2dd983e6d3fdd9d93be3722dee36814f9c52c44852b190ed3eb7f41",
      },
      dob: {
        date: "1955-12-04T18:47:12.473Z",
        age: 69,
      },
      registered: {
        date: "2012-09-28T09:07:21.675Z",
        age: 12,
      },
      phone: "(313) 654-3621",
      cell: "(374) 688-3635",
      id: {
        name: "SSN",
        value: "024-83-9339",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/34.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/34.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/34.jpg",
      },
      nat: "US",
    },
    {
      gender: "female",
      name: {
        title: "Mrs",
        first: "Cecilie",
        last: "Larsen",
      },
      location: {
        street: {
          number: 8996,
          name: "Åbakken",
        },
        city: "Ugerløse",
        state: "Syddanmark",
        country: "Denmark",
        postcode: 31851,
        coordinates: {
          latitude: "-53.6665",
          longitude: "-48.2823",
        },
        timezone: {
          offset: "+9:00",
          description: "Tokyo, Seoul, Osaka, Sapporo, Yakutsk",
        },
      },
      email: "cecilie.larsen@example.com",
      login: {
        uuid: "f978cda2-3ae7-4754-aea9-64dbc8f07a2f",
        username: "tinydog595",
        password: "jason1",
        salt: "nS1TO3Mb",
        md5: "40be2c3460a415d476ac3990b63fdd04",
        sha1: "cf9c7216c4dbc7961c42d8cfe2d2f47beedfee0b",
        sha256:
          "22064645a10e2d3aedfc5e1f78f4446e70c75d5ddc59cb1c54e08a10d1107e7a",
      },
      dob: {
        date: "1981-08-20T15:53:28.873Z",
        age: 43,
      },
      registered: {
        date: "2017-07-06T21:05:23.285Z",
        age: 7,
      },
      phone: "39796787",
      cell: "86756144",
      id: {
        name: "CPR",
        value: "200881-8653",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/24.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/24.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/24.jpg",
      },
      nat: "DK",
    },
    {
      gender: "male",
      name: {
        title: "Mr",
        first: "Christian",
        last: "Petersen",
      },
      location: {
        street: {
          number: 4323,
          name: "Højvangen",
        },
        city: "Ishoej",
        state: "Sjælland",
        country: "Denmark",
        postcode: 21355,
        coordinates: {
          latitude: "-34.7451",
          longitude: "-64.7590",
        },
        timezone: {
          offset: "+4:30",
          description: "Kabul",
        },
      },
      email: "christian.petersen@example.com",
      login: {
        uuid: "ca67070d-dd0c-4090-ad62-3852159975a3",
        username: "blackbear820",
        password: "kendall",
        salt: "hFV2fDWf",
        md5: "b614dc07ca7cb0af1eb9f2bbd15b8866",
        sha1: "718dda874464d4d5edfb7eb07366f1fbd2153690",
        sha256:
          "a771d97cb7c5e0a7ae293d3af16e9770ab197d6a104051f2259ba45da11b0cb7",
      },
      dob: {
        date: "1969-08-06T18:43:17.670Z",
        age: 55,
      },
      registered: {
        date: "2003-11-04T23:38:57.527Z",
        age: 21,
      },
      phone: "95998207",
      cell: "19195967",
      id: {
        name: "CPR",
        value: "060869-0344",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/86.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/86.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/86.jpg",
      },
      nat: "DK",
    },
    {
      gender: "female",
      name: {
        title: "Ms",
        first: "Anja",
        last: "Novak",
      },
      location: {
        street: {
          number: 7373,
          name: "Josifa Pančića",
        },
        city: "Varvarin",
        state: "Kosovska Mitrovica",
        country: "Serbia",
        postcode: 71832,
        coordinates: {
          latitude: "-58.3144",
          longitude: "-115.5255",
        },
        timezone: {
          offset: "-1:00",
          description: "Azores, Cape Verde Islands",
        },
      },
      email: "anja.novak@example.com",
      login: {
        uuid: "b79ed6a5-8037-4d5e-95e3-b268eefed33b",
        username: "silverelephant116",
        password: "737373",
        salt: "NjzDuBC4",
        md5: "329c0cc52cb2aee5f0ba0a1fa95fcc86",
        sha1: "0b19d4ee1d34aa5a7e5ab45b9b517a1f5c950104",
        sha256:
          "7f99c63e377536420a767f4756cdbc74cb2722f6093ad49e5e7a3de0e6d2eafb",
      },
      dob: {
        date: "1952-06-29T21:04:47.457Z",
        age: 72,
      },
      registered: {
        date: "2009-08-23T02:37:27.690Z",
        age: 15,
      },
      phone: "023-9710-452",
      cell: "062-4654-940",
      id: {
        name: "SID",
        value: "721134655",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/27.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/27.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/27.jpg",
      },
      nat: "RS",
    },
    {
      gender: "male",
      name: {
        title: "Mr",
        first: "Soan",
        last: "Lefebvre",
      },
      location: {
        street: {
          number: 6167,
          name: "Rue des Écoles",
        },
        city: "Rennes",
        state: "Allier",
        country: "France",
        postcode: 42480,
        coordinates: {
          latitude: "62.9207",
          longitude: "83.9644",
        },
        timezone: {
          offset: "+2:00",
          description: "Kaliningrad, South Africa",
        },
      },
      email: "soan.lefebvre@example.com",
      login: {
        uuid: "aea07e28-ac44-4ecf-abdb-d9c8a377da85",
        username: "redsnake406",
        password: "sparrow",
        salt: "MxGR7l7y",
        md5: "cef28f43e81d686310eb9e05164022e5",
        sha1: "cfc36c8a0fc629955eb7af32aaa8fc6547bfd19e",
        sha256:
          "385b8df476af3b94cc8f0d0537b0f8ced9bb8b72ca7984fba71f2a89e06c907f",
      },
      dob: {
        date: "1956-02-01T19:06:49.376Z",
        age: 68,
      },
      registered: {
        date: "2016-12-29T00:54:02.058Z",
        age: 8,
      },
      phone: "01-84-31-88-50",
      cell: "06-39-39-63-31",
      id: {
        name: "INSEE",
        value: "1560115357202 67",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/10.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/10.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/10.jpg",
      },
      nat: "FR",
    },
    {
      gender: "male",
      name: {
        title: "Mr",
        first: "Milo",
        last: "Ferreira",
      },
      location: {
        street: {
          number: 6814,
          name: "Rua Dezesseis de Maio",
        },
        city: "Petrolina",
        state: "Paraná",
        country: "Brazil",
        postcode: 98987,
        coordinates: {
          latitude: "-43.3165",
          longitude: "-114.3372",
        },
        timezone: {
          offset: "-7:00",
          description: "Mountain Time (US & Canada)",
        },
      },
      email: "milo.ferreira@example.com",
      login: {
        uuid: "3ca655b2-18cd-417c-9820-c71de8eed41c",
        username: "happytiger186",
        password: "johnny1",
        salt: "ojT05f2a",
        md5: "9474a4e7aef4aeac76acef6807035037",
        sha1: "9467241bb716fa04e12328609fc66a38f96a4200",
        sha256:
          "ec3e9fb21f91cd76eac41d6653df44404ba31a26dad9571213022f3b8a4ed59f",
      },
      dob: {
        date: "1974-12-28T21:23:15.854Z",
        age: 50,
      },
      registered: {
        date: "2011-12-21T11:10:49.051Z",
        age: 13,
      },
      phone: "(50) 1965-4826",
      cell: "(44) 9659-4796",
      id: {
        name: "CPF",
        value: "531.728.419-40",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/6.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/6.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/6.jpg",
      },
      nat: "BR",
    },
    {
      gender: "male",
      name: {
        title: "Mr",
        first: "Samuel",
        last: "Cooper",
      },
      location: {
        street: {
          number: 1338,
          name: "Mokoia Road",
        },
        city: "Whangarei",
        state: "Manawatu-Wanganui",
        country: "New Zealand",
        postcode: 98261,
        coordinates: {
          latitude: "-61.0850",
          longitude: "149.4917",
        },
        timezone: {
          offset: "+9:00",
          description: "Tokyo, Seoul, Osaka, Sapporo, Yakutsk",
        },
      },
      email: "samuel.cooper@example.com",
      login: {
        uuid: "1f8eac15-66da-417f-ab5e-4aa267577e0c",
        username: "silverrabbit980",
        password: "sassy",
        salt: "orVXBD2G",
        md5: "d7230ccdbb935b58a17bd77531f3d7fd",
        sha1: "1458d5153db57aa702d8f945fb8445e3fea00b45",
        sha256:
          "3591b9a5b7098f993ef38d62dfef9d1f67f804c8f455d69de35889f1a207503f",
      },
      dob: {
        date: "1962-01-18T21:41:43.264Z",
        age: 62,
      },
      registered: {
        date: "2009-07-04T00:24:00.361Z",
        age: 15,
      },
      phone: "(545)-399-9584",
      cell: "(669)-017-1991",
      id: {
        name: "",
        value: null,
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/85.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/85.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/85.jpg",
      },
      nat: "NZ",
    },
  ];
  useEffect(() => {
    if (rangerValue < 70) {
      setRangerValue(0);
    } else {
      setRangerValue(100);
    }
  }, [rangerValue]);
  return (
    <div className="flex justify-center items-center wrapper">
      <div className="phone rounded-lg border border-4 border-inherit shadow-lg text-white overflow-y-scroll">
        <NotificationBar />
        {rangerValue < 70 ? (
          <LockScreen
            setRangerValue={setRangerValue}
            rangerValue={rangerValue}
          />
        ) : (
          <AppScreen
            rangerValue={rangerValue}
            setRangerValue={setRangerValue}
            dataList={dataList}
          />
        )}
      </div>
    </div>
  );
}

export default App;
