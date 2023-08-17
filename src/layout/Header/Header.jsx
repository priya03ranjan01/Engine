import React, { useState, useEffect } from "react";
import Button from "./Button";
import Hamburger from "./Hamburger";
import UserID from "./UserID";

export const Header = (props) => {
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("userid"));
    if (items !== null) {
      props.changeauthentication(true);
      props.changeid(items);
    }
  }, []);

  const [menuOpen, setMenuOpen] = useState(false);

  if (props.authentication) {
    return (
      <nav className="py-1.5 bg-red border-b-[6px] border-yellow-0 drop-shadow-lg sticky top-0 min-w-full z-50">
        <div className="flex justify-between p-4 ">
          <div>
            {/* Hamburger menu for responsive design */}
            <Hamburger menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

            {/* Buttons for Navbar */}
            <ul
              className={
                menuOpen
                  ? "flex flex-col gap-y-3 mt-4 md:mt-0 md:flex  md:flex-row w-1"
                  : "hidden md:flex md:flex-row"
              }
            >
              <Button link="order_book" content="Order Book" />
              <Button link="place_order" content="Place Order" />
              <Button link="order_history" content="Order History" />
            </ul>
          </div>

          {/* UserID Display and Sign Out */}
          <UserID userid={props.userid} />
        </div>
      </nav>
    );
  }
};
