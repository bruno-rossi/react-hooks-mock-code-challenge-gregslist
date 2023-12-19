import React from "react";

function Search({ search, setSearch }) {
  
  function handleSubmit(e) {
    e.preventDefault();

    // setSearch to equal the search state when submitting the form
    setSearch(search)
    console.log("submitted");
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
