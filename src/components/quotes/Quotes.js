import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Quote from './Quote';

const Quotes = () => {
  const quotes = useSelector((state) => state.quotes.fetchedQoutes);
  const allQoutes = quotes.map((quote) => (
    <Quote key={uuidv4()} quoteID={quote.quoteID} quoteValue={quote.quoteValue} />
  ));

  return (
    <div className="details-container">
      <NavLink className="back-btn" to="/">
        <img alt="Back button" src="https://img.icons8.com/ios-glyphs/30/ffffff/circled-left-2.png" />
      </NavLink>
      {allQoutes}
    </div>
  );
};

export default Quotes;
