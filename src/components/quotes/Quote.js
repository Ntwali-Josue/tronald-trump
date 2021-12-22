import React from 'react';
import PropTypes from 'prop-types';

const Quote = ({ quoteValue }) => (
  <div>
    <p>{quoteValue}</p>
  </div>
);
Quote.propTypes = {
  quoteValue: PropTypes.string.isRequired,
};

export default Quote;
