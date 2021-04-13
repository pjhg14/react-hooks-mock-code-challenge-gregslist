import React, { useState } from "react";

function ListingCard({ listing, onRemoveListing }) {
  const { description, image, location } = listing

  const [favorited, setFavorited] = useState(false)

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={"description"} />
      </div>
      <div className="details">
        {favorited ? (
          <button className="emoji-button favorite active" onClick={() => setFavorited(!favorited)}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={() => setFavorited(!favorited)}>☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={() => onRemoveListing(listing)}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
