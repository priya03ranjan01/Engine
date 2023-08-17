import React, { useEffect, useState } from "react";
import Select, { createFilter } from "react-select";

/* Customized React-Select with Validation Messages */

const SelectSymbol = ({ value, onChange, error }) => {
  const [getsymbol, setsymbols] = useState({});
  // console.log("initial", getsymbol)

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const api = "http://localhost:8081/get-topics"
    const result = await fetch(api);
    const getresult = await result.json();
    setsymbols(getresult.getsymbols);
  }

  const customStyles = {
    indicatorSeparator: (styles) => ({ ...styles, display: "none" }),
    control: (base, state) => ({
      ...base,
      background: state.isFocused ? "#fff" : "#F3F4F6",
      borderWidth: state.isFocused ? 2 : 1,
      borderColor: error ? "#CD1409" : "#9CA3AF",
      height: 42,
      boxShadow:
        "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      "@media only screen and (max-width: 640px)": {
        height: 0,
      },
    }),
  };

  return (
    <Select
      value={value}
      onChange={onChange}
      options={getsymbol}
      isClearable={true}
      isSearchable={true}
      filterOption={createFilter({ matchFrom: "start" })}
      className="w-full min-w-fit  rounded-md whitespace-nowrap shadow-sm blue-50"
      placeholder="Select Symbol"
      styles={customStyles}
    />
  );
};

export default SelectSymbol;
