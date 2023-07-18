import React from 'react';
import withLikeCounter from './HOC';

function LikeImage({ handleLikeCount, likeCounter, label }) {
  return (
    <div>
      <button onClick={handleLikeCount}>Like {label} {likeCounter}</button>
    </div>
  );
}

export default withLikeCounter(LikeImage, 'Image');
