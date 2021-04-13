import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, hanldeListingRemoval }) {
  const listingCards = listings.map(listing => {
    return(
      <ListingCard key={listing.id} listing={listing} onRemoveListing={hanldeListingRemoval}/>
    )
  })

  return (
    <main>
      <ul className="cards">
        {listingCards}
      </ul>
    </main>
  );
}

export default ListingsContainer;
