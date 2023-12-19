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
        <form id="new-form" onSubmit={handleSubmit}>
        <div>
            <label>Add a new item:</label>
            <input
                type="text"
                name="description"
                placeholder="item description"
                value={description}
                onChange={event => setDescription(event.target.value)}
            />
            <input
                type="text"
                name="location"
                placeholder="item location"
                value={location}
                onChange={event => setLocation(event.target.value)}
            />
            <input
                type="text"
                name="image"
                placeholder="item image"
                value={image}
                onChange={event => setImage(event.target.value)}
            />
          <button type="submit"> + </button>
        </div>
          
        </form>
      );
}

export default NewListingForm