import React from "react";
import Search from "./Search";
import NewListingForm from "./NewListingForm";

function Header({ search, setSearch, setListings, listings }) {
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
      <NewListingForm setListings={setListings} listings={listings} />
    </header>
  );
}

export default Header;
