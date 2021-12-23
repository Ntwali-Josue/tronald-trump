import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Topic from './Topic';
import { fetchQuotes } from '../../redux/reducers/quotes';

const SearchPage = () => {
  const dispatch = useDispatch();
  const handlePickTopic = (topic) => {
    dispatch(fetchQuotes(topic));
  };
  const topic = useSelector((state) => state.quotes.filteredTopics);
  return (
    <div className="details-container">
      <NavLink className="back-btn" to="/">
        <img alt="Back button" src="https://img.icons8.com/ios-glyphs/30/ffffff/circled-left-2.png" />
      </NavLink>
      <div className="filtered-topic">
        <NavLink className="text-white" key={topic.id} to="/details" onClick={() => handlePickTopic(topic.name)}>
          <Topic topicName={topic.name} image={topic.images} count={topic.count} />
        </NavLink>
      </div>
    </div>
  );
};
export default SearchPage;
