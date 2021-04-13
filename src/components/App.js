import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

const url = "http://localhost:6001/listings"

function App() {
  const [listings, setListings] = useState([])
  const [filter, setFilter] = useState("")

  useEffect(() => {
    fetch(url)
      .then(resp => resp.json())
      .then(fetchedListings => {
        setListings(fetchedListings)
      })
  }, [])

  function hanldeListingRemoval(target) {
    fetch(url + target.id, {
      method: "DELETE",
      headers: {
        "content-type": "application/json"
      }
    })
      .then(resp => resp.json())
      .then(onDelete => {
        setListings(listings.filter(toRemove => toRemove.id !== target.id))
      })
  }

  const filteredList = listings.filter(listing => {
    return listing.description.toLowerCase().includes(filter.toLowerCase())
  })

  

  return (
    <div className="app">
      <Header setFilter={setFilter}/>
      <ListingsContainer listings={filteredList} hanldeListingRemoval={hanldeListingRemoval}/>
    </div>
  );
}

export default App;
