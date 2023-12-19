import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [ listings, setListings ] = useState([]);
  const [ search, setSearch ] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then(response => response.json())
    .then(data => setListings(data))
  }, [])  

  // Create a new variable with searchedArray here
  const searchedListings = listings.filter(listing => listing.description.toLowerCase().includes(search.toLowerCase()));

  console.log(listings);

  return (
    <div className="app">
      <Header search={search} setSearch={setSearch} />
      <ListingsContainer listings={searchedListings} setListings={setListings} />
    </div>
  );
}

export default App;
