import React from 'react';
import PropTypes from 'prop-types';

const Topic = ({ topicName }) => (
  <>
    <li>
      <div>
        <h1>{topicName}</h1>
      </div>
    </li>
  </>
);

Topic.propTypes = {
  topicName: PropTypes.string.isRequired,
};

export default Topic;
