import React from 'react';
import PropTypes from 'prop-types';

const Quote = ({ quoteValue }) => (
  <div className="qoutes">
    <p className="qoute">
      &rdquo;
      {quoteValue}
      &rdquo;
    </p>
  </div>
);
Quote.propTypes = {
  quoteValue: PropTypes.string.isRequired,
};

export default Quote;
