import React, { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { fetchQuotes } from '../../redux/reducers/quotes';
import Quote from './Quote';

const Quotes = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchQuotes());
  }, []);

  const quotes = useSelector((state) => state.quotes);

  const allQoutes = quotes.map((quote) => (
    <Quote key={uuidv4()} quoteID={quote.quoteID} quoteValue={quote.quoteValue} />
  ));

  return (
    <div>
      yooooooo
      {allQoutes}
    </div>
  );
};

export default Quotes;
