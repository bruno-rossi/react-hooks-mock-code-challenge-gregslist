import React from "react";
import Search from "./Search";

function Header({ search, setSearch }) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      {/* Pass down search and setSearch to the Search component */}
      <Search search={search} setSearch={setSearch} />
    </header>
  );
}

export default Header;
