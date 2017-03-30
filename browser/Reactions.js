import React from 'react';
import LikesView from './LikesView';
import LovesView from './LovesView';

export default function ({ likes, loves, handleLikeClick, handleLoveClick }) {
  return (
    <div>
      <LikesView likes={likes} handleClick={handleLikeClick} />
      <LovesView loves={loves} handleClick={handleLoveClick} />
    </div> 
  );
}
