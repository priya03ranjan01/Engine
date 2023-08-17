import React from "react";
import BorderHeading from "../../components/BorderHeading";
import TableHeader from "../../components/TableHeader";
import MarketData from "./MarketData";

function OrderDisplay(props) {
  const bookarr = ["Price", "Orders", "Quantity"];

  return (
    <div className="text-center bg-gray-500 rounded-t-md ">
      {/* Table Captions */}
      <div className="bg-gray-800 rounded-t-md ">
        <BorderHeading
          heading={props.content}
          bg="text-xl md:text-2xl text-gray-200 mb-5 -ml-5"
          borderbg="border-gray-200 border-t-[3px]"
        />
      </div>

      <table className="bg-slate-800 text-center text-gray-50 border-b-8 border-gray-800 w-full -mt-4">
        <TableHeader arr={bookarr} />
        {/* To Display Order Book Table Data */}
        {props.symbol !== null && (
          <MarketData
            data={props.data}
            symbol={props.symbol}
            side={props.side}
          />
        )}
      </table>
    </div>
  );
}

export default OrderDisplay;
