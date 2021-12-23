import React from 'react';
// import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import topicsArray from './topicsArray';
// import Topic from './Topic';
import { filterTopicNames } from '../../redux/reducers/quotes';
// import SearchPage from './SearchPage';

const Search = () => {
  const dispatch = useDispatch();
  // const handlePickTopic = (topic) => {
  //   dispatch(fetchQuotes(topic));
  // };
  const navigate = useNavigate();

  const handleFilterTopic = (e) => {
    const topic = e.target.value;
    dispatch(filterTopicNames(e));
    navigate('/search');
    return topic;
  };

  return (
    <div className="search">
      <span>Search by topic name</span>
      <select name="topics" id="topics" onChange={handleFilterTopic}>
        {topicsArray.map((topic) => (
          <option key={topic.id} placeholder="topic" value={topic.name}>
            {topic.name}
          </option>
        ))}
      </select>
      {/* <NavLink to="/search"> */}
      <input type="submit" value="Search" />
      {/* </NavLink> */}
    </div>
  );
};
export default Search;
