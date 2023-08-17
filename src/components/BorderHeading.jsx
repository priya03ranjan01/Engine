import React from "react";

/* To display underlined-style heading  */
const BorderHeading = ({ heading, bg, borderbg }) => {
  return (
    <>
      <div className="w-full flex justify-center">
        <p
          className={`w-fit text-center  font-semibold mt-2 whitespce-nowrap ${bg}`}
        >
          {heading}
          <span className={`flex w-3/5 mx-auto mt-1 ${borderbg}`}></span>
        </p>
      </div>
    </>
  );
};

export default BorderHeading;
