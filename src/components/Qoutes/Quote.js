import React from 'react';
import PropTypes from 'prop-types';

const Quote = ({ quoteValue }) => (
  <div>
    {/* <p>{quoteID}</p> */}
    <p>{quoteValue}</p>
  </div>
);
Quote.propTypes = {
  // quoteID: PropTypes.string.isRequired,
  quoteValue: PropTypes.string.isRequired,
};

export default Quote;
