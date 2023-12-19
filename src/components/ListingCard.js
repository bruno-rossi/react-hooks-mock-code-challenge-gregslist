import React, { useState } from "react";

function ListingCard({ listing, listings, setListings }) {

  // Define state for the Favorited button:
  const [ isFavorited, setIsFavorited ] = useState(false);

  // Define function to change the isFavorited boolean onClick:
  function handleClick() {
    setIsFavorited(prevValue => !prevValue);
  }

  // Define function to handle the delete event and DELETE fetch:
  function handleDelete(event) {

    // Set a new array variable to filter out the listing that we are deleting:
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

      // To remove the listing's card from the page, we call the remove() method on the event target's parentNode's parentNode (2 levels above since the button is nested inside a div, which is nested inside the list item <li>): 
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
