import React from 'react';
import PropTypes from 'prop-types';

const Topic = ({ image, topicName }) => (
  <>
    <li className="topic-item">
      <div>
        <img src={image} className="image" alt="images" />
        <h1 className="topic-title">
          {topicName}
          <img alt="Front button" src="https://img.icons8.com/ios-glyphs/30/ffffff/circled-right-2.png" />
        </h1>
      </div>
    </li>
  </>
);

Topic.propTypes = {
  image: PropTypes.string.isRequired,
  topicName: PropTypes.string.isRequired,
};

export default Topic;
