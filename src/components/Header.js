import React from "react";
import Search from "./Search";

function Header({ setFilter }) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search onSearchChange={setFilter}/>
    </header>
  );
}

export default Header;
