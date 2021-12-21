import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchQuotes } from '../redux/reducers/quotes';
import Quote from './Quote';

const Quotes = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchQuotes());
  }, []);

  const quotes = useSelector((state) => state.quotes);
  // console.log(quotes);

  const allQoutes = quotes.map((quote) => (
    // console.log(quote.quoteValue)
    <Quote key={quote.qoute_id} quoteID={quote.quoteID} quoteValue={quote.quoteValue} />
  ));
  console.log(allQoutes);

  return (
    <div>
      yooooooo
      {allQoutes}
    </div>
  );
};

export default Quotes;
