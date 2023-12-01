import Axios  from "axios";
import React, { useEffect, useState } from "react";
import { FaEnvelope, FaPhone, FaNeuter } from 'react-icons/fa';

function App() {

  const [details, setDetails] = useState({});

  const fetchUsers = async () => {
    const { data } = await Axios.get(
      "https://randomuser.me/api/?page=1&results=1&seed=abc"
    );
    console.log(data);
    const details = data.results[0];
    setDetails(details);
  }

  useEffect(() => {
    fetchUsers();
  }, [])
  return (
    <div className="bg-slate-200 w-screen h-screen grid place-content-center">
      <div className="grid place-content-center bg-slate-300 grid-flow-row sm:grid-flow-col border-x-4 border-y-4 border-indigo-300 rounded-md">
        <div className="w-auto h-40 m-8 grid place-content-center shadow-xl rounded-md shadow-indigo-300">
          <img
            className="w-40 h-40 rounded-lg"
            src={details.picture?.large}
          ></img>
        </div>
        <div className="w-auto h-40 m-8  text-left font-sans text-xl">
          {/* <div className="grid place-content-start grid-flow-col mb-2">
            <p className="mr-3"><span className="italic font-bold">First Name:-</span> Krishna</p>
            <p><span className="italic font-bold">Last Name:-</span> Kushwaha</p>
          </div> */}
          <p className="mb-4">
            <span className="italic font-bold text-2xl">
              {details.name?.title}. {details.name?.first} {details.name?.last}
            </span>
          </p>
          <div className="flex flex-row">
            <FaNeuter /> <p className="mb-2 ml-1 -mt-1"> {details.gender}</p>
          </div>
          <div className="flex flex-row">
            <FaPhone /> <p className="mb-2 ml-1 -mt-1"> {details.phone}</p>
          </div>
          <div className="flex flex-row">
            <FaEnvelope /> <p className="mb-2 ml-2 -mt-1">{details.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
