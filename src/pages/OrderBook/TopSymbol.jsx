import React from "react";
import BorderHeading from "../../components/BorderHeading";
import SelectSymbol from "../../components/SelectSymbol";

function TopSymbol(props) {
  return (
    <div className="bg-slate-800 mt-4 min-w-fit w-3/12 py-4 px-6 md:py-6 md:px-10 rounded-md shadow-shade">
      <BorderHeading
        heading="Select Symbol"
        bg=" text-xl md:text-2xl text-gray-200 "
        borderbg="border-gray-200 border-t-[3px] mb-4"
      />

      <SelectSymbol value={props.symbol} onChange={props.setSymbol} />
    </div>
  );
}

export default TopSymbol;
