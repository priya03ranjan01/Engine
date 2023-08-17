import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-200 text-center lg:text-left fixed bottom-0 w-full shadow-shade">
        <div className="text-gray-700 text-center p-1 z-100 ">
          &copy; Copyright: {new Date().getFullYear()}
        </div>
      </footer>
    </>
  );
};

export default Footer;
