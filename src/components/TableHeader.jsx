import React from "react";

const TableHeader = ({ arr }) => {
  return (
    <thead className="h-[40px] bg-slate-700 text-base md:text-lg ">
      <tr>
        {arr.map((name) => (
          <th className="w-1/12 px-2 md:px-4 whitespace-nowrap" key={name}>
            {name}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
