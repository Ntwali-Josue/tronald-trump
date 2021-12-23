import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Topic from './Topic';
import { fetchQuotes } from '../../redux/reducers/quotes';
import topicsArray from './topicsArray';
import Search from './Search';

const Home = () => {
  const dispatch = useDispatch();
  const handlePickTopic = (topic) => {
    dispatch(fetchQuotes(topic));
  };

  return (
    <div className="topics-container">
      <Search />
      <ul className="topic-section">
        {
          topicsArray.map((topic) => (
            <NavLink className="topic-route" key={topic.id} to="/details" onClick={() => handlePickTopic(topic.name)}>
              <Topic topicName={topic.name} image={topic.images} count={topic.count} />
            </NavLink>
          ))
        }
      </ul>
    </div>
  );
};

export default Home;
