import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { NavLink } from 'react-router-dom';

const topics = (topic) => topic;

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

const Home = () => (
  <div>
    {
      topicsArray.map((topic) => (
        <NavLink key={uuidv4()} to="/details" onClick={() => topics(topic)}>{topic}</NavLink>
      ))
    }
  </div>
);

export default Home;
