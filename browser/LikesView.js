import React from 'react';

export default function LikesView ({ handleClick, likes }) {
  return (
    <div>
      <h3>Likes: {likes}</h3>
      <button className="btn btn-primary" onClick={handleClick}>Like</button>
    </div>
  );
}
