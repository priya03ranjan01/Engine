import React from "react";
import TableHeader from "../../components/TableHeader";
import ExecutionsData from "./ExecutionsData";
import PrevOrdersData from "./PrevOrdersData";

function HistoryTable({ data, id, name, setUserOrder }) {
  const table1arr = [
    "OrderId",
    "Time",
    "Symbol",
    "Type",
    "Price",
    "Side",
    "Quantity",
    "Executed",
    "Remaining",
    "Status",
    "Actions",
  ];

  const table2arr = [
    "OrderId",
    "Time",
    "Symbol",
    "Type",
    "Price",
    "Side",
    "Quantity",
    "Executed Quantity",
  ];

  return (
    <div className="mb-8 mx-4 md:mx-8 ">
      <div className="bg-gray-800 mt-1 text-center rounded shadow-shade overflow-x-auto w-full">
        <table className="table-auto text-center text-gray-50 overflow-x-auto w-full">
          {/* <caption className="text-base md:text-lg font-semibold bg-gray-800 text-gray-200 py-1 ">Trade and Executions
              <div className="border-t-2 border-gray-200 flex  w-[9%] mt-1 "></div></caption> */}

          {name === "prevorders" ? (
            <TableHeader arr={table1arr} />
          ) : (
            <TableHeader arr={table2arr} />
          )}

          <tbody>
            {data.map(function (element, key) {
              // console.log(`inside map of history table of ${name}: ${element}`);
              // if (element.userId === id) {
              return (
                <tr
                  className="border border-gray-600 hover:bg-gray-600 active:bg-gray-700 text-md h-[2.8rem]"
                  key={key}
                >
                  {name === "prevorders" ? (
                    <PrevOrdersData
                      element={element}
                      executed={element.executed}
                      index={key}
                      userOrder={data}
                      setUserOrder={setUserOrder}
                    />
                  ) : (
                    <ExecutionsData element={element} />
                  )}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default HistoryTable;
