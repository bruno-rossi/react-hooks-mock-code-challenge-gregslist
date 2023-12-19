import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";
import NewListingForm from "./NewListingForm";

function App() {

  const [ listings, setListings ] = useState([]);
  const [ search, setSearch ] = useState("");
  const [ isSorted, setIsSorted ] = useState(false);

  // fetch data from db inside useEffect and setListings to be that data
  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then(response => response.json())
    .then(data => setListings(data))
  }, [])  

  // Define a new variable with searchedListings:
  const searchedListings = listings.filter(listing => listing.description.toLowerCase().includes(search.toLowerCase()));

  // Define variable with sortedListings to sort them alphabetically by location:
  const sortedListings = listings.sort(function(a, b){
    if(a.location < b.location) { return -1; }
    if(a.location > b.location) { return 1; }
    return 0;
})

  // Define a listingsToDisplay variable which displays different arrays conditionally based on isSorted: 
  const listingsToDisplay = isSorted ? sortedListings : searchedListings;

  console.log(listingsToDisplay);

  return (
    <div className="app">
      <Header search={search} setSearch={setSearch} />
      <ListingsContainer listings={listingsToDisplay} setListings={setListings} setIsSorted={setIsSorted} />
      <NewListingForm listings={listings} setListings={setListings} />
    </div>
  );
}

export default App;
