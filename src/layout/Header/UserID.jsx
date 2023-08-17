import React, { useState } from "react";

function UserID(props) {
  const [signOutOpen, setSignOutOpen] = useState(false);

  return (
    <div
      className="bg-gray-100 rounded-2xl cursor-pointer h-7 flex pl-2 mr-2 sm:mr-8 mt-1 drop-shadow-lg max-w-fit min-w-fit hover:scale-110"
      onClick={() => setSignOutOpen(!signOutOpen)}
    >
      <h4 className="outline-none my-0.5 bg-gray-100 w-32 px-2 font-bold whitespace-nowrap overflow-x-auto rounded-2xl" title="Click to Sign Out">
        User ID: {props.userid}
      </h4>
      <i className="fa fa-user text-[47px] text-gray-700 relative bottom-2.5 left-2.5 hover:text-gray-600" >
        <div
          className={
            signOutOpen
              ? " absolute text-gray-700  right-0 -mt-2 w-32 rounded-md shadow-lg bg-white hover:bg-gray-100"
              : "hidden"
          }
        >
          <a href="/" className="block px-4 py-2 text-sm font-normal ">
            Sign out
          </a>
        </div>
      </i>
    </div>
  );
}

export default UserID;
