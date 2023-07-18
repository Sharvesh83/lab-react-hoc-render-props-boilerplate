import React from 'react';
import withLikeCounter from './HOC';

function LikePost({ handleLikeCount, likeCounter, label }) {
  return (
    <div>
      <button onClick={handleLikeCount}>Like {label} {likeCounter}</button>
    </div>
  );
}

export default withLikeCounter(LikePost, 'Post');
