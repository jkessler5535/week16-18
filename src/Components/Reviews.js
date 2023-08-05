import React, { useState, useEffect } from 'react';



const Review = () => {
  const [index, setIndex] = useState(0);
  const quotes = [
    {
      name: " - Jennette Andrews",
      quote: "Best Cupcakes in town!"
    },
    {
      name: " - Sean Smith",
      quote:"These Cupcakes are so fresh everytime I \
      come in to order. They never dissapoint."
    },
    {
      name: " - Crystal Thomas",
      quote:"My favorites are always in stock, staff is\
      friendly and cupcakes are always delicious & fresh \
      to order!"
    },
    {
      name: " - Becky Johnson",
      quote:" This is my favorite cupcake bakery in town! I give it 5 stars! Highly Reccomend!"
    }
  ];

  // The useEffect will trigger whenever the quotes length changes
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 3000);

    // Clean up the interval when the component unmounts or when the quotes length changes
    return () => clearInterval(interval);
  }, [quotes.length]);

  // Access the correct quote using quotes[index].quote
  return (
    <div id="carousel">
      <div className="quote">{quotes[index].quote}</div>
      <div className="name">{quotes[index].name}</div>
    </div>
  );
};

export default Review;