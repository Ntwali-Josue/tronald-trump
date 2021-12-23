import axios from 'axios';
import topicsArray from '../../components/topics/topicsArray';

const FETCH_QUOTES = 'fetch/trump/quotes';
const FILTER_TOPICS = 'filter/topics';

const initialState = {
  countQuotes: 0,
  totalQuotes: 0,
  fetchedQoutes: [],
  filteredTopics: {},
};
export const topics = (topic) => topic;

const fetchApi = 'https://www.tronalddump.io/search/quote?query=';

export const fetchQuotes = (topic) => async (dispatch) => {
  const res = await axios.get(`${fetchApi}${topics(topic)}`);
  const countQuotes = res.data.count;
  const totalQuotes = res.data.total;
  const result = res.data._embedded.quotes;
  const fetchedQoutes = [];
  Object.entries(result).forEach(([key, value]) => {
    const quotes = {
      index: key,
      quoteID: value.quote_id,
      quoteValue: value.value,
    };
    fetchedQoutes.push(quotes);
  });
  dispatch({
    type: FETCH_QUOTES,
    payload: { totalQuotes, countQuotes, fetchedQoutes },
  });
};

export const filterTopicNames = (e) => (dispatch) => {
  const filteredTopics = topicsArray.find((topic) => e.target.value === topic.name);
  dispatch({
    type: FILTER_TOPICS,
    payload: filteredTopics,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_QUOTES:
      return {
        ...state,
        countQuotes: action.payload.countQuotes,
        totalQuotes: action.payload.totalQuotes,
        fetchedQoutes: action.payload.fetchedQoutes,
        filteredTopics: state.filteredTopics,
      };
    case FILTER_TOPICS:
      return {
        ...state,
        filteredTopics: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
