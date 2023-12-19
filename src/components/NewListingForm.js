import React, { useState } from "react";

function NewListingForm({ setListings, listings }) {

    const [ description, setDescription ] = useState("");
    const [ location, setLocation ] = useState("");
    const [ image, setImage ] = useState("")

    function handleSubmit(event) {

        event.preventDefault();

        const newListing = {
            description: event.target.description.value,
            location: event.target.location.value,
            image: event.target.image.value
        }

        fetch("http://localhost:6001/listings", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newListing)
        })
        .then(response => response.json())
        .then( data => setListings(() => [...listings, data]))

    }

    return (
        <form className="searchbar" onSubmit={handleSubmit}>
          <input
            type="text"
            name="description"
            id="new-listing-description"
            placeholder="item description"
            value={description}
            onChange={event => setDescription(event.target.value)}
          />
          <input
            type="text"
            name="location"
            id="new-listing-location"
            placeholder="item location"
            value={location}
            onChange={event => setLocation(event.target.value)}
          />
          <input
            type="text"
            name="image"
            id="new-listing-image"
            placeholder="item image"
            value={image}
            onChange={event => setImage(event.target.value)}

          />
          <button type="submit">+</button>
        </form>
      );
}

export default NewListingForm