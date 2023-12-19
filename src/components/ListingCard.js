import React, { useState } from "react";

function ListingCard({ listing, listings, setListings }) {

  const [ isFavorited, setIsFavorited ] = useState(false);

  function handleClick() {
    setIsFavorited(prevValue => !prevValue);
  }

  function handleDelete(event) {

    const listingsAfterDelete = listings.filter(element => listing.id)

    fetch(`http://localhost:6001/listings/${listing.id}`, {
      method: "DELETE",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    })
    .then(response => response.json())
    .then(() => {
      setListings(listingsAfterDelete);
      console.log(listingsAfterDelete);
      event.target.parentNode.parentNode.remove();
    })
    
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={listing.description} />
      </div>
      <div className="details">
        {isFavorited ? (
          <button className="emoji-button favorite active" onClick={handleClick}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={handleClick}>☆</button>
        )}
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button className="emoji-button delete" onClick={handleDelete}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
