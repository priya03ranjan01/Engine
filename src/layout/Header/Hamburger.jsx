import React from "react";

function Hamburger(props) {
  return (
    <button
      type="button"
      onClick={() => props.setMenuOpen(!props.menuOpen)}
      className="ml-2 rounded px-2 md:hidden border-[3px] border-[#a00] hover:opacity-50 focus:opacity-50"
    >
      <i
        className={`text-xl ${!props.menuOpen ? "fa fa-bars" : "fa fa-times"}`}
      ></i>
    </button>
  );
}

export default Hamburger;
