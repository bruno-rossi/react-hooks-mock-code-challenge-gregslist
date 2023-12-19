import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, setListings, setIsSorted }) {


  return (
    <main>
      {/* Adding new button with sorting behavior */}
      <button onClick={() => setIsSorted(prevValue => !prevValue)}>Sort Locations: A-Z</button>
      <ul className="cards">
        {/* map the listings array and create a ListingCard component for each listing */}
        {listings.map(listing => <ListingCard key={listing.id} listing={listing} listings={listings} setListings={setListings}/>)}
      </ul>
    </main>
  );
}

export default ListingsContainer;
