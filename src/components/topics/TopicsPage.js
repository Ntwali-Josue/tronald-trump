import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Topic from './Topic';
import { fetchQuotes } from '../../redux/reducers/quotes';

const topicsArray = [
  {
    id: 1,
    name: 'WOMEN',
    images: 'https://icons-for-free.com/iconfiles/png/512/female+person+user+woman+young+icon-1320196266256009072.png',
  },
  {
    id: 2,
    name: 'OBAMA',
    images: 'https://purepng.com/public/uploads/large/purepng.com-barack-obamabarack-obamapoliticianamericanpresidentserved-1701528015349anvkm.png',
  },
  {
    id: 3,
    name: 'MONEY',
    images: 'https://cdn3.iconfinder.com/data/icons/glypho-money-and-finance/64/money-dollar-circle-512.png',
  },
  {
    id: 4,
    name: 'APOLOGIES',
    images: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgRTv3hyHyQoYMiBL2vPhCn0sPdyz0W7V18uTDyJc8vALvSf8O4JdYP5DgSrWPk7zirko&usqp=CAU',
  },
  {
    id: 5,
    name: 'TRUMP',
    images: 'https://cdn0.iconfinder.com/data/icons/politicians-vol-2/479/trump_grey-512.png',
  },
  {
    id: 6,
    name: 'CLINTON',
    images: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Clinton_Circle.png/800px-Clinton_Circle.png',
  },
  {
    id: 7,
    name: 'MUSLIMS',
    images: 'https://cdn-icons-png.flaticon.com/512/190/190600.png',
  },
  {
    id: 8,
    name: 'GILFRIENDS',
    images: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyHkPf2pNLFHzRR3j2wwGjFW_vYrZtDO3PRw&usqp=CAU',
  },
  {
    id: 9,
    name: 'HISTORY',
    images: 'https://previews.123rf.com/images/vectorstockcompany/vectorstockcompany1809/vectorstockcompany180900008/108986964-history-icon-linear-simple-element-illustration-clock-with-arrow-concept-outline-symbol-design-vecto.jpg',
  },
  {
    id: 10,
    name: 'TED CRUZ',
    images: 'https://www.gannett-cdn.com/-mm-/2495659f3130e7ec633839597cc03a63838d0a2c/c=0-320-3840-5440/local/-/media/2017/06/22/TXGroup/Abilene/636337541178608717-Ted-Cruz.jpg?width=660&height=880&fit=crop&format=pjpg&auto=webp',
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
              <Topic topicName={topic.name} image={topic.images} />
            </NavLink>
          ))
        }
      </ul>
    </div>
  );
};

export default Home;
