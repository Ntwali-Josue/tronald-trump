import React from 'react';
// import { v4 as uuidv4 } from 'uuid';
import { NavLink } from 'react-router-dom';
import Topic from './Topic';
import { topics } from '../../redux/reducers/quotes';

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
  const handlePickTopic = (topic) => topics(topic);
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
