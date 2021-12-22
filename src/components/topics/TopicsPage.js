import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Topic from './Topic';
import { fetchQuotes } from '../../redux/reducers/quotes';

const topicsArray = [
  {
    id: 1,
    name: 'WOMEN',
  },
  {
    id: 2,
    name: 'OBAMA',
  },
  {
    id: 3,
    name: 'MONEY',
  },
  {
    id: 4,
    name: 'APOLOGIES',
  },
  {
    id: 5,
    name: 'TRUMP',
  },
  {
    id: 6,
    name: 'CLINTON',
  },
  {
    id: 7,
    name: 'MUSLIMS',
  },
  {
    id: 8,
    name: 'GILFRIENDS',
  },
  {
    id: 9,
    name: 'HISTORY',
  },
  {
    id: 10,
    name: 'TED CRUZ',
  },
];

const Home = () => {
  const dispatch = useDispatch();
  const handlePickTopic = (topic) => {
    dispatch(fetchQuotes(topic));
  };

  return (
    <div className="topics-container">
      <ul className="topic-section">
        {
          topicsArray.map((topic) => (
            <NavLink className="topic-route" key={topic.id} to="/details" onClick={() => handlePickTopic(topic.name)}>
              <Topic topicName={topic.name} />
            </NavLink>
          ))
        }
      </ul>
    </div>
  );
};

export default Home;
