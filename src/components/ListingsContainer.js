import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, setListings }) {
  return (
    <main>
      <ul className="cards">
        {/* map the listings array and create a ListingCard component for each listing */}
        {listings.map(listing => <ListingCard key={listing.id} listing={listing} listings={listings} setListings={setListings}/>)}
      </ul>
    </main>
  );
}

export default ListingsContainer;
