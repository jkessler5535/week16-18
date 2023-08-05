import React from 'react';

const Rating = ({ value }) => {
  // Create an array of empty stars
  const stars = Array(5).fill(0);

  return (
    <div>
      {stars.map((_, index) => (
        <span key={index} className={index < value ? 'active' : ''}>
          ★
        </span>
      ))}
    </div>
  );
};

export default Rating;